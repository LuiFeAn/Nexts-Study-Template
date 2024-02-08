
import { IProduct } from "@/app/mocks/products"
import ProductSummary from "../product_summary";
import ProductDetailsSkeleton from "./skeleton";

interface IProductDetails {
   product: IProduct | undefined,
   loading: boolean
}

export default function ProductDetails({
    loading,
    product
}: IProductDetails){


    if( loading ){

        return (
            <ProductDetailsSkeleton/>
        )

    }

    return (
       <div className="flex items-center gap-8">

            <img width={300} height={300} src={product?.image}/>

            <div>

                <h1 className="font-bold text-3xl">{product?.title}</h1>

                <br/>

                <h3 className="text-1xl">{product?.description}</h3>

            </div>

       </div>
    )

}