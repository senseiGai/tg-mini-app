import { Home } from "lucide-react";
import { ChartBarIncreasing } from "lucide-react";
import { Coins } from "lucide-react";
import { UsersRound } from "lucide-react";
import { FileQuestion } from "lucide-react";
import { LucideIcon } from 'lucide-react'
import { Pickaxe, Info, Wallet } from 'lucide-react'

export interface ILink {
    path: string
    icon: LucideIcon
    name: string
}

export const bottomPanelLinks: ILink[] = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Top 100', icon: ChartBarIncreasing, path: '/statistics' },
    { name: 'Donate', icon: Coins, path: '/donate' },
    { name: 'Partners', icon: UsersRound, path: '/partners' },
    { name: 'Tasks', icon: FileQuestion, path: '/tasks' },
]


export const sidebarLinks: ILink[] = [
    { path: '/mining-modes', icon: Pickaxe, name: 'Mining Modes' },
    { path: '/about', icon: Info, name: 'About' },
    { path: '/wallet', icon: Wallet, name: 'Wallet' },
]