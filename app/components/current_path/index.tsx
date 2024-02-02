"use client"
import { usePathname } from "next/navigation"
import Link from "next/link";
export default function CurrentPath(){

    const pathname = usePathname();

    const splitedPathName = pathname.slice(1).split("/");

    if( pathname!= "/" ){

         return (
            <div className="w-full absolute top-0 text-white font-bold p-2 bg-gray-500 pl-3 text-start">
                
                { splitedPathName.map(( pathname => (
                    <Link href={`/${pathname}`}>{`/${pathname}`}</Link>
                )))}

            </div>
        )

    }

}