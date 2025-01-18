import { NavLink } from 'react-router'

import { ILink } from '../../model/links'

import { useNavigationStore } from '../../model/navigation-store'


export const NavigationTab = ({ name, icon: Icon, path }: ILink) => {

    const { active, setActive } = useNavigationStore()

    return (
        <NavLink to={path} className='flex flex-col items-center gap-[3px]' onClick={() => setActive(name)}>
            <Icon size={28} className='text-primary' />
            <span className={`${active === name ? "text-primary" : 'text-white'} text-[14px] font-[300]`}>{name.toUpperCase()}</span>
        </NavLink>
    )
}
