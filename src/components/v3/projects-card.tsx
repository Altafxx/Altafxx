"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectsCardProps {
  projects: {
    name: string;
    description: string;
    tech?: string[];
    link?: string[];
    site?: string[];
  }[];
}

export default function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <Card className="h-auto md:h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col min-h-0 p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-4 md:flex-1 md:overflow-y-auto custom-scrollbar md:pr-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300 group">
              {/* Project Name */}
              <div className="mb-3">
                <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/70 text-sm mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              {project.tech && project.tech.length > 0 && (
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-200 hover:bg-blue-600/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Link */}
              <div className="flex items-center gap-2">
                <a
                  href={(project.link || project.site)?.join('')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                  </svg>
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
