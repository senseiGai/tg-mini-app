import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    buttonType?: "default" | "rounded"
}

const ButtonType = {
    default: 'w-full h-[65px] text-white text-[20px] font-[400] items-center flex justify-center rounded-[8px]',
    rounded: 'rounded-full w-[180px] h-[45px] text-white text-[16px] font-[400] items-center flex justify-center '
}

export const Button = ({ label, className, buttonType = 'default', ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={`${className || ''} ${ButtonType[buttonType]}`}
            style={{ background: 'linear-gradient(90deg, #FF9900 0%, #B76100 100%)' }}
        >
            {label}
        </button>
    )
}
