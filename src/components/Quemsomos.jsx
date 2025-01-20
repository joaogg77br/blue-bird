import ButtonDes from "./buttonDes"
import { useTranslation } from "react-i18next"


//Mudar a font Instrumet sans e 

export default function QuemSomos(){
  const { t, i18n } = useTranslation()
    return(
        <>
            <section className=" px-5 pb-20
            text-black  pt-[80px]
            lg:px-40 text-[19px]
            xl:px-[300px] lg:w-[100%] text-justify break-word  lg:pt-[100px] lg:pb-[150px]">
                <ButtonDes text={t("nav1")}/>
                <br />
                <h1 className="skita text-4xl font-bold
                lg:text-6xl "> Bluebird Business</h1> 
                <br />
                <p> {t("Qsm-1")}</p>
                <br />
                <p> {t("Qsm-2")}</p>
                <br />
                <p>{t("Qsm-3")}</p>
                <br />
                <p>{t("Qsm-4")}</p>
                <p>{t("Qsm-5")}</p>
            </section>
        </>
    )
}