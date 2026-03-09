"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EducationCardProps {
  education: {
    qualification: string;
    course: string;
    location: string;
    cgpa: number;
    start: { month: string; year: number; };
    end: { month: string; year: number; };
    achievement: { position: string; association: string; }[];
  }[];
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="h-auto md:h-full v3-card-depth bg-gradient-to-br from-stone-800/95 to-stone-900/95 border-stone-600/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-stone-50 mb-2">Education</h2>
          <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
        </div>

        {/* Education List */}
        <div className="space-y-4">
          {education.map((item, index) => (
            <div key={index} className="bg-stone-700/40 rounded-lg p-4 hover:bg-stone-700/50 transition-all duration-300">
              {/* Qualification */}
              <div className="mb-3">
                <h3 className="text-stone-50 font-semibold text-base leading-tight">
                  {item.qualification} in {item.course}
                </h3>
                <p className="text-stone-400 text-sm mt-1">{item.location}</p>
                <div className="text-stone-500 text-xs mt-1">
                  {item.start.month} {item.start.year} - {item.end.month} {item.end.year}
                </div>
              </div>

              {/* CGPA */}
              <div className="mb-3">
                <Badge variant="secondary" className="bg-emerald-600/25 text-emerald-200 hover:bg-emerald-600/35 text-xs">
                  CGPA: {item.cgpa}
                </Badge>
              </div>

              {/* Achievements */}
              {item.achievement && item.achievement.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-stone-300 text-sm font-medium">Achievements:</h4>
                  {item.achievement.map((achievement, achIndex) => (
                    <div key={achIndex} className="bg-stone-600/40 rounded p-2">
                      <div className="text-stone-200 text-sm font-medium">{achievement.position}</div>
                      <div className="text-stone-500 text-xs">{achievement.association}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
