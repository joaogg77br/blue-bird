import Conteudos from "./Conteudos"
import handsWorld from "../assets/Group_(1).png"
import idea from "../assets/Group.png"
import lifeHandes from "../assets/Vector_(1).png"
import comunity from "../assets/Vector.png"
import Vetor1 from "../assets/vetores/Frame 48.png"
import Vetor2 from "../assets/vetores/Frame 47.png"
import Vetor3 from "../assets/vetores/Frame 49.png"
import { useTranslation } from "react-i18next"
//Mudar font

export default function Valores() {

  const { t } = useTranslation()

    return (
        <>
            <section className="flex flex-col relative items-center w-full py-10 text-black bg-cinzaBg lg:px-20 lg:pt-[100px] lg:pb-[150px] justify-center">

                <h1 className="skita text-center text-4xl font-bold  items-center pt-10 mb-10
                lg:text-5xl lg:font-semibold">
                    {t("nossos_valores")}
                </h1>

                <div className="flex flex-col w-full items-center justify-center px-5 gap-6
                md:flex-row md:gap-60 ">
                    <div className="flex flex-col gap-10">
                        <Conteudos
                            img={comunity}
                            title={t("title_vl-1")}
                            text={t("text_vl-1")}
                        />
                        <Conteudos
                            img={idea}
                            title={t("title_vl-2")}
                            text={t("text_vl-2")}
                        />
                    </div>
                        <img className="absolute top-36 w-80" src={Vetor1}></img>
                        <img className="absolute top-72 w-72" src={Vetor2}></img>
                        <img className="absolute top-[440px] w-64" src={Vetor3}></img>
                    <div className="flex flex-col gap-10">
                        <Conteudos
                            img={lifeHandes}
                            title={t("title_vl-3")}
                            text={t("text_vl-3")}
                        />
                        <Conteudos
                            img={handsWorld}
                            title={t("title_vl-4")}
                            text={t("text_vl-4")}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}