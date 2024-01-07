import Badge from "./badge"

interface EducationProps {
    education: {
        qualification: string;
        course: string;
        location: string;
        cgpa: number;
        start: { month: string; year: number; };
        end: { month: string; year: number; };
        achievement: { position: string; association: string; }[];
    }[]
};

export default function Education({ education }: EducationProps) {
    return <div className="text-left">
        <Badge>Education History</Badge>
        {education.map((item, index) => (
            <div key={index} className="mb-4">
                <h3>
                    {item.qualification} {item.course}
                </h3>
                <h4>{item.location} ({item.start.month} {item.start.year} to {item.end.month} {item.end.year})</h4>
                <ul>
                    {item.achievement.map((item, i) => (
                        <li key={i}>• {item.position}, {item.association}</li>
                    ))}
                </ul>
            </div>
        ))}

    </div>
}