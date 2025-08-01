"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface UniversityCardProps {
  experience: {
    organization: string;
    position: string;
    start: { month: string; year: number; };
    end: { month: string; year: number; };
    activities: string[];
  }[];
}

export default function UniversityCard({ experience }: UniversityCardProps) {
  return (
    <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-white mb-2">University</h2>
          <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
        </div>

        {/* University Experience List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {experience.map((item, index) => (
            <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300">
              {/* Organization */}
              <div className="mb-3">
                <h3 className="text-white font-semibold text-sm leading-tight">
                  {item.organization}
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 w-fit text-xs">
                    {item.position}
                  </Badge>
                  <div className="text-white/60 text-xs">
                    {item.start.month} {item.start.year} - {item.end.month} {item.end.year}
                  </div>
                </div>
              </div>

              {/* Activities */}
              {item.activities && item.activities.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-white/80 text-sm font-medium">Activities:</h4>
                  <div className="space-y-1">
                    {item.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/70 text-xs leading-relaxed">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
