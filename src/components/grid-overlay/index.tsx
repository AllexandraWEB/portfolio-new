export function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto grid min-h-screen max-w-360 grid-cols-4">
        <div className="border-l border-black/10" />
        <div className="border-l border-black/10" />
        <div className="border-l border-black/10" />
        <div className="border-x border-black/10" />
      </div>
    </div>
  )
}