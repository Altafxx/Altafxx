import profile from "@/data/profile.json"
import { Banner, Skills, Experience, Education, Volunteer, Stacks } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const close = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

const maximize = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>

const minimize = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" /></svg>

export default function Home() {
  return (
    // <main className='py-12 px-8 md:px-12 xl:px-24 flex-1 overflow-y-auto'>
    <main className="h-screen">
      <div className="flex justify-between bg-primary items-center ps-4">
        <div className="text-sm">
          Daniel Altaf's Portfolio
        </div>
        <div className="flex justify-end">
          <div className="aspect-square cursor-pointer">
            <div className="m-1 px-2 py-2 outline outline-1 bg-accent text-sm">
              {minimize}
            </div>
          </div>
          <div className="aspect-square cursor-pointer">
            <div className="m-1 px-2 py-2 outline outline-1 bg-accent text-sm">
              {maximize}
            </div>
          </div>
          <div className="aspect-square cursor-pointer">
            <div className="m-1 px-2 py-2 outline outline-1 bg-red-500 text-sm">
              {close}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 ps-4 my-1">
        <div className="flex"><div className="underline">F</div>ile</div>
        <div className="flex"><div className="underline">D</div>ile</div>
        <div className="flex"><div className="underline">F</div>ile</div>
        <div className="flex"><div className="underline">V</div>iew</div>
        <div className="flex"><div className="underline">O</div>ptions</div>
        <div className="flex"><div className="underline">W</div>indow</div>
        <div className="flex"><div className="underline">H</div>elp</div>
      </div>
      <div className="mt-24 ml-12 transform rotate-6 w-1/4 h-6 outline-2 outline-lime-500">
        <div className="bg-slate-500">a</div>
      </div>
      {/* <div className="flex mx-1 h-full overflow-y-auto no-scrollbar">
        <div className=" bg-blue-500 p-4 flex-grow">hello</div>
        <div className="bg-red-500 w-6">a</div>
      </div> */}
    </main>
  )
}
