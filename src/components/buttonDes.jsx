import Flower from "../assets/flor.svg"


export default function ButtonDes({ text }) {

    return (
        <>
            <button className="flex bg-azulbebe px-4 py-1 font-medium items-center justify-center rounded-sm gap-1">
                <img src={Flower} alt="" />
                <p className="font-bold uppercase">{text}</p>
            </button>
        </>
)
}