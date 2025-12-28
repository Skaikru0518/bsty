export default function Loading() {
  return (
    <div className="min-h-screen bg-massage-cream flex items-center justify-center">
      <div className="text-center">
        {/* Animated loader */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-massage-sand" />
          <div className="absolute inset-0 rounded-full border-4 border-massage-green border-t-transparent animate-spin" />
        </div>

        {/* Loading text */}
        <p className="text-massage-text-muted animate-pulse">Betöltés...</p>
      </div>
    </div>
  );
}
