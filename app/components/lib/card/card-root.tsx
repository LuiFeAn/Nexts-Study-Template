
interface ICardRootProps {

    children: React.ReactNode
    
}

export default function CardRoot({
    children
}: ICardRootProps){

    return (
        <div className="w-full h-[15%] bg-white flex p-3">

            { children }

        </div>
    )

}