"use client"
import profile from "@/data/profile_v2.json"
import PersonalInfoCard from "@/components/v3/personal-info-card"
import TechStackCard from "@/components/v3/tech-stack-card"
import ExperienceCard from "@/components/v3/experience-card"
import ProjectsCard from "@/components/v3/projects-card"
import EducationCard from "@/components/v3/education-card"
import ContactCard from "@/components/v3/contact-card"
import UniversityCard from "@/components/v3/university-card"

export default function V3Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto h-full">
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

          {/* Contact - spans 3 columns, 1 row (horizontal) */}
          <div className="bento-contact">
            <ContactCard social={profile.social} />
          </div>

          {/* Projects - spans 3 columns, 1 row */}
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
