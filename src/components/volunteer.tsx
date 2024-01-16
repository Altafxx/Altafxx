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
    return <div className="group text- rounded-lg hover:bg-lavender-macaron/30 hover:ring-2 ring-lavender-macaron/30 p-3 transition-all ease-in-out duration-300">
        <Badge className="bg-white bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text group-hover:bg-clip-border px-2 text-transparent shadow-md shadow-lavender-macaron transition-all group-hover:scale-105 group-hover:from-lavender-macaron group-hover:to-raspberry-ganache group-hover:text-white ease-in-out duration-300">Volunteer Work and Interests</Badge>
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