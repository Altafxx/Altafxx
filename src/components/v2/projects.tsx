"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon } from "@radix-ui/react-icons"

interface ProjectsProps {
    projects: {
        name: string;
        site: string[];
        description: string;
    }[];
}

export default function ProjectsV2({ projects }: ProjectsProps) {
    return (
        <div className="space-y-3 h-full overflow-y-auto pr-2">
            <div className="text-center mb-3">
                <h2 className="text-lg font-bold text-white">Open Source Projects</h2>
                <p className="text-white/70 text-xs">Personal projects and contributions</p>
            </div>

            <div className="grid gap-3">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
                        <CardHeader className="pb-2 pt-3 px-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-white text-base mb-1.5 group-hover:text-cyan-300 transition-colors">
                                        {project.name}
                                    </CardTitle>
                                    <Badge variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 text-xs">
                                        Open Source
                                    </Badge>
                                </div>
                                <a
                                    href={project.site.join("")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-cyan-300 transition-colors p-1.5 hover:bg-slate-600/50 rounded-md"
                                >
                                    <ExternalLinkIcon width={16} height={16} />
                                </a>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-0 px-4 pb-3">
                            <p className="text-white/70 text-xs mb-2 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <a
                                    href={project.site.join("")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors flex items-center gap-1"
                                >
                                    Visit Project
                                    <ExternalLinkIcon width={12} height={12} />
                                </a>
                                <div className="text-xs text-white/50">
                                    {project.site.join("").replace("https://", "").replace("http://", "")}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
