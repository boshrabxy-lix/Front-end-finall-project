import { create } from "zustand";
import mode from "./../Theme"

const useThemeStore = create((set) => {
    mode: 'light';
    toggleTheme: () => {
        set((state) => ({
            mode: state.mode === 'light' ? 'dark' : 'light'
        }));
    }
});
export default useThemeStore;