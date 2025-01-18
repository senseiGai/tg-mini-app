import { create } from "zustand";

interface INavigationStore {
    active: string;
    setActive: (name: string) => void;
}

export const useNavigationStore = create<INavigationStore>(
    (set) => ({
        active: 'Home',
        setActive: (name: string) => set(() => ({ active: name }))
    })
)