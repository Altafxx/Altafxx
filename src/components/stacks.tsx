import Image from "next/image";
import Link from "next/link";

export default function Stacks() {
    const imageClass = "hover:scale-110 duration-150 opacity-80 hover:opacity-100 hover:rotate-12 transition-all"

    return (
        <div className="group/container text-center my-3 py-3 bg-slate-700/15 hover:bg-slate-700/30 rounded-lg ring-2 ring-purple-800/50 hover:ring-purple-800/50 shadow-xl hover:shadow-purple-500 transition-all">
            <h1 className="my-2 bg-gradient-to-r from-purple-500 to-teal-300 hover:to-purple-500 hover:from-teal-300 bg-clip-text group-hover/container:text-transparent  shadow-lg transition-all">Primary Toolbelt</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-4 px-1">
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://git-scm.com/"} >
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/git.svg"
                                height={64}
                                width={64}
                                alt="Git"
                                className={imageClass}
                            />
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://vercel.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/vercel.svg"
                                height={64}
                                width={64}
                                alt="Vercel"
                                className={imageClass}
                            />
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Vercel</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://tailwindcss.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/tailwind.svg"
                                height={64}
                                width={64}
                                alt="Tailwind CSS"
                                className={imageClass}
                            />
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://www.typescriptlang.org/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/typescript.svg"
                                height={64}
                                width={64}
                                alt="Typescript"
                                className={imageClass}
                            />
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Typescript</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://ui.shadcn.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/shadcnui.svg"
                                height={64}
                                width={64}
                                alt="Shadcn/ui"
                                className={imageClass}
                            />
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Shadcn/ui</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://www.prisma.io/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/prisma.svg"
                                height={64}
                                width={64}
                                alt="Prisma"
                                className={imageClass}
                            />
                        </div>
                    </Link>
                    <span className="text-lg mt-2">Prisma</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-3 md:col-span-1">
                    <Link href={"https://www.postgresql.org/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/postgresql.svg"
                                height={64}
                                width={64}
                                alt="PostgreSQL"
                                className={imageClass}
                            />
                        </div>
                    </Link>
                    <span className="text-lg mt-2">PostgreSQL</span>
                </div>
            </div>
        </div>
    );
}
