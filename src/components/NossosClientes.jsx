import ButtonDes from "./buttonDes";
import Client1 from "../assets/patrocinadores/aymore 1 (1).png"
import Client2 from "../assets/patrocinadores/image 2 (1).png"
import Client3 from "../assets/patrocinadores/image 3 (1).png"
import Client4 from "../assets/patrocinadores/otis 1 (1).png"

import Parceiro1 from "../assets/parceiros/18cinebh-destaque 1 (1).png"
import Parceiro2 from "../assets/parceiros/18cinebh-destaqued 1 (2).png"
import Parceiro3 from "../assets/parceiros/image_1_(1).png"
import Parceiro4 from "../assets/parceiros/image_4_(1).png"
import Parceiro5 from "../assets/parceiros/image_5_(1).png"
import Parceiro6 from "../assets/parceiros/logo-ocean-films-preto_1_(1).png"
import Parceiro7 from "../assets/parceiros/unnamed_1_(1).png"

import { useTranslation } from "react-i18next";

export default function NossosClients() {
    const { t } = useTranslation()

    return (
        <>
            <div className="flex justify-center items-center gap-4 flex-col lg:pt-[100px] lg:pb-[50px] ">

                <div className="flex  flex-col justify-center w-full items-center py-10 ">
                    <ButtonDes text={t("nav3")} />
                    <h1 className="skita text-4xl lg:text-5xl p-10 font-bold lg:mt-10">{t("confianca")}</h1>
                </div>

                <div className="flex items-center flex-wrap justify-center gap-10">
                    <img src={Client1} alt="" />
                    <img src={Client2} alt="" />
                    <img src={Client3} alt="" />
                    <img src={Client4} alt="" />
                </div>

                <div className=" flex flex-wrap items-center flex-col justify-center w-full lg:w-4/5 bg-cinzaBg my-10 pb-10 px-[30px]">
                    <h1 className="skita text-4xl p-10">{t("parceiros")}</h1>
                    <div className="flex flex-wrap items-center p-10 gap-10 justify-center lg:py-20 w-4/5">
                        <img src={Parceiro1} alt="" className="h-10 lg:h-14" />
                        <img src={Parceiro2} alt="" className="h-10 lg:h-14" />
                        <img src={Parceiro3} alt="" className="h-10 lg:h-14" />
                        <img src={Parceiro4} alt="" className="h-10 lg:h-14" />
                        <div></div>
                        <img src={Parceiro5} alt="" className="h-10 lg:h-14" />
                        <img src={Parceiro7} alt="" className="h-10 lg:h-14" />
                        <img src={Parceiro6} alt="" className="h-10 lg:h-14" />
                    </div>
                </div>
            </div>
        </>
    )
}
