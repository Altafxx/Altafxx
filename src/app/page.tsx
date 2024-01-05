import profile from "@/data/profile.json"
import Link from "next/link"
import Badge from "@/components/badge"

export default function Home() {
  return (
    <div>
      <div>
        <h1>{profile.name.first}</h1>
        <h2>{profile.position}</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:order-1">
          <div>
            <Badge>Contact Info</Badge>
            <h3>
              Socials
            </h3>
            {
              profile.social.map((item, index) => (
                <p key={index}>
                  <a href={item.link.join("")}>{item.show ? item.name : item.link[1]}</a>
                </p>))}
          </div>
          <div>
            <Badge>Work Experience</Badge>
            {profile.experience.map((item, index) => (
              <div key={index} className="mb-4">
                <h3>{item.position}</h3>
                <h3>{item.company}</h3>
                <h4>{item.start.month} {item.start.year} to {item.end.month} {item.end.year} ({item.duration} months)</h4>
                <ul>
                  {item.contribution.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <Badge>Education History</Badge>
            {profile.education.map((item, index) => (
              <div key={index} className="mb-4">
                <h3>
                  {item.qualification} {item.course}
                </h3>
                <h4>{item.location} ({item.start.month} {item.start.year} - {item.end.month} {item.end.year})</h4>
                <ul>
                  {item.achievement.map((item, i) => (
                    <li key={i}>{item.position}, {item.association}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
          <div>
            <Badge>Volunteer Work and Interests</Badge>
            {
              profile.open_source.map((item, index) => (
                <div key={index} className="mb-4">
                  <Link href={item.site.join("")}>
                    <h3>
                      {item.name} ({item.site[1]})
                    </h3>
                  </Link>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="md:order-2">
          <div>
            <Badge>Relevant Skills</Badge>
            <h3>
              Language:
            </h3>
            <ul className="mb-4">
              {profile.skill.language.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>
              Framework:
            </h3>
            <ul className="mb-4">
              {profile.skill.framework.map((item, index) => (
                <li key={index}>{item[0]} ({item[1]})</li>
              ))}
            </ul>
            <h3>UI:</h3>
            <ul className="mb-4">
              {profile.skill.ui.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Databases:</h3>
            <ul className="mb-4">
              {profile.skill.database.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Others:</h3>
            <ul className="mb-4">
              {profile.skill.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
