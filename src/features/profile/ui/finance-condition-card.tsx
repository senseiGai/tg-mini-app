import { categories } from "../model/categories";
import { ProfileData } from "../lib/mock-data";



type FinanceConditionCardProps = ProfileData;

export const FinanceConditionCard = (props: FinanceConditionCardProps) => {
    const renderValue = (category: typeof categories[number], value: number) => {
        return (
            <span className='text-primary text-[16px] flex items-center gap-x-1'>
                {value}
                {category.suffix && (
                    typeof category.suffix === 'string'
                        ? <span>{category.suffix}</span>
                        : <category.suffix size={16} />
                )}
            </span>
        );
    };

    return (
        <>
            <span className="text-[#FFFFFF4D] text-[17px] mt-6 mb-1.5">My profile</span>
            <div className='relative w-full h-[130px] bg-gradient-to-r from-[rgba(171,171,171,0.3)] to-[rgba(255,255,255,0.3)] p-[1px] rounded-lg'>
                <div className='absolute inset-0 bg-background rounded-lg m-[1px] px-5 py-3'>
                    <div className='flex flex-col gap-y-3'>
                        {categories.map((category) => (
                            <div className='flex flex-row items-center gap-x-4' key={category.key}>
                                <span className='text-light_gray text-[16px]'>{category.label}:</span>
                                {renderValue(category, props[category.key])}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
