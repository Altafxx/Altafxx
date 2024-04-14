import React from 'react'
import Image from 'next/image'

export default function AvatarModel() {
    return (
        <div className="transition-all">
            <Image
                src={"/images/MCSkin.png"}
                height={100}
                width={200}
                alt={"Avatar model"}
                className={`transition-all duration-700 flex max-xl:hidden`}
            /><Image
                src={"/images/MCSkin.png"}
                height={100}
                width={150}
                alt={"Avatar model"}
                className={`transition-all duration-700 flex max-lg:hidden xl:hidden`}
            />
            <Image
                src={"/images/MCSkin.png"}
                height={100}
                width={80}
                alt={"Avatar model"}
                className={`transition-all duration-700 flex max-sm:hidden lg:hidden`}
            />
            <Image
                src={"/images/MCSkin.png"}
                height={80}
                width={40}
                alt={"Avatar model"}
                className={`transition-all duration-700 flex sm:hidden`}
            />
        </div>
    )
}
