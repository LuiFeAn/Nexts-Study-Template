
interface IProductSummary {

    description: string

}
export default function ProductSummary({
    description
}: IProductSummary){

    return (
        <div className="mt-[50px] pb-20">

            <h1 className="font-bold text-3xl">Informações do produto</h1>

            <br/>

            <p>{description}</p>

        </div>
    )

}