import { products } from "@/app/mocks/products"
import toBRL from "@/app/helpers/to-brl"
export default function Products(){

    return (
        <div className="w-full flex-wrap p-10">

            { products.map( product => (
                <div className="w-[20%] h-[20%] rounded-sm bg-white">

                    <img
                        width="100%"
                        height={30} 
                        alt={product.title} 
                        src={product.image}/>

                     <h3>{product.title}</h3>

                     <h1>{toBRL(product.value)}</h1>

                </div>
            ))}

        </div>
    )

}