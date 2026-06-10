"use client";


interface AppButtonsProps {
  showLabel?: boolean;
  className?: string;
}

export function AppButtons({ showLabel = true, className = "" }: AppButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <button
        aria-label="App Store'dan indir (Yakında)"
        className="relative flex items-center gap-2.5 bg-ink text-white px-5 py-3 rounded-2xl hover:bg-ink/90 transition-all duration-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-70 font-medium">İndir</div>
          <div className="text-sm font-bold">App Store</div>
        </div>
        {showLabel && (
          <span className="absolute -top-2 -right-2 bg-mustard text-ink text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
            Yakında
          </span>
        )}
      </button>

      <button
        aria-label="Google Play'den indir (Yakında)"
        className="relative flex items-center gap-2.5 bg-ink text-white px-5 py-3 rounded-2xl hover:bg-ink/90 transition-all duration-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0" aria-hidden="true">
          <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8zm2-2.31l10.55-6.19L5 5.81v12.38z" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-70 font-medium">İndir</div>
          <div className="text-sm font-bold">Google Play</div>
        </div>
        {showLabel && (
          <span className="absolute -top-2 -right-2 bg-mustard text-ink text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
            Yakında
          </span>
        )}
      </button>
    </div>
  );
}
