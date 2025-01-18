import { usePopupStore } from "../../../shared/model/popup-store/popup-store";
import { ReferralPopupHeader } from "./referral-popup-header";
import { ReferralClipboardBox } from "./referral-clipboard-box";

export const ReferralPopup = () => {
    const { closePopup, isPopupOpen } = usePopupStore();

    return (
        isPopupOpen('referral') ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => closePopup('referral')} />
                <div className="relative z-10 bg-background rounded-[18px] w-[330px] h-[330px] p-4">
                    <ReferralPopupHeader />
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
                </div>
            </div>
        ) : null
    )
}
