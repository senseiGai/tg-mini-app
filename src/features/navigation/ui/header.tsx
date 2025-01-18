import { Heading } from "../../../shared/ui/heading/heading"

import { Menu } from "lucide-react"
import CrossIcon from "../../../shared/icons/cross-icon"

import { useSidebarStore } from '../model/sidebar-store';

interface IHeader {
    title: string
    isBurger?: boolean
}

export const Header = ({ title, isBurger }: IHeader) => {
    const { toggle } = useSidebarStore();

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                    {isBurger && (
                        <button onClick={toggle}>
                            <Menu size={24} className="text-primary" />
                        </button>
                    )}
                    <Heading title={title} />
                </div>
                <CrossIcon />
            </div>
        </>
    )
}
