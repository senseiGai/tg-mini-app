import { Header } from "../../features/navigation/ui/header"
import { FinanceConditionCard } from "../../features/profile/ui/finance-condition-card"
import { Chart } from "../../features/chart/ui/chart"
import { Button } from "../../shared/ui/button/button"
import { IconButton } from "../../features/referral/ui/referral-button"
import { ReferralPopup } from "../../features/referral/ui/referral-popup"

import { mockData } from "../../features/profile/model/mock-data"
import { UserRoundPlus } from "lucide-react"

export const MainScreen = () => {
    return (
        <main className="flex flex-col">
            <Header title="Snejok Mining" isBurger />
            <FinanceConditionCard {...mockData} />
            <Chart />
            <Button label='Start mining' className="mt-6" />
            <IconButton label='Your Referral Link' icon={UserRoundPlus} className="mt-5" />
            <ReferralPopup />
        </main>
    )
}
