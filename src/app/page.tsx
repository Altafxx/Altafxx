import profile from "@/data/profile.json"
import { Banner, Skills, Experience, Education, Volunteer, Stacks } from "@/components";


export default function Home() {
  return (
    <div>
      <Banner name={profile.name.first} position={profile.position} social={profile.social} />
      <Stacks />
      <div className="flex flex-col md:flex-row gap-4">
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
  )
}
