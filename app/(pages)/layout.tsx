import Menu from "../components/menu";

interface ILayout {

    children: React.ReactNode

}

export default function Layout({
    children
}: ILayout){
    
    return (
        <div className="flex gap-0">

            <Menu/>

            <div className="w-full h-screen flex flex-col items-center pt-[100px] bg-slate-200">

                { children }

            </div>

        </div>
    )

}