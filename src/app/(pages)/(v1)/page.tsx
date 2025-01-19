import profile from "@/data/profile.json"
import { Banner, Skills, Experience, Education, Volunteer, Stacks } from "@/components";


export default function Home() {
    return (
        <main className='min-h-screen flex flex-col text-justify bg-background font-sans place-items-center'>
            <div className="py-12 max-w-5xl max-xl:px-4">
                <Banner name={profile.name.first} position={profile.position} social={profile.social} />
                <Stacks />
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="md:order-1">
                        <Experience experience={profile.experience} />
                        <Education education={profile.education} />
                        <Volunteer open_source={profile.open_source} />
                    </div>
                    <div className="md:order-2">
                        <Skills skill={profile.skill} />
                    </div>
                </div>
            </div>
        </main>
    )
}
