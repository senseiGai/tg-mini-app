import { ReactNode } from "react";
import { LockKeyhole } from "lucide-react";

interface ListItemProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    isActive?: boolean;
    className?: string;
    onClick?: () => void;
    isLocked?: boolean;
}

export const ListItem = ({
    leftContent,
    rightContent,
    isActive = true,
    className = "",
    onClick,
    isLocked = false
}: ListItemProps) => {
    return (
        <div className="relative" onClick={onClick}>
            <div
                className={`relative flex items-center justify-between p-4 rounded-[5px] ${isActive
                    ? "bg-gradient-to-r from-[#FF9900] to-[#B76100]"
                    : "bg-[#313131]"
                    } ${isLocked ? "opacity-50 filter blur-[1px]" : ""} ${className}`}
            >
                <div className="flex items-center gap-2">
                    {leftContent}
                </div>
                <div className="flex items-center gap-2">
                    {rightContent}
                </div>
            </div>
            {isLocked && (
                <>
                    <div className="absolute inset-0 bg-black/30 rounded-[5px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <LockKeyhole size={32} className="text-primary filter-none" />
                    </div>
                </>
            )}
        </div>
    );
};
