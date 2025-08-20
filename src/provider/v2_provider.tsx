import { create } from 'zustand'

export const useV2 = create((set: any, get: any) => ({
    profileState: false,
    experienceState: false,
    projectsState: false,
    educationState: false,
    setProfileState: (profileState: any) => set(() => ({
        profileState,
        experienceState: profileState ? false : get().experienceState,
        projectsState: profileState ? false : get().projectsState,
        educationState: profileState ? false : get().educationState
    })),
    setExperienceState: (experienceState: any) => set(() => ({
        experienceState,
        profileState: experienceState ? false : get().profileState,
        projectsState: experienceState ? false : get().projectsState,
        educationState: experienceState ? false : get().educationState
    })),
    setProjectsState: (projectsState: any) => set(() => ({
        projectsState,
        profileState: projectsState ? false : get().profileState,
        experienceState: projectsState ? false : get().experienceState,
        educationState: projectsState ? false : get().educationState
    })),
    setEducationState: (educationState: any) => set(() => ({
        educationState,
        profileState: educationState ? false : get().profileState,
        experienceState: educationState ? false : get().experienceState,
        projectsState: educationState ? false : get().projectsState
    })),
    // getCode: () => (get().profile),
}))