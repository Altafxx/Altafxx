"use client"

import dynamic from "next/dynamic"

const Dither = dynamic(
  () => import("@/components/Dither").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900"
        aria-hidden
      />
    ),
  }
)

export default function DitherBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-[1] blur-md scale-110">
      <Dither
        waveSpeed={0.05}
        waveFrequency={3}
        waveAmplitude={0.3}
        waveColor={[0.98, 0.75, 0.2]}
        colorNum={4}
        pixelSize={2}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={1}
      />
    </div>
  )
}
