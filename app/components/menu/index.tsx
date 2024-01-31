"use client"

import useMenuHandler from "./hooks/use-menu-handler";
import { useRouter } from "next/navigation"
import { routes } from "@/app/routes";

export default function Menu(){

    const { isOpen } = useMenuHandler();

    const { handlers:[ open, close ] } = isOpen;

    const router = useRouter();

    const handleRoute = (path: string) => router.push(path);

    return (
        
        <>

            { isOpen.getter && (
                
                <aside className="w-[20%] h-screen bg-slate-500 text-start p-8 max-md:w-full max-md:absolute">

                    <header className="w-full h-[20px] relative">
                        
                        <span onClick={close} className="absolute right-0 text-xl text-white rounded-full">X</span>

                    </header>

                    { routes.map( item => (
                        <details className="font-bold style-none mt-5" open>
        
                            <summary className="cursor-pointer bg-blue-400 rounded-lg p-2">{item.title}</summary>
        
                            { item?.options && item.options.map( option => (
        
                                <p onClick={ () => (
                                    handleRoute(option.path)
                                ) } className="pl-5 cursor-pointer mt-3">{option.option}</p>
        
                            ))}
            
                        </details>
                    ))}
    
                </aside>
            )}

        </>
        
    )

}