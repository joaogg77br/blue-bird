import Conteudos from "./Conteudos"
import handsWorld from "../assets/Group (1).png"
import idea from "../assets/Group.png"
import lifeHandes from "../assets/Vector (1).png"
import comunity from "../assets/Vector.png"
import Vetor1 from "../assets/vetores/Frame 48.png"
import Vetor2 from "../assets/vetores/Frame 47.png"
import Vetor3 from "../assets/vetores/Frame 49.png"
//Mudar font

export default function Valores() {
    return (
        <>
            <section className="flex flex-col items-center w-full py-10 text-black bg-cinzaBg lg:px-20 justify-center">
                <h1 className="skita text-center text-4xl font-bold  items-center pt-10 mb-10
                lg:text-5xl lg:font-semibold
                ">Nossos valores nos movem</h1>
                <div className="flex flex-col w-full items-center justify-center px-5 gap-6
                md:flex-row md:gap-20
                ">
                    <div className="flex flex-col gap-10">
                        <Conteudos
                            img={handsWorld}
                            title="Artivismo"
                            text="Iniciativas que unem a criatividade à luta por causas sociais, políticas e ambientais."
                        />
                        <Conteudos
                            img={idea}
                            title="Inovação"
                            text="Busca de novos caminhos e compromisso intergeracional."
                        />
                    </div>
                    <div className="relative hidden min-w-40 lg:block">
                        <img className="absolute top-[-16rem]" src={Vetor1}></img>
                        <img className="absolute top-[-8rem]" src={Vetor2}></img>
                        <img className="absolute top-[2rem]" src={Vetor3}></img>
                    </div>
                    <div className="flex flex-col gap-10">
                        <Conteudos
                            img={lifeHandes}
                            title="Direitos Humanos"
                            text="Práticas orientadas para a promoção dos direitos humanos."
                        />
                        <Conteudos
                            img={comunity}
                            title="Responsabilidade Empresarial"
                            text="Ações voltadas ao desenvolvimento da sociedade como um todo."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}