"use client"
import * as React from "react"
import Image from "next/image"
// import { NodeJS } from 'node';

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

const stacks = [
    "/images/logo/light/git.svg",
    "/images/logo/light/vercel.svg",
    "/images/logo/light/tailwind.svg",
    "/images/logo/light/typescript.svg",
    "/images/logo/light/shadcnui.svg",
    "/images/logo/light/prisma.svg",
    "/images/logo/light/nextjs.svg",
    "/images/logo/light/postgresql.svg"
]

const stackNames = [
    "Git",
    "Vercel",
    "Tailwind",
    "Typescript",
    "Shadcn/ui",
    "Prisma",
    "Next JS",
    "Postgresql"
]

const stackLinks = [
    "https://git-scm.com/",
    "https://vercel.com/",
    "https://tailwindcss.com/",
    "https://www.typescriptlang.org/",
    "https://ui.shadcn.com/",
    "https://www.prisma.io/",
    "https://nextjs.org/",
    "https://www.postgresql.org/",
]

const stackDef = [
    "Git is a popular version control system for tracking changes in computer files. It's particularly useful for software development projects where multiple people collaborate on the code",
    "Vercel is a cloud platform designed specifically for the frontend aspects of web development, often referred to as the \"Frontend Cloud\".  In simpler terms, it helps developers deploy and manage the user-facing parts of websites and web applications.",
    "Tailwind CSS is a CSS framework unlike others. Instead of pre-built styles, it offers basic building blocks (utility classes) that you combine directly in your HTML for quick, custom website design.",
    "Typescript is a superset of JavaScript that adds static typing to the language. It helps catch errors early in the development process, making your code more reliable and easier to maintain.",
    "Shadcn/ui offers pre-built buttons, forms, etc. for your web apps. Just copy and paste! Save time, customize freely, and build accessible apps.",
    "Prisma simplifies talking to your database. Define your data, write safe queries, and manage changes easily. It acts like a translator between your code and the database, making data management smooth.",
    "Next.js is a React framework that enables server-side rendering and static site generation for React applications. It allows you to build web applications with speed and efficiency, providing a great developer experience.",
    "PostgreSQL is a powerful, open-source object-relational database system. It's known for its reliability, robustness, and performance, making it a popular choice for many applications.",
]

const useResponsiveWidth = () => {
    if (typeof window !== 'undefined') {
        const [screenWidth, setScreenWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setScreenWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const responsiveWidth = screenWidth <= 768 ? 42 : screenWidth <= 1024 ? 58 : 88; // Adjust breakpoint as needed

        return responsiveWidth;
    }
    return 88;
};
export function Toolbelt() {
    const [current, setCurrent] = React.useState(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => (current + 1) % stacks.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    function clickFunc(index: number) {
        if (current === index) {
            var mouseClick = new Audio("sounds/mouse-click.mp3");
            mouseClick.play();
            return;
        }

        setCurrent(index);
        var mouseClick = new Audio("sounds/bubble.mp3");
        mouseClick.play();
    }


    return (
        <Card>
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid lg:grid-cols-2">
                        <div className="grid grid-cols-4 lg:grid-cols-2 gap-4">
                            {Array.from(stacks).map((_, index) => {
                                return (
                                    <div key={index} className={`m-2 p-1.5 md:p-2  rounded-sm bg-gradient-to-tl from-pink-400/40 via-purple-400/40 to-cyan-400/40 w-fit self-center select-none cursor-pointer hover:from-pink-400/60 group hover:shadow-md ring ${index == current ? "ring-2 ring-pink-400" : "ring-0"} transition-all duration-300 ease-in-out`} onClick={() => clickFunc(index)}>
                                        <Image
                                            priority
                                            src={stacks[index]}
                                            height={24}
                                            width={24}
                                            alt={stackNames[index]}
                                            className={`group-hover:rotate-12 group-hover:animate-tilt transition-all  duration-300 ${index == current ? "scale-125" : ""}`}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <Card className="flex flex-col items-center justify-center py-2 text-center  select-none shadow-md">
                            <Image
                                key={current}
                                priority
                                src={stacks[current]}
                                height={useResponsiveWidth()}
                                width={useResponsiveWidth()}
                                alt="Logo"
                                className="transition-all duration-300 ease-in-out"
                            />
                            <div className="mt-2 font-medium text-center">{stackNames[current]}</div>
                        </Card>

                    </div>
                    <div className="lg:flex-1 h-full justify-between">
                        <div className="grid grid-flow-row my-2 xl:my-4">
                            <div>
                                <div className="text-lg font-semibold">{stackNames[current]}</div>
                                <div className="text-xs md:text-sm ">
                                    {stackDef[current]}
                                </div>
                            </div>
                        </div>
                        <div className="text-xs md:text-sm">  <div className="">
                            <div>Product Site:</div>
                            <a href={stackLinks[current]} className="text-blue-500">{stackLinks[current]}</a>
                        </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
