import { useState } from "react";

export default function useMenuHandler(){

    const [ isOpen, setIsOpen ] = useState(true);

    function handleMenuOpen(){

        setIsOpen(true);

    }

    function handleMenuClose(){

        setIsOpen(false);

    }

    return {
        isOpen:{
            getter: isOpen,
            setter: setIsOpen,
            handlers:[
                handleMenuOpen,
                handleMenuClose
            ]
        }
    }
    
}