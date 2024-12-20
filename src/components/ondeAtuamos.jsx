import ButtonDes from "./buttonDes"
import SimpleContactForm from "./Formulário"
import country from "../assets/Frame 59 (1).png"

export default function OndeAtuamos() {
    return (
        <>
            <section className="px-10 lg:px-72 py-20">
                <ButtonDes text="Onde atuamos" />
                <div className="flex flex-col lg:flex-row">
                    <div>
                        <br />
                        <h1 className="text-5xl skita">
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
                    <div className="">
                        <img src={country} alt="" className="scale-100 lg:scale-[2] pt-10"/>
                    </div>
                    </div>
                    <SimpleContactForm />
            </section>
        </>
    )
}