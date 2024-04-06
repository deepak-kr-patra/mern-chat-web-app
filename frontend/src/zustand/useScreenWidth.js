import { create } from 'zustand'

const useScreenWidth = create((set) => ({
    screenWidth: screen.width,
    setScreenWidth: (screenWidth) => set({ screenWidth })
}))

export default useScreenWidth;