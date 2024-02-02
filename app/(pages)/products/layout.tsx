import { Metadata } from "next"
import { usePathname } from "next/navigation"

interface IParams {

    params:{
        productId: string
    }

}

interface IProductsLayout extends IParams {

    children: React.ReactNode

}

export async function generateMetadata({
    params
}: IParams) {

    return {
        title:"Testando",
        description:"Testando"
    }
}

export default function ProductsLayout({
    children,
    params:{ productId }
}: IProductsLayout){

    return (
        <div>

            { children }

        </div>
    )

}