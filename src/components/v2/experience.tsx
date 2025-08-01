"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
    experience: {
        company: string;
        position: string;
        start: { month: string; year: number | null; };
        end: { month: string; year: number | null; };
        duration: string;
        contribution: string[];
    }[];
}

export default function ExperienceV2({ experience }: ExperienceProps) {
    // Group experiences by company
    const groupedExperience = experience.reduce((acc, item) => {
        const existingCompany = acc.find(group => group.company === item.company);
        if (existingCompany) {
            existingCompany.positions.push(item);
        } else {
            acc.push({
                company: item.company,
                positions: [item]
            });
        }
        return acc;
    }, [] as { company: string; positions: typeof experience }[]);

    return (
        <div className="space-y-3 h-full overflow-y-auto pr-2">
            <div className="text-center mb-3">
                <h2 className="text-lg font-bold text-white">Work Experience</h2>
                <p className="text-white/70 text-xs">Professional journey and achievements</p>
            </div>

            {groupedExperience.map((companyGroup, index) => (
                <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
                    <CardHeader className="pb-2 pt-3 px-4">
                        <CardTitle className="text-white text-base mb-2">{companyGroup.company}</CardTitle>

                        {/* Multiple positions for the same company */}
                        <div className="space-y-2">
                            {companyGroup.positions.map((position, posIndex) => (
                                <div key={posIndex} className="flex flex-col space-y-1.5">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 w-fit text-xs">
                                            {position.position}
                                        </Badge>
                                        <div className="text-xs text-white/60">
                                            {position.start.month} {position.start.year} - {position.end.month} {position.end.year || ''}
                                            <span className="ml-1 text-cyan-300">({position.duration})</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardHeader>

                    {/* Show contributions from all positions */}
                    {companyGroup.positions.some(pos => pos.contribution.length > 0) && (
                        <CardContent className="pt-0 px-4 pb-3">
                            <div className="space-y-1.5">
                                <h4 className="text-white/80 font-medium text-xs mb-1.5">Key Contributions:</h4>
                                <ul className="space-y-1">
                                    {companyGroup.positions.flatMap(pos => pos.contribution).map((contrib, i) => (
                                        <li key={i} className="text-white/70 text-xs flex items-start">
                                            <span className="text-cyan-400 mr-1.5 mt-1 text-xs">▸</span>
                                            <span className="flex-1 leading-relaxed">{contrib}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    )}
                </Card>
            ))}
        </div>
    )
}
