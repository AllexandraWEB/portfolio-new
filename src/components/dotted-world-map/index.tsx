"use client";

type DottedWorldMapProps = {
  className?: string;
};

export default function DottedWorldMap({
  className = "",
}: DottedWorldMapProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${className}`}
    >
      <img
        src="/world-map.png"
        alt=""
        className="h-full w-full object-contain"
        style={{
          filter: "invert(1)",
        }}
      />
    </div>
  );
}