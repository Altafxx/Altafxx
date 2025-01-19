import { create } from 'zustand'

export const useV2 = create((set: any, get: any) => ({
    profileState: false,
    setProfileState: (profileState: any) => set(() => ({ profileState })),
    // getCode: () => (get().profile),
}))