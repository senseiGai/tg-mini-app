import { useState, useEffect } from 'react';
import { TopListItem } from '../../../shared/ui/top-list-item/top-list-item';
import { donatesList } from '../lib/mock-data';


export const DonatesList = () => {
    const [list, setList] = useState(donatesList);

    useEffect(() => {
        const interval = setInterval(() => {
            setList(currentList => {
                const randomIndex = Math.floor(Math.random() * currentList.length);
                return currentList.map((item, index) =>
                    index === randomIndex
                        ? { ...item, amount: item.amount }
                        : item
                );
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const sortedList = [...list].sort((a, b) => b.amount - a.amount);

    return (
        <div className="mt-6">
            <div className="flex flex-col gap-4">
                {sortedList.map((item, index) => (
                    <TopListItem
                        isStarIcon
                        key={item.username}
                        {...item}
                        firstPlace={index === 0}
                        secondPlace={index === 1}
                        thirdPlace={index === 2}
                    />
                ))}
            </div>
        </div>
    )
}
