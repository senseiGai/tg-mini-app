import { BottomNavigationPanel } from "../features/navigation/ui/bottom-navitation-panel"
import { Sidebar } from "../features/navigation/ui/sidebar"
interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="bg-background h-[100vh] px-[30px] pt-16">
            {children}
            <BottomNavigationPanel />
            <Sidebar
            />
        </div>
    )
}
