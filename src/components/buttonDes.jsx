import { Flower } from "lucide-react"

export default function ButtonDes({text}){
    return(
        <>
            <button className="flex bg-azulbebe p-2 font-semibold">
                <div><Flower/></div>
                <p>{text}</p>
            </button>
        </>
    )
}