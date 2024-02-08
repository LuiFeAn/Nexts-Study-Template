"use client"
import { useState } from "react"
import { products } from "@/app/mocks/products"
import { useEffect } from "react"
import ProductDetails from "./components/product_details"
import { IProduct } from "@/app/mocks/products"
import fakeApiRequest from "@/app/helpers/fake-api-request"
import ProductSummary from "./components/product_summary"

interface IProductPage {
    params:{
        productId: string
    }
}

export default function ProductPage({
    params: { productId }
}: IProductPage){

    const [ currentProduct, setCurrentProduct ] = useState<IProduct>();

    const [ loading, setLoading ] = useState(true);

    useEffect( () => {

        (async () => {

           try{

                setLoading(true)

                await fakeApiRequest(3000);

                const product = products.find( product => product.id === productId);

                setCurrentProduct(product);


           }catch(err){


           }finally{

                setLoading(false);

           }
            

        })();

    },[productId]);

    return (
      <div className="w-full h-screen pl-[50px]">

        <ProductDetails 
            loading={loading} 
            product={currentProduct}
        />

        <ProductSummary
            description={`Nintendo Switch 32GB 1 Par Joy-con + Mario Kart 8
Conheça o novo membro vibrante da família Nintendo Switch. Jogue em casa na TV ou em qualquer lugar com uma tela LED vibrante de 6,2" com o console Nintendo Switch Modelo HBDSKABL2 preto. Além de uma nova tela com cores vivas e contraste nítido, ele inclui o jogo Mario Kart 8 Deluxe, 3 meses Nintendo Switch Online, 2 controles Joy-Con nas cores azul e vermelho neon, um amplo acessório de suporte ajustável que permite ângulos de visualização mais confortáveis, HD com 32GB de armazenamento interno e áudio aprimorado nos modos portátil e semi portátil usando os alto-falantes do console. Em casa, o console fica na base do Nintendo Switch, que permite a você jogar com amigos e familiares usando uma televisão, no conforto da sua sala. Ao retirar o console de sua base, ele passa a usar o modo portátil instantaneamente, e a mesma ótima experiência de jogo da sua casa pode ser levada aonde você for. A portabilidade do aparelho é reforçada pela tela, que exibe jogabilidade intensa e em alta definição no parque, avião, carro ou na casa de um amigo.`}
        />

      </div>
    )

}