
export const getBackgroundStyle = (firstPlace?: boolean, secondPlace?: boolean, thirdPlace?: boolean) => {
    if (firstPlace) return { background: 'linear-gradient(90deg, #EBD197 0%, #A2790D 100%)' }
    if (secondPlace) return { background: 'linear-gradient(90deg, #E3E3E3 0%, #A8A9AD 100%)' }
    if (thirdPlace) return { background: 'linear-gradient(90deg, #CD7F31 0%, #864B11 100%)' }
    return {
        background: '#FFFFFF1A'
    }
}

export const getTextColorClass = (firstPlace?: boolean, secondPlace?: boolean, thirdPlace?: boolean) => {
    return firstPlace || secondPlace || thirdPlace ? "text-white" : "text-primary"
}

export const getNumberClasses = (firstPlace?: boolean, secondPlace?: boolean, thirdPlace?: boolean) => {
    const textColor = getTextColorClass(firstPlace, secondPlace, thirdPlace)
    const borderColor = firstPlace || secondPlace || thirdPlace ? "border-white" : "border-primary"
    return `rounded-full border ${borderColor} ${textColor} w-[32px] h-[32px] flex items-center justify-center`
}