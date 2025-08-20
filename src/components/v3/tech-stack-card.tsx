"use client"
import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'

const stacks = [
  "/images/logo/light/typescript.svg",
  "/images/logo/light/nextjs.svg",
  "/images/logo/light/tailwind.svg",
  "/images/logo/light/postgresql.svg",
  "/images/logo/light/docker.svg",
  "/images/logo/light/git.svg",
  "/images/logo/light/vercel.svg",
  "/images/logo/light/shadcnui.svg",
  "/images/logo/light/laravel.svg",
  "/images/logo/light/flutter.svg",
  "/images/logo/light/golang.svg",
  "/images/logo/light/python.svg"
]

const stackNames = [
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Git",
  "Vercel",
  "Shadcn/ui",
  "Laravel",
  "Flutter",
  "Go",
  "Python"
]

export default function TechStackCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Tech Stack</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
        </div>

        {/* Tech Grid */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-4 gap-4">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="group relative p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 cursor-pointer transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={stack}
                  height={32}
                  width={32}
                  alt={stackNames[index]}
                  className="mx-auto transition-all duration-300 group-hover:scale-110"
                />
                
                {/* Tooltip */}
                {hoveredIndex === index && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                    {stackNames[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm">
            Technologies I work with
          </p>
        </div>
      </div>
    </Card>
  )
}
