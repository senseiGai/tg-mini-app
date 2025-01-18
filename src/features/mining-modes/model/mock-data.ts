interface MiningMode {
    id: number;
    name: string;
    hashRate: string;
    isLocked: boolean;
}

interface Booster {
    id: number;
    name: string;
    coeff: string;
    isLocked: boolean;
}

export const miningModes: MiningMode[] = [
    { id: 1, name: "Mode 1", hashRate: "100Hs/sec", isLocked: false },
    { id: 2, name: "Mode 2", hashRate: "200Hs/sec", isLocked: true },
    { id: 3, name: "Mode 3", hashRate: "200Hs/sec", isLocked: true },
    { id: 4, name: "Mode 4", hashRate: "200Hs/sec", isLocked: true },
    { id: 5, name: "Mode 5", hashRate: "200Hs/sec", isLocked: true },
    { id: 6, name: "Mode 6", hashRate: "200Hs/sec", isLocked: true },
    { id: 7, name: "Mode 7", hashRate: "200Hs/sec", isLocked: true },
    { id: 8, name: "Mode 8", hashRate: "200Hs/sec", isLocked: true },
    { id: 9, name: "Mode 9", hashRate: "100Hs/sec", isLocked: true },
    { id: 10, name: "Mode 10", hashRate: "200Hs/sec", isLocked: true },
    { id: 11, name: "Mode 11", hashRate: "200Hs/sec", isLocked: true },
    { id: 12, name: "Mode 12", hashRate: "200Hs/sec", isLocked: true },
    { id: 13, name: "Mode 13", hashRate: "200Hs/sec", isLocked: true },
    { id: 14, name: "Mode 14", hashRate: "200Hs/sec", isLocked: true },
    { id: 15, name: "Mode 15", hashRate: "200Hs/sec", isLocked: true },
];

export const boosters: Booster[] = [
    { id: 1, name: "Booster 1", coeff: "1.2px", isLocked: false },
    { id: 2, name: "Booster 2", coeff: "1.5px", isLocked: true },
    { id: 3, name: "Booster 3", coeff: "1.8px", isLocked: true },
    { id: 4, name: "Booster 4", coeff: "1.9px", isLocked: true },
    { id: 5, name: "Booster 5", coeff: "2.0px", isLocked: true },
    { id: 6, name: "Booster 6", coeff: "2.1px", isLocked: true },
    { id: 7, name: "Booster 7", coeff: "2.2px", isLocked: true },
    { id: 8, name: "Booster 8", coeff: "2.3px", isLocked: true },
];