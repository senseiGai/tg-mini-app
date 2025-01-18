import { motion } from "framer-motion";

interface IListsSwitcherProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    tabs: { id: string; label: string }[];
}

export const ListsSwitcher = ({ activeTab, onTabChange, tabs }: IListsSwitcherProps) => {
    return (
        <div className="flex mt-9 relative bg-black rounded-full h-[40px]">
            <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                animate={{
                    x: activeTab === "modes" ? "0%" : "100%",
                    width: "50%"
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 40
                }}
            />
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className="relative z-10 w-full h-full flex items-center justify-center text-[18px] text-white"
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};
