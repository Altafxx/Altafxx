import profile from "@/data/profile.json"
import { Banner, Skills, Experience, Education, Volunteer, Stacks } from "@/components";


export default function Home() {
  return (
    <div>
      <Banner name={profile.name.first} position={profile.position} social={profile.social} />
      <Stacks />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:order-1 2xl:mr-60 xl:mr-32 lg:mr-16">
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
