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
    return <div className="group text-left rounded-lg hover:bg-lavender-macaron/30 hover:ring-2 ring-lavender-macaron/30 p-3 transition-all ease-in-out duration-300">
        <Badge className="bg-white bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text group-hover:bg-clip-border px-2 text-transparent shadow-md shadow-lavender-macaron transition-all group-hover:scale-105 group-hover:from-lavender-macaron group-hover:to-raspberry-ganache group-hover:text-white ease-in-out duration-300">Work Experience</Badge>
        {experience.map((item, index) => (
            <div key={index} className="mb-4">
                <h4><i>{item.position}</i></h4>
                <h3>{item.company}</h3>
                <h4>{item.start.month} {item.start.year} to {item.end.month} {item.end.year} ({item.duration} months)</h4>
                <ul className="pl-5">
                    {item.contribution.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
}