import { create } from 'zustand'

const useScreenWidth = create((set) => ({
    screenWidth: window.innerWidth,
    setScreenWidth: (screenWidth) => set({ screenWidth })
}))

export default useScreenWidth;