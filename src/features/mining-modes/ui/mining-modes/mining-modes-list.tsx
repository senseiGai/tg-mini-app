import { ListItem } from "../../../../shared/ui/list-item/list-item";
import { miningModes } from "../../lib/mock-data";
import { usePopupStore } from "../../../../shared/model/popup-store/popup-store";

import { Pickaxe } from "lucide-react";

export const MiningModesList = () => {
    const { openPopup } = usePopupStore();

    return (
        <div className="flex flex-col gap-4 mb-40">
            <div className="text-[17px] text-[#FFFFFF4D]">Modes:</div>
            {miningModes.map((mode) => (
                <ListItem
                    key={mode.id}
                    onClick={mode.isLocked ? () => openPopup('mining-modes') : () => { }}
                    isLocked={mode.isLocked}
                    isActive={!mode.isLocked}
                    leftContent={
                        <div className="flex items-center gap-2">
                            <Pickaxe size={24} className="text-white" />
                            <span className="text-white text-[18px]">
                                {mode.name}
                            </span>
                        </div>
                    }
                    rightContent={
                        <span className="text-white text-[18px]">
                            {mode.hashRate}
                        </span>
                    }
                />
            ))}
        </div>
    );
};