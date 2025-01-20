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
            xl:px-56 xl:pr-[270px] lg:pt-[100px] lg:pb-[150px]">
                <ButtonDes text={t("nav1")}/>
                <br />
                <h1 className="skita text-4xl font-bold
                lg:text-6xl "> Bluebird Business</h1> 
                <br />
                <p> <span className="p-2"></span>{t("Qsm-1")}</p>
                <br />
                <p> <span className="p-2">{t("Qsm-2")}</span></p>
                <br />
                <p> <span className="p-2">{t("Qsm-3")}</span></p>
                <br />
                <p> <span className="p-2">{t("Qsm-4")}</span></p>
                <p>{t("Qsm-5")}</p>
            </section>
        </>
    )
}