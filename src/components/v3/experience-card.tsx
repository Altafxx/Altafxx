"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  experience: {
    company: string;
    position: string;
    start: { month: string; year: number | null; };
    end: { month: string; year: number | null; };
    duration: string;
    contribution: string[];
  }[];
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="h-auto md:h-full v3-card-depth bg-gradient-to-br from-stone-800/95 to-stone-900/95 border-stone-600/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col min-h-0 p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-stone-50 mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
        </div>

        {/* Experience List */}
        <div className="space-y-4 md:flex-1 md:overflow-y-auto custom-scrollbar md:pr-2">
          {experience.map((item, index) => (
            <div key={index} className="bg-stone-700/40 rounded-lg p-4 hover:bg-stone-700/50 transition-all duration-300">
              {/* Company and Position */}
              <div className="mb-3">
                <h3 className="text-stone-50 font-semibold text-lg">{item.company}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-1">
                  <Badge variant="secondary" className="bg-amber-600/25 text-amber-200 hover:bg-amber-600/35 w-fit text-sm">
                    {item.position}
                  </Badge>
                  <div className="text-stone-500 text-sm">
                    {item.start.month} {item.start.year} - {item.end.month} {item.end.year || 'Present'}
                  </div>
                </div>
                <div className="text-amber-400 text-sm mt-1">{item.duration}</div>
              </div>

              {/* Contributions */}
              <div className="space-y-2">
                {item.contribution.map((contrib, contribIndex) => (
                  <div key={contribIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-stone-300 text-sm leading-relaxed">{contrib}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
