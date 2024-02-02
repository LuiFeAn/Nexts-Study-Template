import { Input } from "../lib/input"

export default function Header(){

    return (
        <div className="w-full justify-between flex items-center bg-gray-700 p-[20px]">

            <Input.Root
                placeholder="Pesquise"
            >

                {/* <Input.Icon 
                    alt="input-icon" 
                    image="https://static.thenounproject.com/png/668043-200.png"
                /> */}

            </Input.Root>

            <div className="flex items-center justify-center gap-3 text-white font-bold">

                <p>Bem-vindo, fulano de tal</p>

                <div className="rounded-full bg-black w-[50px] h-[50px]">

                </div>

            </div>

        </div>
    )

}