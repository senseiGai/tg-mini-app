
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';

import { mockData } from '../model/mock-data';

export const Chart = () => {

    return (
        <>
            <span className="text-[#FFFFFF4D] text-[17px] mt-6 mb-1.5">Snejok - USDT: <span className="text-primary">0.01$</span></span>
            <ResponsiveContainer width="90%" height={216} className='mt-4 m-auto'>
                <LineChart data={mockData}>
                    <CartesianGrid stroke="#E9EDF71A" vertical={false} strokeDasharray="none" />
                    <XAxis dataKey="time" tick={{ fill: '#fff' }} axisLine={false} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#FF9900"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};
