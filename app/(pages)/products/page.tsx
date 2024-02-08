"use client"
import { IProduct, products as products_ } from "@/app/mocks/products"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ProductSkeleton from "./components/product/skeleton"
import fakeApiRequest from "@/app/helpers/fake-api-request"
import dynamic from "next/dynamic"
import { io } from "socket.io-client"

const Product = dynamic(() => import('./components/product'), {
  ssr:false,
  loading: () => <ProductSkeleton/>,
});

export default function Products(){

    const [ products, setProducts ] = useState<IProduct []>([]);

    const router = useRouter();

    const gotoProduct = (path: string) => router.push(`/products/${path}`);

    async function obtainProductsFakeRequest(){

        await fakeApiRequest(3000);

        setProducts(products_)

    }

    useEffect( () => {

        obtainProductsFakeRequest();

    },[]);

    useEffect( () => {

        const socket = io("ws://localhost:3003",{
            autoConnect:true,
        });

        // socket.on("welcome", () => async ( data: any) => {
        //     await data;
        //     console.log("foi")
        // });

        () => socket.close();

    },[]);

    return (
        <div className="flex items-center justify-center gap-5 flex-wrap p-10 pb-[150px]">

            { products.map( product => (
                <Product 
                    key={product.id} 
                    product={product} 
                    gotoProduct={gotoProduct}
                />
            ))}

        </div>
    )

}