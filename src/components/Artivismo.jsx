import ButtonDes from "./buttonDes"
import "../css/dona.css"
import { t } from "i18next"


export default function Artivismo() {
    return (
        <>
            <section className=" p-10 text-justify
            lg:px-40 lg:pb-[150px]
            xl:px-56 xl:pr-[270px] lg:py-10">
                {/* Trocar por uma img */}
                <div className="">
                        <div className="block mb-10 lg:hidden">
                            <ButtonDes text={t("nav4")} />
                        </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex items-center justify-center dona
                            h-80 w-60 mb-10 lg:w-[900px] 2xl:w-[400px]"></div>
                        <div className="flex flex-col items-start justify-start">
                        <div className="hidden mb-4 lg:block">
                            <ButtonDes text={t("nav4")} />
                        </div>
                            <br />
                            <h1 className="text-start text-5xl lg:text-7xl skita">{t("artvm-1")}</h1>
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
