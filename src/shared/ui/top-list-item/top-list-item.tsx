import { Snowflake } from "lucide-react"
import { Star } from "lucide-react"

import { getBackgroundStyle, getTextColorClass, getNumberClasses } from "../../utils/getTopListColors"

interface ITopListItemProps {
    place: number
    amount: number
    username: string
    firstPlace?: boolean
    secondPlace?: boolean
    thirdPlace?: boolean
    isStarIcon?: boolean
}



export const TopListItem = ({
    place,
    amount,
    username,
    firstPlace,
    secondPlace,
    thirdPlace,
    isStarIcon,
}: ITopListItemProps) => {
    const textColorClass = getTextColorClass(firstPlace, secondPlace, thirdPlace)

    return (
        <div
            className={`${isStarIcon ? "h-[55px]" : "h-[70px]"} w-full  rounded-[5px] px-4 flex flex-row justify-between items-center`}
            style={getBackgroundStyle(firstPlace, secondPlace, thirdPlace)}
        >
            <div className="flex flex-row gap-x-3 items-center">
                <div className={getNumberClasses(firstPlace, secondPlace, thirdPlace)}>
                    <span className="text-[16px]">{place}</span>
                </div>
                <span className={`text-[18px] ${textColorClass}`}>{username}</span>
            </div>
            <div className="flex items-center gap-x-2">
                <span className={`${isStarIcon ? "text-[18px]" : "text-[20px]"} ${textColorClass}`}>{amount}k</span>
                {isStarIcon ? (
                    <Star size={24} className={textColorClass} />
                ) : (
                    <Snowflake size={24} className={textColorClass} />
                )}
            </div>
        </div>
    )
}
