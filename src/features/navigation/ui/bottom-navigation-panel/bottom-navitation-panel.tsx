import { NavigationTab } from "./bottom-navigation-tab"
import { bottomPanelLinks } from "../../model/links"

export const BottomNavigationPanel = () => {
    return (
        <div className="fixed bg-background bottom-0 left-0 w-full h-[97px] border-t border-[#FFFFFF33] flex justify-center">
            <nav className="flex flex-row justify-between w-full max-w-screen px-6 py-4">
                {bottomPanelLinks.map((link, index) => (
                    <NavigationTab key={index} name={link.name} icon={link.icon} path={link.path} />
                ))}
            </nav>
        </div>
    )
}
