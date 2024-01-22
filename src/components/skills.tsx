// skills.tsx
import React from 'react';
import Badge from "@/components/badge";

interface SkillsProps {
    skill: {
        language: string[];
        framework: string[][];
        ui: string[];
        database: string[];
        other: string[];

    };
}

export default function Skills({ skill }: SkillsProps) {
    return (
        <div className="group text-left rounded-lg hover:bg-lavender-macaron/30 hover:ring-2 ring-lavender-macaron/30 p-3 transition-all ease-in-out duration-300">
            <Badge className="bg-white bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text group-hover:bg-clip-border px-2 text-transparent shadow-md shadow-lavender-macaron transition-all group-hover:scale-105 group-hover:from-lavender-macaron group-hover:to-raspberry-ganache group-hover:text-white ease-in-out duration-300">Relevant Skills</Badge>
            <h3>Language:</h3>
            <ul className="mb-4 pl-5">
                {skill.language.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Framework:</h3>
            <ul className="mb-4 pl-5">
                {skill.framework.map((item, index) => (
                    <li key={index}>{item[0]} ({item[1]})</li>
                ))}
            </ul>
            <h3>UI:</h3>
            <ul className="mb-4 pl-5">
                {skill.ui.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Databases:</h3>
            <ul className="mb-4 pl-5">
                {skill.database.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Others:</h3>
            <ul className="mb-4 pl-5">
                {skill.other.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
