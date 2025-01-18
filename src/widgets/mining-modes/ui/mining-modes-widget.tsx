import { useState } from "react";
import { MiningModesList } from "../../../features/mining-modes/ui/mining-modes/mining-modes-list";
import { BoostersList } from "../../../features/mining-modes/ui/boosters/boosters-list";
import { ListsSwitcher } from "../../../shared/ui/lists-switcher/lists-switcher";

import { tabs } from "../model/switch-tabs";

export const MiningModesWidget = () => {
    const [activeTab, setActiveTab] = useState("modes");

    return (
        <div className="flex flex-col h-full">
            <ListsSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="flex-1 overflow-y-auto relative mt-6">
                {activeTab === "modes" && <MiningModesList />}
                {activeTab === "boosters" && <BoostersList />}
            </div>
        </div>
    );
};