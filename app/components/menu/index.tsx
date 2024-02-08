"use client"
import useMenuHandler from "./hooks/use-menu-handler";
import { routes } from "@/app/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Menu(){

    const size = "w-[20%]"

    const pathname = usePathname();

    const { menuWidth } = useMenuHandler(size);

    const { handlers:[ open, close ] } = menuWidth;

    return (
        
        <>

            <aside className={`${menuWidth.getter} h-screen bg-slate-500 text-start p-8 max-md:w-full max-md:absolute transition-all `}>

                { size != menuWidth.getter && (

                    <div className="flex items-center justify-center h-full">

                        <h1 onClick={open} className="text-7xl text-white font-bold cursor-pointer animate-pulse">{">"}</h1>

                    </div>

                )}

                { size === menuWidth.getter && (
                    <>

                            <header className="w-full h-[20px] relative">
                                
                                <span onClick={close} className="absolute bg-black w-[30px] text-center h-[30px] top-0 right-0 text-xl text-white rounded-full cursor-pointer animate-pulse">X</span>

                            </header>

                            <br/><br/>

                            { routes.map( item => (
                                <details  key={item.title }className="font-bold style-none mt-5 flex" open>
                
                                    <summary className="cursor-pointer bg-blue-400 rounded-lg p-2">
                                        <Link href={item?.option ?? ""}>{item.title}</Link>
                                    </summary>
                
                                        { item?.options && item.options.map( option => (
            
                                            <Link
                                                key={option.path} 
                                                href={option.path} 
                                                className={`pl-5 pr-5 rounded-md cursor-pointer mt-3 ${
                                                    pathname === option.path ? "bg-red-500" : "" }`
                                                }>
                                                    {option.option}
                                            </Link>
                    
                                        ))}
                    
                                </details>
                            ))}

                    </>
                )}    
    
            </aside>

        </>
        
    )

}