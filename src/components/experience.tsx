import Badge from "./badge"

interface ExperienceProps {
    experience: {
        company: string;
        position: string;
        start: { timestamp: number; month: string; year: number; };
        end: { timestamp: number; month: string; year: number; };
        duration: number;
        contribution: string[];
    }[]
};

export default function Experience({ experience }: ExperienceProps) {
    return <div>
        <Badge>Work Experience</Badge>
        {experience.map((item, index) => (
            <div key={index} className="mb-4">
                <h4><i>{item.position}</i></h4>
                <h3>{item.company}</h3>
                <h4>{item.start.month} {item.start.year} to {item.end.month} {item.end.year} ({item.duration} months)</h4>
                <ul>
                    {item.contribution.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
}