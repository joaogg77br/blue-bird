import "../css/banner.css"
import { useTranslation } from "react-i18next"

export default function Banner() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <section className="uppercase flex justify-center items-center lg:h-96">
      <div className="background-imagem w-full h-full flex justify-center items-center px-10 py-10 ">

        <h1 className="skita text-startp-10">
          <p className="text-azulbebe text-5xl  font-normal lg:text-[60px]">
            {t("more_of_marketing")}
          </p>
          <span className=" text-black text-5xl  font-medium lg:text-[90px] ">
            {t("the_cultural_legacy")}
          </span>
        </h1>

      </div>
    </section>
  )
}
