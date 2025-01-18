import { usePopupStore } from "../../../shared/model/popup-store/popup-store"

import CrossIcon from "../../../shared/icons/cross-icon"

interface IPopupHeader {
    id: string
    title: string
}

export const PopupHeader = ({ id, title }: IPopupHeader) => {
    const { closePopup } = usePopupStore();

    return (
        <div className="flex flex-row items-center justify-between">
            <span className='text-light_gray text-[18px]'>{title}</span>
            <button onClick={() => closePopup(id)}>
                <CrossIcon />
            </button>
        </div>
    )
}
