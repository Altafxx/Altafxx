import profile from "@/data/profile.json"
import { Banner, Skills, Experience, Education, Volunteer, Stacks } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto'>
      <div className="p-2">
        <h1>Daniel Altaf</h1>
        <p>Software Engineer</p>
      </div>
      <div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-rows-1 gap-4">
          <div>
            <Card className="p-4">
              <Badge>Work Experience</Badge>
              <div className="grid grid-cols-2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="p-4">
              <Badge>Education History</Badge>
              <div className="grid grid-cols-2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="p-4">
              <Badge>Volunteer Work and Interests</Badge>
              <div className="grid grid-cols-2">
              </div>
            </Card>
          </div>
        </div>
        <div>
          <Card className="p-4">
            <Badge>Relevant Skills</Badge>
            <div className="grid grid-cols-2">
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
