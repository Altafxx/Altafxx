import Image from "next/image";

export default function Stacks() {
    return (
        <div className="text-center my-6">
            <h1 className="my-2">Primary Toolbelt</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
                <div className="flex flex-col items-center justify-center col-span-1">
                    <Image
                        priority
                        src="/images/logo/git.svg"
                        height={64}
                        width={64}
                        alt="Git"
                    />
                    <span className="text-lg mt-2">Github</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1">
                    <Image
                        priority
                        src="/images/logo/vercel.svg"
                        height={64}
                        width={64}
                        alt="Vercel"
                    />
                    <span className="text-lg mt-2">Vercel</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1">
                    <Image
                        priority
                        src="/images/logo/typescript.svg"
                        height={64}
                        width={64}
                        alt="Typescript"
                    />
                    <span className="text-lg mt-2">Typescript</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1">
                    <Image
                        priority
                        src="/images/logo/tailwind.svg"
                        height={64}
                        width={64}
                        alt="Tailwind CSS"
                    />
                    <span className="text-lg mt-2">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1">
                    <Image
                        priority
                        src="/images/logo/shadcnui.svg"
                        height={64}
                        width={64}
                        alt="Shadcn/ui"
                    />
                    <span className="text-lg mt-2">Shadcn/ui</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1">
                    <Image
                        priority
                        src="/images/logo/prisma.svg"
                        height={64}
                        width={64}
                        alt="Git"
                    />
                    <span className="text-lg mt-2">Prisma</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1">
                    <Image
                        priority
                        src="/images/logo/postgresql.svg"
                        height={64}
                        width={64}
                        alt="Git"
                    />
                    <span className="text-lg mt-2">PostgreSQL</span>
                </div>
            </div>
        </div>
    );
}
