import Image from "next/image";
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
        <div className=" grid grid-cols-1 md:grid-cols-2">
            <div>
                <h1>{name}</h1>
                <h2>{position}</h2>
            </div>
            <div className="flex overflow-x-auto gap-4 md:justify-end my-4">
                {
                    social.map((item, index) => (
                        <a key={index} href={item.link.join("")}>
                            <Image
                                priority
                                src={logo[index]}
                                height={48}
                                width={48}
                                alt={item.name}
                            />
                        </a>
                    ))}
            </div>
        </div>
    );
}