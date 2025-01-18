import { NavLink } from "react-router"
import { useNavigationStore } from "../../model/navigation-store"
import { useSidebarStore } from "../../model/sidebar-store"
import { ILink } from '../../model/links'

export const SidebarLink = ({ path, icon: Icon, name }: ILink) => {
    const { active, setActive } = useNavigationStore()
    const { toggle } = useSidebarStore()

    const handleClick = () => {
        setActive(name)
        toggle()
    }

    return (
        <NavLink to={path} className='flex flex-row items-center gap-x-2.5' onClick={() => handleClick()}>
            <Icon size={24} className="text-primary" />
            <span className={`text-[18px] ${active === name ? 'text-primary' : 'text-white'}`}>{name}</span>
        </NavLink>
    )
}