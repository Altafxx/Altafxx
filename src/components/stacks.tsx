import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/badge";

export default function Stacks() {
    const imageClass = "hover:scale-110 duration-150 opacity-80 hover:opacity-100 hover:rotate-12 transition-all ease-in-out duration-300"

    return (
        <div className="group/container text-center my-3 pt-3 pb-6 bg-lavender-macaron/15 hover:bg-lavender-macaron/30 rounded-lg ring-2 ring-lavender-macaron/50 hover:ring-lavender-macaron transition-all ease-in-out duration-300">
            <div className="flex justify-center ">
                <Badge className="rounded-full px-4 bg-white/0 group-hover/container:bg-white transition-all ease-in-out duration-300">
                    <h1 className="my-2 bg-gradient-to-r from-lavender-macaron via-raspberry-ganache to-golden-honeycomb hover:to-lavender-macaron hover:via-raspberry-ganache hover:from-golden-honeycomb bg-clip-text group-hover/container:text-transparent transition-all ease-in-out duration-300">Primary Toolbelt</h1>
                </Badge></div>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4 px-1">
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://git-scm.com/"} >
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/git.svg"
                                height={64}
                                width={64}
                                alt="Git"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/git.svg"
                                height={64}
                                width={64}
                                alt="Git"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://vercel.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/vercel.svg"
                                height={64}
                                width={64}
                                alt="Vercel"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/vercel.svg"
                                height={64}
                                width={64}
                                alt="Vercel"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Vercel</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://tailwindcss.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/tailwind.svg"
                                height={64}
                                width={64}
                                alt="Tailwind CSS"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/tailwind.svg"
                                height={64}
                                width={64}
                                alt="Tailwind CSS"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://www.typescriptlang.org/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/typescript.svg"
                                height={64}
                                width={64}
                                alt="Typescript"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/typescript.svg"
                                height={64}
                                width={64}
                                alt="Typescript"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Typescript</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://ui.shadcn.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/shadcnui.svg"
                                height={64}
                                width={64}
                                alt="Shadcn/ui"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/shadcnui.svg"
                                height={64}
                                width={64}
                                alt="Shadcn/ui"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Shadcn/ui</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://www.prisma.io/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/prisma.svg"
                                height={64}
                                width={64}
                                alt="Prisma"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/prisma.svg"
                                height={64}
                                width={64}
                                alt="Prisma"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Prisma</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1 md:col-span-1">
                    <Link href={"https://www.postgresql.org/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/postgresql.svg"
                                height={64}
                                width={64}
                                alt="PostgreSQL"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/postgresql.svg"
                                height={64}
                                width={64}
                                alt="PostgreSQL"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Next JS</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1 md:col-span-1">
                    <Link href={"https://nextjs.org/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all ease-in-out duration-300 opacity-0 -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/nextjs.svg"
                                height={64}
                                width={64}
                                alt="Next JS"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/postgresql.svg"
                                height={64}
                                width={64}
                                alt="PostgreSQL"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="text-lg mt-2">PostgreSQL</span>
                </div>
            </div>
        </div>
    );
}
