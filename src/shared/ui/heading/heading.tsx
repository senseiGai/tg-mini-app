import { Snowflake } from "lucide-react"

interface IHeading {
    title: string
}

export const Heading = ({ title }: IHeading) => {
    return (
        <h1 className="text-white font-[400] text-[24px] flex flex-row items-center gap-x-2">{title}  <Snowflake size={24} className="text-primary" /></h1>
    )
}
