import "../css/grids.css"
import { useTranslation } from "react-i18next"
import ButtonDes from "./buttonDes"
import Manivela from "./Manivela"

export default function OqueFazemos() {
    const {t} = useTranslation()
    return (
        <>
            <section className="lg:px-72 lg:pt-[100px] lg:pb-32 flex flex-col gap-20 p-5">
                <div className="">
                    <div className="py-10">
                        <ButtonDes text={t("nav2")} />
                    </div>
                    <h1 className="text-4xl py-4 skita">{t("oqfz-1")}</h1>

                    <ul className="flex pb-6 gap-2 list-none">
                        <li>&nbsp; {t("oqfz_description_1*1")}</li>
                        <li>•&nbsp; {t("oqfz_description_1*2")}</li>
                        <li>•&nbsp; {t("oqfz_description_1*3")}</li>
                        <li>•&nbsp; {t("oqfz_description_1*4")}</li>
                        <li>•&nbsp; {t("oqfz_description_1*5")}</li>
                        <li>•&nbsp; {t("oqfz_description_1*6")}</li>
                    </ul>

                    <section className="mapa grid gap-4 lg:grid-row-2 lg:grid-cols-5 h-80 items-center">
                        <div className="h-full w-full"></div>
                        <div className="flex items-end h-full w-full row-span-2 text-white">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="">FILME POR UM FIO</div>
                            </div>
                        </div>
                        <div className="h-full w-full flex items-end text-white">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="">DOCUMENTÁRIO OBEM</div>
                            </div>
                        </div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                        <div className="flex text-white items-end h-full w-full col-span-2">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="">ART FOR LOVE</div>
                            </div>
                        </div>
                    </section>
                    <Manivela />
                </div>
                        <div className="border-t border-zinc-400"></div>
                <div className="">
                    <h1 className="text-4xl py-4 skita">{t("oqfz-2")}</h1>
                    <ul className="flex pb-6 gap-4 list-none">
                        <li>&nbsp; {t("oqfz_description_2*1")}</li>
                        <li>•&nbsp; {t("oqfz_description_2*2")}</li>
                        <li>•&nbsp; {t("oqfz_description_2*3")}</li>
                        <li>•&nbsp; {t("oqfz_description_2*4")}</li>
                        <li>•&nbsp; {t("oqfz_description_2*5")}</li>
                        <li>•&nbsp; {t("oqfz_description_2*6")}</li>
                        <li>•&nbsp; {t("oqfz_description_2*7")}</li>
                    </ul>
                    <section className="grid mapa3 gap-4 lg:grid-row-2  h-80 lg:grid-cols-5">
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full row-span-2"></div>
                        <div className="h-full w-full"></div>
                        <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="uppercase">27ª Mostra de Cinema de Tiradentes</div>
                            </div>
                        </div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                    </section>

                    <Manivela />
                </div>
                        <div className="border-t border-zinc-400"></div>
                <div className="">
                    <h1 className="text-4xl py-4 skita">{t("oqfz-3")}</h1>
                    <p className="pb-4">{t("oqfz_description_3")}<span className="font-bold">{t("oqfz-4")}</span> {t("oqfz_description_4")}</p>
                    <section className="grid mapa2 gap-4 lg:grid-row-2  h-80 lg:grid-cols-5">
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full row-span-2"></div>
                        <div className="h-full w-full"></div>
                        <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="uppercase">19ª Mostra de Cinema de Ouro Preto</div>
                            </div>
                        </div>
                        <div className="h-full w-full">a</div>
                        <div className="h-full w-full"></div>
                    </section>
                    <Manivela />
                </div>
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