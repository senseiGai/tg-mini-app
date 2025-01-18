import { create } from 'zustand';

type PopupState = {
    openPopups: Set<string>;
    openPopup: (id: string) => void;
    closePopup: (id: string) => void;
    isPopupOpen: (id: string) => boolean;
};

export const usePopupStore = create<PopupState>((set, get) => ({
    openPopups: new Set(),
    openPopup: (id) => set((state) => {
        const updatedSet = new Set(state.openPopups);
        updatedSet.add(id);
        return { openPopups: updatedSet };
    }),
    closePopup: (id) => set((state) => {
        const updatedSet = new Set(state.openPopups);
        updatedSet.delete(id);
        return { openPopups: updatedSet };
    }),
    isPopupOpen: (id) => get().openPopups.has(id),
}));