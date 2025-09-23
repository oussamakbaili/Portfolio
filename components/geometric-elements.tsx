export function GeometricElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg floating-element transform rotate-12"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 rounded-full floating-element"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary/5 rounded-lg floating-element transform -rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-primary/15 rounded-full floating-element"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/20"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
