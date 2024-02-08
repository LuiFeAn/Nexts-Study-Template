import toBRL from "@/app/helpers/to-brl"
import { IProduct } from "@/app/mocks/products"

interface IProductComponent {
    product: IProduct,
    gotoProduct(title: string): void
}

export default function Product({
product:{
    id,
    description,
    image,
    title,
    value
},
gotoProduct
}: IProductComponent){

    return (
        <div onClick={ () => gotoProduct(id)} className="flex cursor-pointer w-[30%] h-[200px] justify-center items-center rounded-md bg-white">

                    <img
                        width={200}
                        height={200} 
                        alt={title} 
                        src={image}/>

                    <div className="text-start p-5 font-bold">

                        <h3>{title}</h3>

                        <span>{toBRL(value)}</span>

                    </div>

        </div>
    )

}