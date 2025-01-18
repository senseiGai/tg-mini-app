import { useSidebarStore } from '../../model/sidebar-store';

import { Snowflake } from "lucide-react"
import { Menu } from "lucide-react"
import CrossIcon from "../../../../shared/icons/cross-icon"

interface IHeader {
    title: string
}

export const Header = ({ title }: IHeader) => {
    const { toggle } = useSidebarStore();

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                    <button onClick={toggle}>
                        <Menu size={24} className="text-primary" />
                    </button>
                    <h1 className="text-white font-[400] text-[24px] flex flex-row items-center gap-x-2">{title}  <Snowflake size={24} className="text-primary" /></h1>
                </div>
                <CrossIcon />
            </div>
        </>
    )
}
