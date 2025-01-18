import { NavigationTab } from "./navigation-tab"
import { links } from "../model/links"

export const NavigationPanel = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-[97px] border-t border-[#FFFFFF33] flex justify-center">
            <div className="flex flex-row justify-between w-full max-w-screen px-6 py-4">
                {links.map((link, index) => (
                    <NavigationTab key={index} name={link.name} icon={link.icon} path={link.path} />
                ))}
            </div>
        </div>
    )
}
