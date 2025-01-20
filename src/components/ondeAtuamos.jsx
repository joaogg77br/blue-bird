import ButtonDes from "./buttonDes"
import SimpleContactForm from "./Formulário"
import country from "../assets/Frame_59_(1).png"
import { useTranslation } from "react-i18next"

export default function OndeAtuamos() {
    const {t} = useTranslation()
    return (
        <>
            <section className="px-8 lg:px-40 py-20 w-full pb-[50px] mb-10">
                <ButtonDes text={t("nav5")}/>
                <div className="flex flex-col lg:flex-row w-full lg:gap-24 pr-10">
                    <div className="lg:w-2/3">
                        <br />
                        <h1 className="text-5xl skita">{t("celebration_title")}</h1>
                        <br />
                        <br />
                        <p className="text-justify">{t("atuation_contry")}</p>
                    </div>
                    <div className="w-auto lg:w-1/2">
                        <img src={country} alt="" className="scale-100 lg:scale-[1.2] 2xl:scale-[1.3] pt-10"/>
                    </div>
                    </div>
            </section>
        </>
    )
}
