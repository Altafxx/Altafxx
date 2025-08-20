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
    <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-white mb-2">Education</h2>
          <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
        </div>

        {/* Education List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {education.map((item, index) => (
            <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300">
              {/* Qualification */}
              <div className="mb-3">
                <h3 className="text-white font-semibold text-base leading-tight">
                  {item.qualification} in {item.course}
                </h3>
                <p className="text-white/70 text-sm mt-1">{item.location}</p>
                <div className="text-white/60 text-xs mt-1">
                  {item.start.month} {item.start.year} - {item.end.month} {item.end.year}
                </div>
              </div>

              {/* CGPA */}
              <div className="mb-3">
                <Badge variant="secondary" className="bg-green-600/20 text-green-200 hover:bg-green-600/30 text-xs">
                  CGPA: {item.cgpa}
                </Badge>
              </div>

              {/* Achievements */}
              {item.achievement && item.achievement.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-white/80 text-sm font-medium">Achievements:</h4>
                  {item.achievement.map((achievement, achIndex) => (
                    <div key={achIndex} className="bg-slate-600/30 rounded p-2">
                      <div className="text-white/90 text-sm font-medium">{achievement.position}</div>
                      <div className="text-white/60 text-xs">{achievement.association}</div>
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
