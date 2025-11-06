function Logo({ size = 40, className = '' }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-amber-700 text-amber-50 font-bold select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Naitika Foundations logo"
    >
      <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="nfGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#nfGrad)" opacity="0.15" />
        <path d="M18 44V20h6l12 14V20h10v24h-6L28 30v14H18z" fill="#FFF7ED" />
      </svg>
    </div>
  )
}

export default Logo
