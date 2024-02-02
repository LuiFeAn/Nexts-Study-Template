

export default function toBRL(value: number){

    return value.toLocaleString("pt-br",{
        currency:"BRL",
        style:"currency"
    })

}