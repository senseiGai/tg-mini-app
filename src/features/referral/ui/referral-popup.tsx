import { PopupLayout } from "../../../layouts/PopupLayout";
import { ReferralClipboardBox } from "./referral-clipboard-box";

export const ReferralPopup = () => {
    return (
        <PopupLayout id="referral" title="Referral Link">
            <>
                <ReferralClipboardBox />
                <div className="mt-4 flex items-center flex-col">
                    <div>
                        <span className="text-[#808080] text-[24px]">Your referrals: </span>
                        <span className="text-[#FF9500] text-[24px]">100</span>
                    </div>

                    <div className="flex items-center flex-col mt-8">
                        <div className="text-[#808080] text-[16px]">Estimated Earnings:</div>
                        <div className="text-[16px] mt-4">
                            <span className="text-[#FF9500]">1</span>
                            <span className="text-[#808080]"> Referral - </span>
                            <span className="text-[#FF9500]">5%</span>
                        </div>
                    </div>
                </div>
            </>
        </PopupLayout>
    )
}