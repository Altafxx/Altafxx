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
    return <div className="group text- rounded-lg hover:bg-slate-700/30 hover:ring-2 ring-slate-500/30 p-3 transition-all">
        <Badge className="bg-gradient-to-r group-hover:to-purple-500/50 group-hover:from-teal-300/50 shadow-black shadow-lg group-hover:scale-105 transition-all">Volunteer Work and Interests</Badge>
        {
            open_source.map((item, index) => (
                <div key={index} className={`${open_source.length != index + 1 ? "mb-4" : ""}`}>
                    <Link href={item.site.join("")}>
                        <h3 className="text-left">
                            {item.name} ({item.site[1]})
                        </h3>
                    </Link>
                    <p>{item.description}</p>
                </div>
            ))
        }
    </div>
}