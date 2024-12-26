import Block from "./Block"
import Block1 from "../assets/blocks/Frame_43_(1).png"
import Block2 from "../assets/blocks/Frame_37_(1).png"
import Block3 from "../assets/blocks/Frame_38_(1).png"
import Block4 from "../assets/blocks/Frame_39_(1).png"

export default function Diferences() {
    return (
        <div className="w-full bg-cinzaBg mb-10 py-10 px-10 md:px-2">
            <div className="flex flex-col items-center gap-10 justify-center mt-10 lg:gap-10 
                    lg:flex-row">
                <div className="id gap-5 md:grid-cols-2 lg:grid-cols-1
                ">
                    <Block img={Block1} title={"Expressão da alma da marca"} text={"A arte permite que as marcas expressem sua essência de forma visual e emocional, indo além de simples logotipos e slogans.  Através da arte, as marcas podem transmitir seus valores, sua história e sua personalidade de forma única;"} />
                    <Block img={Block2} title={"Criação de narrativas"} text={"As melhores marcas são aquelas que conseguem contar histórias que ressoam com seus públicos. A arte permite criar narrativas visuais e emocionais que conectam as marcas com seus consumidores em um nível mais profundo;"} />
                </div>

                <div className="grid gap-5 lg:pt-20 md:grid-cols-2 lg:grid-cols-1">
                    <Block img={Block3} title={"Diferenciação"} text={"Em um mercado cada vez mais competitivo, a arte pode ser um diferencial crucial para destacar uma marca da concorrência. Ao utilizar elementos artísticos exclusivos, as marcas podem criar uma identidade visual marcante e memorável;"} />
                    <Block img={Block4} title={"Conexão emocional"} text={"A arte tem o poder de evocar emoções e criar conexões profundas com as pessoas. Ao utilizar elementos artísticos em suas campanhas, as marcas podem criar um vínculo emocional com seus consumidores, tornando-as mais memoráveis e relevantes."} />
                </div>
            </div>
        </div>
    )
}