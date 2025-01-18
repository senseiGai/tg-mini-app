import { Header } from "../../features/navigation/ui/header/header";
import { TopList } from "../../features/top/ui/top-list";

export const TopScreen = () => {
    return (
        <div className="h-full flex flex-col">
            <Header title="Top 100" />
            <TopList />
        </div>
    );
};