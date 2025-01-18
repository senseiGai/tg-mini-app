import { Home } from "lucide-react";
import { ChartBarIncreasing } from "lucide-react";
import { Coins } from "lucide-react";
import { UsersRound } from "lucide-react";
import { FileQuestion } from "lucide-react";

export const links = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Top 100', icon: ChartBarIncreasing, path: '/statistics' },
    { name: 'Donate', icon: Coins, path: '/donate' },
    { name: 'Partners', icon: UsersRound, path: '/partners' },
    { name: 'Tasks', icon: FileQuestion, path: '/tasks' },
]