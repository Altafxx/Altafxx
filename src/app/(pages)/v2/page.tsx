"use client"
// Enhanced v2 interface with abstract patterns and improved menu bar
import profile from "@/data/profile_v2.json"
import Folder from "@/components/v2/folder";
import Toolbelt from "@/components/v2/toolbelt";
import AvatarModel from "@/components/v2/avatarmodel";
import ExperienceV2 from "@/components/v2/experience";
import ProjectsV2 from "@/components/v2/projects";
import EducationV2 from "@/components/v2/education";
import { useV2 } from "@/provider/v2_provider";
import { playSound } from "@/utils/soundManager";
import { useState, useEffect } from "react";

const close = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

const maximize = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>

const minimize = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" /></svg>

const doorLogo = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path d="M96 64c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V448h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H432 144 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96V64zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>

export default function Home() {
  const {
    profileState, setProfileState,
    experienceState, setExperienceState,
    projectsState, setProjectsState,
    educationState, setEducationState
  } = useV2()

  // Clock state to prevent hydration errors
  const [currentTime, setCurrentTime] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const togglePersonalInfo = () => {
    const newState = !profileState;
    setProfileState(newState);
    playSound(newState ? 'folder-open' : 'folder-close', 0.5);
  }

  const toggleExperience = () => {
    const newState = !experienceState;
    setExperienceState(newState);
    playSound(newState ? 'folder-open' : 'folder-close', 0.5);
  }

  const toggleProjects = () => {
    const newState = !projectsState;
    setProjectsState(newState);
    playSound(newState ? 'folder-open' : 'folder-close', 0.5);
  }

  const toggleEducation = () => {
    const newState = !educationState;
    setEducationState(newState);
    playSound(newState ? 'folder-open' : 'folder-close', 0.5);
  }

  function closePage(action?: Function) {
    playSound('folder-close', 0.6);
    if (action) action()
    return;
  }

  return (
    <main className="v2-interface">
      <div className="h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 relative pb-20">
        {/* UIverse Wavy Pattern Background */}
        <div className="wavy-pattern-container"></div>
        <div className="mx-6 p-1 flex justify-between relative z-10">
          <div className="grid grid-cols-2 gap-4">
            {Folder({ name: "Personal Information", action: togglePersonalInfo, state: profileState })}
            {Folder({ name: "Experience", action: toggleExperience, state: experienceState })}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Folder({ name: "Projects", action: toggleProjects, state: projectsState })}
            {Folder({ name: "Education", action: toggleEducation, state: educationState })}
          </div>
        </div>
        {
          profileState ?

            <div className="bg-slate-300 absolute left-6 right-6 sm:left-20 sm:right-20 md:left-30 md:right-30 lg:left-44 lg:right-44 xl:left-52 xl:right-52 2xl:left-72 2xl:right-72 top-10 md:top-32 bottom-24 rounded-sm shadow-lg z-20">
              <div className="mt-2 md:mt-3">
                <div className="absolute right-0 left-0 text-center text-black/50 font-medium text-sm md:text-base max-sm:hidden">Personal Information</div>
                <div className="grid grid-flow-col gap-2 absolute right-0 mr-3 pt-0 sm:pt-1">
                  <div className="bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-yellow-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-red-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer"
                    onClick={() => { closePage(togglePersonalInfo) }} />
                </div>
              </div>
              <div className="bg-slate-800 m-2 mt-3 md:m-3 absolute bottom-0 top-4 sm:top-6 md:top-8 left-0 right-0 rounded-sm p-4 text-white/80 v2-window-content">
                <div className="h-full flex flex-col">
                  {/* Header Section */}
                  <div className="text-center mb-6">
                    <h2 className="text-lg font-bold text-white mb-1">Personal Information</h2>
                    <p className="text-white/60 text-xs">Software engineer and tech enthusiast</p>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-2"></div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
                    {/* Avatar and Info Section */}
                    <div className="lg:col-span-1 flex flex-col">
                      <div className="bg-slate-700/30 rounded-lg p-4 h-full backdrop-blur-sm border border-slate-600/30 flex flex-col justify-center">
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-4">
                            <AvatarModel />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-white font-semibold text-lg">
                              {profile.name.first} {profile.name.last}
                            </h3>
                            <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-200 rounded-full text-sm font-medium">
                              {profile.position}
                            </div>
                            <div className="flex items-center justify-center gap-2 text-white/70 text-sm mt-3">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                              </svg>
                              <span>{profile.location.city}, {profile.location.country}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Toolbelt Section */}
                    <div className="lg:col-span-3 flex flex-col">
                      <div className="bg-slate-700/20 rounded-lg p-4 h-full backdrop-blur-sm border border-slate-600/20 flex flex-col">
                        <div className="mb-4">
                          <h4 className="text-white font-semibold text-base mb-1">Technology Stack</h4>
                          <p className="text-white/60 text-xs">Tools and technologies I work with</p>
                        </div>
                        <div className="flex-1">
                          <Toolbelt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : null
        }

        {/* Experience Window */}
        {
          experienceState ?
            <div className="bg-slate-300 absolute left-6 right-6 sm:left-20 sm:right-20 md:left-30 md:right-30 lg:left-44 lg:right-44 xl:left-52 xl:right-52 2xl:left-72 2xl:right-72 top-10 md:top-32 bottom-24 rounded-sm shadow-lg z-20">
              <div className="mt-2 md:mt-3">
                <div className="absolute right-0 left-0 text-center text-black/50 font-medium text-sm md:text-base max-sm:hidden">Work Experience</div>
                <div className="grid grid-flow-col gap-2 absolute right-0 mr-3 pt-0 sm:pt-1">
                  <div className="bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-yellow-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-red-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer"
                    onClick={() => { closePage(toggleExperience) }} />
                </div>
              </div>
              <div className="bg-slate-800 m-2 mt-3 md:m-3 absolute bottom-0 top-4 sm:top-6 md:top-8 left-0 right-0 rounded-sm p-4 text-white/80 v2-window-content">
                <ExperienceV2 experience={profile.experience} />
              </div>
            </div>
            : null
        }

        {/* Projects Window */}
        {
          projectsState ?
            <div className="bg-slate-300 absolute left-6 right-6 sm:left-20 sm:right-20 md:left-30 md:right-30 lg:left-44 lg:right-44 xl:left-52 xl:right-52 2xl:left-72 2xl:right-72 top-10 md:top-32 bottom-24 rounded-sm shadow-lg z-20">
              <div className="mt-2 md:mt-3">
                <div className="absolute right-0 left-0 text-center text-black/50 font-medium text-sm md:text-base max-sm:hidden">Open Source Projects</div>
                <div className="grid grid-flow-col gap-2 absolute right-0 mr-3 pt-0 sm:pt-1">
                  <div className="bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-yellow-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-red-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer"
                    onClick={() => { closePage(toggleProjects) }} />
                </div>
              </div>
              <div className="bg-slate-800 m-2 mt-3 md:m-3 absolute bottom-0 top-4 sm:top-6 md:top-8 left-0 right-0 rounded-sm p-4 text-white/80 v2-window-content">
                <ProjectsV2 projects={profile.open_source} />
              </div>
            </div>
            : null
        }

        {/* Education Window */}
        {
          educationState ?
            <div className="bg-slate-300 absolute left-6 right-6 sm:left-20 sm:right-20 md:left-30 md:right-30 lg:left-44 lg:right-44 xl:left-52 xl:right-52 2xl:left-72 2xl:right-72 top-10 md:top-32 bottom-24 rounded-sm shadow-lg z-20">
              <div className="mt-2 md:mt-3">
                <div className="absolute right-0 left-0 text-center text-black/50 font-medium text-sm md:text-base max-sm:hidden">Education & Leadership</div>
                <div className="grid grid-flow-col gap-2 absolute right-0 mr-3 pt-0 sm:pt-1">
                  <div className="bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-yellow-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer" />
                  <div className="bg-red-500 w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer"
                    onClick={() => { closePage(toggleEducation) }} />
                </div>
              </div>
              <div className="bg-slate-800 m-2 mt-3 md:m-3 absolute bottom-0 top-4 sm:top-6 md:top-8 left-0 right-0 rounded-sm p-4 text-white/80 v2-window-content">
                <EducationV2 education={profile.education} university_experience={profile.university_experience} />
              </div>
            </div>
            : null
        }

        {/* Enhanced Menu Bar - Taskbar */}
        <div className="enhanced-menu-bar w-full h-16 fixed bottom-0 flex justify-between items-center px-6 z-50">
          {/* Left side - Quick actions */}
          <div className="flex items-center gap-3">
            <div className="menu-action-button" title="Settings">
              ⚙️
            </div>
            <div className="menu-action-button" title="Theme">
              🎨
            </div>
            <div className="menu-action-button" title="Notifications">
              🔔
            </div>
          </div>

          {/* Center - Main dock */}
          <div className="menu-dock">
            <div className="menu-button rounded-full w-fit p-4 cursor-pointer" title="Home">
              {doorLogo}
            </div>

            <div className="menu-indicators">
              <div className="menu-indicator active" title="Desktop 1"></div>
              <div className="menu-indicator" title="Desktop 2"></div>
              <div className="menu-indicator" title="Desktop 3"></div>
              <div className="menu-indicator" title="Desktop 4"></div>
            </div>

            <div className="menu-action-button" title="Applications">
              📱
            </div>
            <div className="menu-action-button" title="Files">
              📁
            </div>
            <div className="menu-action-button" title="Terminal">
              💻
            </div>
          </div>

          {/* Right side - Status panel */}
          <div className="status-panel">
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60">🌐</span>
              <span className="text-xs text-white/60">WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60">🔋</span>
              <span className="text-xs text-white/60">85%</span>
            </div>
            <div className="status-time">
              {mounted ? currentTime : '--:--'}
            </div>
            <div className="status-indicator" title="Online"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
