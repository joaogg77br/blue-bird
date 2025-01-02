import Flower from "../assets/flor.svg"


export default function ButtonDes({ text }) {

    return (
        <>
            <button className="flex bg-azulbebe p-2 font-medium items-center justify-center rounded-sm gap-1">
                <img src={Flower} alt="" />
                <p>{text}</p>
            </button>
        </>
    )

}