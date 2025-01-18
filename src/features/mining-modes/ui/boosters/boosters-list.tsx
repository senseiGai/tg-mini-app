import { ListItem } from "../../../../shared/ui/list-item/list-item";
import { boosters } from "../../model/mock-data";
import { usePopupStore } from "../../../../shared/model/popup-store/popup-store";

import { Timer } from "lucide-react";

export const BoostersList = () => {
    const { openPopup } = usePopupStore();

    return (
        <div className="flex flex-col gap-4 mb-40">
            <div className="text-[17px] text-[#FFFFFF4D]">Boosters:</div>
            {boosters.map((booster) => (
                <ListItem
                    key={booster.id}
                    onClick={booster.isLocked ? () => openPopup('booster') : () => { }}
                    isLocked={booster.isLocked}
                    isActive={!booster.isLocked}
                    leftContent={
                        <div className="flex items-center gap-2">
                            <Timer size={24} className="text-white" />
                            <span className="text-white text-[18px]">
                                {booster.name}
                            </span>
                        </div>
                    }
                    rightContent={
                        <span className="text-white text-[18px]">
                            {booster.coeff}
                        </span>
                    }
                />
            ))}
        </div>
    );
};