import Block from "./Block"
import ButtonDes from "./buttonDes"
import { useTranslation } from "react-i18next"
import "../css/background.css"

export default function ArtCtrMrc() {
    const { t } = useTranslation()
    return (
        <>
            <section className="pattern p-10
            lg:px-40 lg:pt-[100px]
            xl:px-56 xl:pr-[250px] w-full bg-cinzaBg ">
                {/* Trocar por uma img */}
                <div className="">
                    <div className="flex">
                        <div className="flex flex-col items-start justify-start">
                            <h1 className="text-[50px] leading-10 lg:text-7xl skita font-bold">{t("artCtr-1")}<span>{t("")}</span></h1>
                        </div>
                    </div>
                    <br />
                    <p>{t("artCtr-1*2")}</p>
                    <br />
                    <p>{t("artCtr-1*3")} </p>
                    <br />
                    <p>{t("artCtr-1*4")}</p>
                    <br />
                    <p>{t("artCtr-1*5")}</p>
                </div>
            </section>
        </>
    )
}
