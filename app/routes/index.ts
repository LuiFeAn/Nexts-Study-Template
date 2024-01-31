
interface IRoutes {

    title: string
    options?: Array<{
        option: string
        path: string
    }>

}

export const routes: IRoutes [] = [

    {
        title:"Página Inicial",
    },

    {
        title:"Produtos",
        options:[
            {
                option:"Computadores",
                path:"/products/computers"
            },
            {
                option:"Consoles",
                path:"/products/consoles"
            }
        ]
    }

]