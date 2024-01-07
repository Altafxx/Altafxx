import Link from "next/link";
import Badge from "./badge"

interface VolunteerProps {
    open_source: {
        name: string;
        site: string[];
        description: string;
    }[];
};

export default function Volunteer({ open_source }: VolunteerProps) {
    return <div className="text-left">
        <Badge>Volunteer Work and Interests</Badge>
        {
            open_source.map((item, index) => (
                <div key={index} className={`${open_source.length != index + 1 ? "mb-4" : ""}`}>
                    <Link href={item.site.join("")}>
                        <h3>
                            {item.name} ({item.site[1]})
                        </h3>
                    </Link>
                    <p>{item.description}</p>
                </div>
            ))
        }
    </div>
}