import { create } from "zustand";

interface IClipboardStore {
    copied: boolean;
    setCopied: (copied: boolean) => void;
    copyToClipboard: (text: string) => Promise<void>;
}

export const useClipboardStore = create<IClipboardStore>((set) => ({
    copied: false,
    setCopied: (copied) => set({ copied }),
    copyToClipboard: async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            set({ copied: true });
            setTimeout(() => set({ copied: false }), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    }
}))