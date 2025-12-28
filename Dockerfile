# ---------- Base ----------
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install system deps (if needed for Prisma / Next builds)
RUN apk update && \
    apk add --no-cache openssl python3 make g++ && \
    rm -rf /var/cache/apk/*
RUN apk add --no-cache libc6-compat

# ---------- Dependencies & Build ----------
FROM base AS build

ENV NODE_ENV=production

ARG BUILD_TARGET

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/web/package.json ./apps/web/
COPY apps/backend/package.json ./apps/backend/
COPY apps/backend/prisma ./apps/backend/prisma

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Generate Prisma client before building (only if building backend)
RUN if [ "$BUILD_TARGET" = "backend" ]; then \
        cd apps/backend && pnpm prisma generate; \
    fi

COPY . .

# Build only the target app (or all if BUILD_TARGET=all)
RUN if [ "$BUILD_TARGET" = "web" ]; then \
        cd apps/web && pnpm run build; \
    elif [ "$BUILD_TARGET" = "backend" ]; then \
        cd apps/backend && pnpm run build; \
    else \
        pnpm run build; \
    fi

# For web: standalone output is already in .next/standalone (no pnpm deploy needed)
# For backend: we still need pnpm deploy

# Deploy backend with production dependencies and copy build output
RUN if [ "$BUILD_TARGET" = "backend" ]; then \
        pnpm deploy --filter=backend --prod /apps/backend && \
        cp -r /usr/src/app/apps/backend/dist /apps/backend/dist; \
    fi

# ---------- Runtime for Next.js app (Standalone) ----------
FROM node:22-alpine AS web

WORKDIR /app

# Copy standalone output (includes minimal node_modules)
COPY --from=build /usr/src/app/apps/web/.next/standalone ./
# Copy static files
COPY --from=build /usr/src/app/apps/web/.next/static ./apps/web/.next/static
# Copy public folder
COPY --from=build /usr/src/app/apps/web/public ./apps/web/public

RUN addgroup --system --gid 74966 nodejs && \
    adduser --system --uid 74966 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000
EXPOSE 3000

# Run standalone server directly (no pnpm needed)
CMD ["node", "apps/web/server.js"]

FROM node:22-alpine AS backend
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY --from=build /apps/backend ./

RUN pnpm prisma generate

RUN addgroup --system --gid 74966 nodejs && \
    adduser --system --uid 74966 nextjs && \
    chown -R nextjs:nodejs /app
USER nextjs

ENV NODE_ENV=production

ENV PORT=4000
EXPOSE 4000

CMD ["pnpm", "start"]