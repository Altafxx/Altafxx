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
    <Card className="h-auto md:h-full v3-card-depth bg-gradient-to-br from-stone-800/95 to-stone-900/95 border-stone-600/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col min-h-0 p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-stone-50 mb-2">University Experience</h2>
          <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
        </div>

        {/* University Experience List */}
        <div className="space-y-4 md:flex-1 md:overflow-y-auto custom-scrollbar md:pr-2">
          {experience.map((item, index) => (
            <div key={index} className="bg-stone-700/40 rounded-lg p-4 hover:bg-stone-700/50 transition-all duration-300">
              {/* Organization */}
              <div className="mb-3">
                <h3 className="text-stone-50 font-semibold text-sm leading-tight">
                  {item.organization}
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <Badge variant="secondary" className="bg-amber-600/25 text-amber-200 hover:bg-amber-600/35 w-fit text-xs">
                    {item.position}
                  </Badge>
                  <div className="text-stone-500 text-xs">
                    {item.start.month} {item.start.year} - {item.end.month} {item.end.year}
                  </div>
                </div>
              </div>

              {/* Activities */}
              {item.activities && item.activities.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-stone-300 text-sm font-medium">Activities:</h4>
                  <div className="space-y-1">
                    {item.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-400 text-xs leading-relaxed">{activity}</p>
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
