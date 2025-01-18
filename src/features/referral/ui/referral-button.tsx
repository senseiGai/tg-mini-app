import { ButtonHTMLAttributes } from "react"
import { usePopupStore } from "../../../shared/model/popup-store/popup-store"

import { LucideIcon } from 'lucide-react'


interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    icon: LucideIcon
}

export const IconButton = ({ label, icon: Icon, className, ...props }: IconButtonProps) => {
    const { openPopup } = usePopupStore()

    return (
        <button
            onClick={() => openPopup('referral')}
            {...props}
            className={`relative w-full h-[83px] text-white text-[20px] font-[400] items-center flex justify-center rounded-[8px] ${className || ''}`}
            style={{
                background: 'linear-gradient(#090909, #090909) padding-box, linear-gradient(86.04deg, rgba(171, 171, 171, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%) border-box',
                border: '1px solid transparent'
            }}
        >
            <Icon size={46} className="text-primary mr-4" />
            {label}
        </button>
    )
}
