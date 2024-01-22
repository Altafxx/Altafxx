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
        "/images/logo/light/linkedin.svg",
        "/images/logo/light/github-circle.svg",
        "/images/logo/light/website.svg",
        "/images/logo/light/mail.svg"
    ]

    return (
        <div className="text-center md:text-start grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center md:items-start">
                {/* TODO: On hover text gradient animate */}
                <h1 className="text-lavender-macaron bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text hover:text-transparent transition-all w-fit ease-in-out duration-300">
                    <Link href={"/"}>
                        {name}
                    </Link>
                </h1>
                <h2 className="text-black/70 text-md hover:-skew-x-12 w-fit ease-in-out duration-300">
                    <Link href={"https://en.wikipedia.org/wiki/Software_engineering"}>
                        {position}
                    </Link>
                </h2>
                {/* <div className="transition-all bg-animation"></div> */}
            </div>
            <div className="flex overflow-x-auto items-center justify-center gap-4 md:justify-end my-4 pr-1">
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
                                className={"scale-90 hover:scale-100 ease-in-out duration-300"}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    );
}