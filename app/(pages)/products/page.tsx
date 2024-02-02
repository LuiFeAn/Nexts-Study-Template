"use client"
import { products } from "@/app/mocks/products"
import toBRL from "@/app/helpers/to-brl"
import { useRouter } from "next/navigation"

export default function Products(){

    const router = useRouter();

    const gotoProduct = (path: string) => router.push(`/products/${path}`);

    return (
        <div className="flex gap-5 w-full flex-wrap p-10">

            { products.map( product => (
                <div onClick={ () => gotoProduct(product.title)} key={product.title} className="flex w-[30%] h-[200px] justify-center items-center rounded-sm bg-white">

                    <img
                        width={200}
                        height={200} 
                        alt={product.title} 
                        src={product.image}/>

                    <div className="text-start p-5 font-bold">

                        <h3>{product.title}</h3>

                        <span>{toBRL(product.value)}</span>

                    </div>

                </div>
            ))}

        </div>
    )

}