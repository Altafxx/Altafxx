import Image from "next/image";
import Link from "next/link";
interface BannerProps {
    name: string;
    position: string;
    social: {
        name: string;
        show: boolean;
        link: string[];
    }[]
    ;
}

export default function Banner({ name, position, social }: BannerProps) {
    const logo = [
        "/images/logo/linkedin.svg",
        "/images/logo/github-circle.svg",
        "/images/logo/website.svg",
        "/images/logo/mail.svg"
    ]

    return (
        <div className="text-center md:text-start grid grid-cols-1 md:grid-cols-2">
            <div>
                {/* TODO: On hover text gradient animate */}
                <Link href={"/"}>
                    <h1 className="bg-gradient-to-r from-purple-500 to-teal-300 bg-clip-text hover:text-transparent transition-all">{name}</h1>
                </Link>
                <Link href={"https://en.wikipedia.org/wiki/Software_engineering"}>
                    <h2 className="text-white/80 text-md hover:-skew-x-12">{position}</h2>
                </Link>
                {/* <div className="transition-all bg-animation"></div> */}
            </div>
            <div className="flex overflow-x-auto items-center justify-center gap-4 md:justify-end my-4">
                {
                    // TODO: Pulsing 
                    social.map((item, index) => (
                        <Link key={index} href={item.link.join("")}>
                            <Image
                                priority
                                src={logo[index]}
                                height={48}
                                width={48}
                                alt={item.name}
                                className={"fill-slate-500"}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    );
}