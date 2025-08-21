"use client"
import profile from "@/data/profile_v2.json"
import PersonalInfoCard from "@/components/v3/personal-info-card"
import TechStackCard from "@/components/v3/tech-stack-card"
import ExperienceCard from "@/components/v3/experience-card"
import ProjectsCard from "@/components/v3/projects-card"
import EducationCard from "@/components/v3/education-card"
import UniversityCard from "@/components/v3/university-card"
import SocialRail from "@/components/v3/social-rail"

export default function V3Portfolio() {
  return (
    <main className="h-[100dvh] md:min-h-screen md:h-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 overflow-y-auto v3-scroll">
      <div className="w-full">
        {/* Bento Grid Container */}
        <div className="bento-grid">
          {/* Personal Info - spans 3 columns, 2 rows */}
          <div className="bento-personal">
            <PersonalInfoCard
              name={profile.name}
              position={profile.position}
              location={profile.location}
            />
          </div>

          {/* Tech Stack - spans 3 columns, 1 row */}
          <div className="bento-tech">
            <TechStackCard />
          </div>

          {/* Social rail */}
          <div className="bento-social">
            <SocialRail social={profile.social} />
          </div>

          {/* Projects and Experience arranged side-by-side */}
          <div className="bento-projects">
            <ProjectsCard projects={profile.open_source} />
          </div>

          {/* Experience - spans 4 columns, 2 rows */}
          <div className="bento-experience">
            <ExperienceCard experience={profile.experience} />
          </div>

          {/* Education - spans 2 columns, 2 rows */}
          <div className="bento-education">
            <EducationCard education={profile.education} />
          </div>

          {/* University Experience - spans 2 columns, 2 rows */}
          <div className="bento-university">
            <UniversityCard experience={profile.university_experience} />
          </div>
        </div>
      </div>
    </main>
  )
}
