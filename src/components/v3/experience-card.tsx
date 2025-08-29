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
    <Card className="h-auto md:h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col min-h-0 p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
        </div>

        {/* Experience List */}
        <div className="space-y-4 md:flex-1 md:overflow-y-auto custom-scrollbar md:pr-2">
          {experience.map((item, index) => (
            <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300">
              {/* Company and Position */}
              <div className="mb-3">
                <h3 className="text-white font-semibold text-lg">{item.company}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-1">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 w-fit text-sm">
                    {item.position}
                  </Badge>
                  <div className="text-white/60 text-sm">
                    {item.start.month} {item.start.year} - {item.end.month} {item.end.year || 'Present'}
                  </div>
                </div>
                <div className="text-cyan-400 text-sm mt-1">{item.duration}</div>
              </div>

              {/* Contributions */}
              <div className="space-y-2">
                {item.contribution.map((contrib, contribIndex) => (
                  <div key={contribIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80 text-sm leading-relaxed">{contrib}</p>
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
