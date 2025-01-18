import { ProfileData } from '../lib/mock-data';
import { Snowflake, LucideIcon } from 'lucide-react';

export const categories: Array<{
    label: string;
    key: keyof ProfileData;
    suffix?: string | LucideIcon;
}> = [
        { label: 'Balance', key: 'balance', suffix: Snowflake },
        { label: 'Hash Per Second', key: 'hps', suffix: '#' },
        { label: 'NumThreads', key: 'numthreads' }
    ];