import { PopupLayout } from "../../../../layouts/PopupLayout";
import { Button } from "../../../../shared/ui/button/button";

import StarIcon from "../../../../shared/icons/star-icon";

export const MiningModesPopup = () => {
    return (
        <PopupLayout id="mining-modes" title="Buy new mode">
            <div className="flex flex-col items-center justify-center mt-8">
                <StarIcon />
                <span className="text-primary text-[20px] mt-4">Buy new Mining Mode</span>
                <div className="rounded-full bg-[#FF990033] w-[160px] h-[45px] mt-4 flex items-center justify-center">
                    <span className="text-[16px] text-primary">999 Stars</span>
                </div>
                <Button label="Buy" className="mt-7" buttonType="rounded" />
            </div>
        </PopupLayout>
    )
}