import { BottomNavigationPanel } from "../features/navigation/ui/bottom-navigation-panel/bottom-navitation-panel";
import { Sidebar } from "../features/navigation/ui/sidebar/sidebar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="bg-background h-[100vh] flex flex-col px-[30px] pt-16">
            <div className="flex-1 overflow-hidden">{children}</div>
            <BottomNavigationPanel />
            <Sidebar />
        </div>
    );
};