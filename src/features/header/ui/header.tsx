import { Heading } from "../../../shared/ui/heading/heading"

import { Menu } from "lucide-react"
import CrossIcon from "../../../shared/icons/cross-icon"

interface IHeader {
    title: string
    isBurger?: boolean
}

export const Header = ({ title, isBurger }: IHeader) => {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                {isBurger && <button><Menu size={24} className="text-primary" /></button>}
                <Heading title={title} />
            </div>
            <CrossIcon />
        </div>
    )
}
