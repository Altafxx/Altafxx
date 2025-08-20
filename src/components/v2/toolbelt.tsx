"use client"
import * as React from "react"
import Image from "next/image"
// import { NodeJS } from 'node';

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { playSound } from "@/utils/soundManager"

const stacks = [
    "/images/logo/light/typescript.svg",
    "/images/logo/light/nextjs.svg",
    "/images/logo/light/tailwind.svg",
    "/images/logo/light/postgresql.svg",
    "/images/logo/light/docker.svg",
    "/images/logo/light/git.svg",
    "/images/logo/light/vercel.svg",
    "/images/logo/light/shadcnui.svg",
    "/images/logo/light/laravel.svg",
    "/images/logo/light/flutter.svg",
    "/images/logo/light/golang.svg",
    "/images/logo/light/python.svg"
]

const stackNames = [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Docker",
    "Git",
    "Vercel",
    "Shadcn/ui",
    "Laravel",
    "Flutter",
    "Go",
    "Python"
]

const stackLinks = [
    "https://www.typescriptlang.org/",
    "https://nextjs.org/",
    "https://tailwindcss.com/",
    "https://www.postgresql.org/",
    "https://www.docker.com/",
    "https://git-scm.com/",
    "https://vercel.com/",
    "https://ui.shadcn.com/",
    "https://laravel.com/",
    "https://flutter.dev/",
    "https://golang.org/",
    "https://www.python.org/"
]

const stackDef = [
    "TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors early in the development process, making your code more reliable and easier to maintain.",
    "Next.js is a React framework that enables server-side rendering and static site generation for React applications. It allows you to build web applications with speed and efficiency, providing a great developer experience.",
    "Tailwind CSS is a CSS framework unlike others. Instead of pre-built styles, it offers basic building blocks (utility classes) that you combine directly in your HTML for quick, custom website design.",
    "PostgreSQL is a powerful, open-source object-relational database system. It's known for its reliability, robustness, and performance, making it a popular choice for many applications.",
    "Docker is a containerization platform that allows developers to package applications and their dependencies into lightweight, portable containers that can run consistently across different environments.",
    "Git is a popular version control system for tracking changes in computer files. It's particularly useful for software development projects where multiple people collaborate on the code.",
    "Vercel is a cloud platform designed specifically for the frontend aspects of web development, often referred to as the 'Frontend Cloud'. In simpler terms, it helps developers deploy and manage the user-facing parts of websites and web applications.",
    "Shadcn/ui offers pre-built buttons, forms, etc. for your web apps. Just copy and paste! Save time, customize freely, and build accessible apps.",
    "Laravel is a PHP web application framework with expressive, elegant syntax. It provides tools for routing, authentication, sessions, caching, and more, making web development faster and more enjoyable.",
    "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language.",
    "Go (Golang) is an open-source programming language developed by Google. It's designed for simplicity, efficiency, and reliability, making it great for building scalable web services and applications.",
    "Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used for web development, data analysis, artificial intelligence, and automation."
]

export default function Toolbelt() {
    // const responsiveWidth = useResponsiveWidth();
    const [current, setCurrent] = useState(0)
    const [pauseCurrent, setPauseCurrent] = useState(0)
    React.useEffect(() => {

        const interval = setInterval(() => {
            pauseCurrent > 0 ? setPauseCurrent((prev) => prev - 1) : setCurrent(current => (current + 1) % stacks.length)
        }, pauseCurrent > 0 ? 1000 : 2000);

        return () => clearInterval(interval);
    }, [pauseCurrent]);

    function clickFunc(index: number) {
        setPauseCurrent(5)
        if (current === index) {
            playSound('mouse-click', 0.6);
            return;
        }

        setCurrent(index);
        playSound('bubble', 0.6);
    }


    return (
        <div className="space-y-3">
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {Array.from(stacks).map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={`p-3 rounded-md bg-slate-600/30 hover:bg-slate-600/50 cursor-pointer group transition-all duration-300 ${index == current ? "ring-2 ring-cyan-400 bg-slate-600/60" : ""}`}
                            onClick={() => clickFunc(index)}
                        >
                            <Image
                                priority
                                src={stacks[index]}
                                height={32}
                                width={32}
                                alt={stackNames[index]}
                                className="group-hover:scale-110 transition-all duration-300 mx-auto"
                            />
                        </div>
                    )
                })}
            </div>

            {/* Current Tech Info */}
            <div className="bg-slate-600/20 rounded-md p-3">
                <div className="flex items-center gap-3 mb-2">
                    <Image
                        key={current}
                        priority
                        src={stacks[current]}
                        height={40}
                        width={40}
                        alt={stackNames[current]}
                        className="transition-all duration-300"
                    />
                    <div>
                        <div className="text-white font-medium text-sm">{stackNames[current]}</div>
                        <a
                            href={stackLinks[current]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 text-xs transition-colors"
                        >
                            Visit Website
                        </a>
                    </div>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                    {stackDef[current]}
                </p>
            </div>
        </div>
    )
}
