"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackpackIcon, StarIcon, PersonIcon } from "@radix-ui/react-icons"

interface EducationProps {
    education: {
        qualification: string;
        course: string;
        location: string;
        cgpa: number;
        start: { month: string; year: number; };
        end: { month: string; year: number; };
        achievement: { position: string; association: string; }[];
    }[];
    university_experience: {
        organization: string;
        position: string;
        start: { month: string; year: number; };
        end: { month: string; year: number; };
        activities: string[];
    }[];
}

export default function EducationV2({ education, university_experience }: EducationProps) {
    return (
        <div className="space-y-3 h-full overflow-y-auto pr-2">
            <div className="text-center mb-3">
                <h2 className="text-lg font-bold text-white">Education & Leadership</h2>
                <p className="text-white/70 text-xs">Academic background and university involvement</p>
            </div>

            {/* Education Section */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <BackpackIcon width={16} height={16} className="text-cyan-400" />
                    Academic Qualification
                </h3>

                {education.map((item, index) => (
                    <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
                        <CardHeader className="pb-2 pt-3 px-4">
                            <CardTitle className="text-white text-base">{item.qualification} in {item.course}</CardTitle>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                                <div className="text-white/70 text-xs">{item.location}</div>
                                <div className="text-xs text-white/60">
                                    {item.start.month} {item.start.year} - {item.end.month} {item.end.year}
                                </div>
                            </div>
                            <Badge variant="secondary" className="bg-green-600/20 text-green-200 hover:bg-green-600/30 w-fit text-xs">
                                CGPA: {item.cgpa}
                            </Badge>
                        </CardHeader>

                        {item.achievement.length > 0 && (
                            <CardContent className="pt-0 px-4 pb-3">
                                <div className="space-y-1.5">
                                    <h4 className="text-white/80 font-medium text-xs mb-1.5 flex items-center gap-2">
                                        <StarIcon width={14} height={14} className="text-yellow-400" />
                                        Achievements:
                                    </h4>
                                    <ul className="space-y-1">
                                        {item.achievement.map((achievement, i) => (
                                            <li key={i} className="text-white/70 text-xs flex items-start">
                                                <span className="text-yellow-400 mr-1.5 mt-1 text-xs">★</span>
                                                <span className="flex-1 leading-relaxed">
                                                    <strong>{achievement.position}</strong> - {achievement.association}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>

            {/* University Experience Section */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <PersonIcon width={16} height={16} className="text-purple-400" />
                    Leadership & Organizations
                </h3>

                {university_experience.map((item, index) => (
                    <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
                        <CardHeader className="pb-2 pt-3 px-4">
                            <CardTitle className="text-white text-sm leading-tight">{item.organization}</CardTitle>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                                <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 w-fit text-xs">
                                    {item.position}
                                </Badge>
                                <div className="text-xs text-white/60">
                                    {item.start.month} {item.start.year} - {item.end.month} {item.end.year}
                                </div>
                            </div>
                        </CardHeader>

                        {item.activities.length > 0 && (
                            <CardContent className="pt-0 px-4 pb-3">
                                <div className="space-y-1.5">
                                    <h4 className="text-white/80 font-medium text-xs mb-1.5">Key Activities:</h4>
                                    <ul className="space-y-1">
                                        {item.activities.map((activity, i) => (
                                            <li key={i} className="text-white/70 text-xs flex items-start">
                                                <span className="text-purple-400 mr-1.5 mt-1 text-xs">▸</span>
                                                <span className="flex-1 leading-relaxed">{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    )
}
