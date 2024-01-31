
interface InputIconProps {

    image: string
    alt: string
}

export default function InputIcon({
    image,
    alt
}: InputIconProps){

    return (
        <img className="absolute right-2" width={38} height={38} alt={alt} src={image}/>
    )

}