import { Header } from "../../features/navigation/ui/header/header";
import { Button } from "../../shared/ui/button/button";
import { DonatesList } from "../../features/donates/ui/donates-list";

export const DonatesScreen = () => {
    return (
        <div className="h-full flex flex-col">
            <Header title="Top Donates" />
            <DonatesList />
            <Button label="Donate" className="mt-6" />
        </div>
    );
};