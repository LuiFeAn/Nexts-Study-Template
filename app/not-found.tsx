import Image from "next/image";
import notFoundIcon from "./assets/not_found.png";

export default function NotFoundRoot(){

    return (
        <div className="w-full flex-col flex items-center h-full">

            <Image 
                width={300}
                height={300}
                alt="notFoundIcon" 
                src={notFoundIcon}
            />

        </div>
    )

}