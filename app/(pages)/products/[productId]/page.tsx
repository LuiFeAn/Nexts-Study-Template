

interface IProductPage {
    params:{
        productId: string
    }
}

export default function ProductPage({
    params:{ productId }
}: IProductPage){

    return (
        <div>

            <h1>Página do produto {productId}</h1>

        </div>
    )

}