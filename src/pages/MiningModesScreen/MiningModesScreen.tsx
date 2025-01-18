import { Header } from "../../features/navigation/ui/header/header";
import { MiningModesWidget } from "../../widgets/mining-modes/ui/mining-modes-widget";
import { MiningModesPopup } from "../../features/mining-modes/ui/mining-modes/mining-modes-popup";
import { BoosterPopup } from "../../features/mining-modes/ui/boosters/booster-popup";

export const MiningModesScreen = () => {
    return (
        <div className="h-full flex flex-col">
            <Header title="Mining Modes" />
            <MiningModesWidget />
            <MiningModesPopup />
            <BoosterPopup />
        </div>
    );
};