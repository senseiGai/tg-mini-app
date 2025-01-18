import { NavigationPanel } from '../features/navigation-panel/ui/navitation-panel'

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="bg-background h-[100vh] px-[30px] pt-16">
            {children}
            <NavigationPanel />
        </div>
    )
}
