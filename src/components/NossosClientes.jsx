import ButtonDes from "./buttonDes";
import Client1 from "../assets/patrocinadores/aymore 1 (1).png"
import Client2 from "../assets/patrocinadores/image 2 (1).png"
import Client3 from "../assets/patrocinadores/image 3 (1).png"
import Client4 from "../assets/patrocinadores/otis 1 (1).png"

import Parceiro1 from "../assets/parceiros/18cinebh-destaque 1 (1).png"
import Parceiro2 from "../assets/parceiros/18cinebh-destaqued 1 (2).png"
import Parceiro3 from "../assets/parceiros/image 1 (1).png"
import Parceiro4 from "../assets/parceiros/image 4 (1).png"
import Parceiro5 from "../assets/parceiros/image 5 (1).png"
import Parceiro6 from "../assets/parceiros/logo-ocean-films-preto 1 (1).png"



export default function NossosClients() {
    return (
        <>
            <div className="flex justify-center items-center gap-4 flex-col ">
                <div className="flex  flex-col justify-center w-full items-center py-10 ">
                    <ButtonDes text={"Nossos Clientes"} />
                    <h1 className="skita text-5xl p-10 font-bold">Temos a confiança de grandes marcas</h1>
                </div>
                <div className="flex items-center flex-wrap justify-center gap-10">
                    <img src={Client1} alt="" />
                    <img src={Client2} alt="" />
                    <img src={Client3} alt="" />
                    <img src={Client4} alt="" />
                </div>
                <div className=" flex flex-wrap items-center flex-col justify-center bg-cinzaBg my-10 pb-10">
                    <h1 className="skita text-4xl p-10">Nossos Parceiros</h1>
                    <div className="flex flex-wrap items-center p-10 gap-10 justify-center lg:grid lg:grid-cols-4 lg:grid-rows-2">
                        <img src={Parceiro1} alt="" />
                        <img src={Parceiro2} alt="" />
                        <img src={Parceiro3} alt="" />
                        <img src={Parceiro4} alt="" />
                        <img src={Parceiro5} alt="" />
                        <img src={Parceiro6} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}