import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export const Button = ({ label, className, ...props }: ButtonProps) => {
    return (
        <button 
            {...props} 
            className={`w-full h-[65px] text-white text-[20px] font-[400] items-center flex justify-center rounded-[8px] ${className || ''}`}
            style={{ background: 'linear-gradient(90deg, #FF9900 0%, #B76100 100%)' }}
        >
            {label}
        </button>
    )
}
