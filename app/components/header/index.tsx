import { Input } from "../lib/input"

export default function Header(){

    return (
        <div className="w-full flex items-center bg-gray-700 p-[20px]">

            <Input.Root
                placeholder="Pesquise"
            >

                {/* <Input.Icon 
                    alt="input-icon" 
                    image="https://static.thenounproject.com/png/668043-200.png"
                /> */}

            </Input.Root>

        </div>
    )

}