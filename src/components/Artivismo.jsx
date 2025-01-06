import ButtonDes from "./buttonDes"
import "../css/dona.css"
import { t } from "i18next"


export default function Artivismo() {
    return (
        <>
            <section className=" p-10
            lg:px-40 lg:pb-[150px]
            xl:px-72 lg:py-10">
                {/* Trocar por uma img */}
                <div className="">
                    <div className="flex">
                        <div className="flex items-center justify-center dona">

                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <ButtonDes text={t("nav4")} />
                            <br />
                            <h1 className=" text-5xl lg:text-7xl skita">{t("artvm-1")}</h1>
                        </div>
                    </div>
                    <br />
                    <br />
                    <p><span className="font-bold">Gabriela Neville</span>{t("artvm-2")}</p>
                    <br />
                    <p>{t("artvm-3")}</p>
                    <br />
                    <p>{t("artvm-4")}</p>
                    <br />
                    <p>{t("artvm-5")}</p>
                    <br />
                    <h2 className="text-3xl bold skita font-bold">{t("artvm-6")}</h2>
                    <br />
                    <p>{t("artvm-7")}</p>
                </div>
            </section>
        </>
    )
}