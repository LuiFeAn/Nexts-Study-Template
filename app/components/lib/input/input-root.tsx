import React from "react"

interface InputRootProps {

    children?: React.ReactNode
    placeholder?: string

}

export default function InputRoot({
    children,
    placeholder
}: InputRootProps){

    return (
        <div className="w-[300px] h-[55px] flex gap-1 relative">

            <input placeholder={placeholder} className="w-full pl-[20px] rounded-md"/>

            { children }

        </div>
    )

}