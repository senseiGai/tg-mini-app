import { usePopupStore } from "../../../shared/model/popup-store/popup-store"

import CrossIcon from "../../../shared/icons/cross-icon"

export const ReferralPopupHeader = () => {
    const { closePopup } = usePopupStore();

    return (
        <div className="flex flex-row items-center justify-between">
            <span className='text-light_gray text-[18px]'>Referral Link</span>
            <button onClick={() => closePopup('referral')}>
                <CrossIcon />
            </button>
        </div>
    )
}
