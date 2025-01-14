import "../css/grids.css"
import { useTranslation } from "react-i18next"
import ButtonDes from "./buttonDes"
import SlideGrid1 from "./SlideGrid1"
import SlideGrid3 from "./SlideGrid3"
import SlideGrid2 from "./SLideGrid2"


export default function OqueFazemos() {
    const { t } = useTranslation()
    return (
        <>
            <section className="lg:px-52 lg:pt-[100px] lg:pb-32 flex flex-col gap-10  p-5">
                <div className="">
                    <div className="py-10">
                        <ButtonDes text={t("nav2")} />
                    </div>

                    <h1 className="text-6xl lg:text-4xl py-4 skita">{t("oqfz-1")}</h1>

                    <ul className="text-[19px] lg:text-[16px] flex flex-col lg:flex-row  pb-6 gap-2 list-none">
                        <div className="flex gap-2 lg:gap-1">
                            <li>•&nbsp; {t("oqfz_description_1*1")}</li>
                            <li>•&nbsp; {t("oqfz_description_1*2")}</li>
                        </div>
                        <div className="flex gap-2 lg:gap-1">
                            <li>•&nbsp; {t("oqfz_description_1*3")}</li>
                            <li>•&nbsp; {t("oqfz_description_1*4")}</li>
                        </div>
                        <div className="flex gap-2 lg:gap-1">
                            <li>•&nbsp; {t("oqfz_description_1*5")}</li>
                            <li>•&nbsp; {t("oqfz_description_1*6")}</li>
                        </div>
                    </ul>
                </div>
                <SlideGrid2/>
                <div className="border-t border-zinc-400"></div>
                <div className="">
                    <h1 className="text-6xl lg:text-4xl py-4 skita">{t("oqfz-2")}</h1>
                    <ul className="text-[19px] lg:text-[16px] flex flex-col lg:flex-row pb-6 gap-4 list-none">
                        <div className="flex gap-2">
                            <li>•&nbsp; {t("oqfz_description_2*1")}</li>
                            <li>•&nbsp; {t("oqfz_description_2*2")}</li>
                            <li>•&nbsp; {t("oqfz_description_2*6")}</li>
                        </div>
                        <div className="flex gap-2">
                            <li>•&nbsp; {t("oqfz_description_2*3")}</li>
                            <li>•&nbsp; {t("oqfz_description_2*4")}</li>
                            <li>•&nbsp; {t("oqfz_description_2*5")}</li>
                        </div>
                        <div className="flex gap-2">
                            <li>•&nbsp; {t("oqfz_description_2*7")}</li>
                        </div>
                    </ul>
                       <SlideGrid3/>
                </div>
                <div className="border-t border-zinc-400"></div>
                <div className="text-[19px]">
                    <h1 className="text-6xl lg:text-4xl py-4 skita">{t("oqfz-3")}</h1>
                    <p className="pb-4 text-[16px]">{t("oqfz_description_3")}<span className="font-bold">{t("oqfz-4")}</span> {t("oqfz_description_4")}</p>
                </div>
                    <SlideGrid1 />
            </section>
            <div className="flex flex-col w-full py-20 bg-cinzaBg text-center ">
                <p className="font-bold pb-5 text-4xl skita">{t("remuneracao")}</p>
                <div className=" w-full flex flex-col lg:flex-row gap-4 justify-center">
                    <p><span className="bg-azulbebe m-2 p-1 font-bold">10%</span>{t("pago-1")}</p>
                    <p><span className="bg-azulbebe m-2 p-1 font-bold">20%</span>{t("pago-2")}</p>
                </div>
            </div>
        </>
    )
}
