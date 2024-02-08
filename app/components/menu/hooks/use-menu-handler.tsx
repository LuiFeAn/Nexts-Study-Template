import { useState } from "react";

export default function useMenuHandler(size: string){

    const [ menuWidth, setMenuWith ] = useState(size);

    function handleMenuOpen(){

        setMenuWith(size);

    }

    function handleMenuClose(){

        setMenuWith("w-[5%]");

    }

    return {
        menuWidth:{
            getter: menuWidth,
            setter: setMenuWith,
            handlers:[
                handleMenuOpen,
                handleMenuClose
            ]
        }
    }
    
}