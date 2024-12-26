import ButtonDes from "./buttonDes"
import SimpleContactForm from "./Formulário"
import country from "../assets/Frame_59_(1).png"

export default function OndeAtuamos() {
    return (
        <>
            <section className="px-20 lg:px-72 py-20 w-full">
                <ButtonDes text="Onde atuamos" />
                <div className="flex flex-col lg:flex-row w-full lg:gap-24">
                    <div className="lg:w-2/3">
                        <br />
                        <h1 className="text-6xl skita">
                            Celebrando a
                            brasilidade em
                            terras Americanas
                        </h1>
                        <br />
                        <br />
                        <p className="text-start">
                            Acreditamos no poder da cultura para
                            conectar pessoas e promover o desenvolvimento.
                            Nossos projetos visam fortalecer a identidade brasileira nos Estados Unidos, através de iniciativas artísticas, educacionais e sociais. Seja um parceiro e
                            ajude-nos a levar o melhor do Brasil para o mundo.
                        </p>
                    </div>
                    <div className="w-auto lg:w-1/5">
                        <img src={country} alt="" className="scale-100 lg:scale-[2] pt-10"/>
                    </div>
                    </div>
            </section>
        </>
    )
}