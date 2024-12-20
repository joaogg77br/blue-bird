import ButtonDes from "./buttonDes"

export default function Artivismo() {
    return (
        <>
            <section className=" p-10
            lg:px-40
            xl:px-72 lg:py-10">
                {/* Trocar por uma img */}
                <div className="">
                    <div className="flex">
                        <div className="flex items-center justify-center ">
                        </div>
                        <div className="flex flex-col items-start justify-start"> 
                            <ButtonDes text="Artivismo" />
                            <br />
                            <h1 className=" text-5xl
                            lg:text-7xl skita">A mente criativa que transforma a cultura em negócio.</h1>
                        </div>
                    </div>
                    <br />
                    <br />
                    <p><span className="font-bold">Gabriela Neville</span> é o nome por trás da empresa que reúne arte e propósito em soluções de Marketing.</p>
                    <br />
                    <p>Com uma trajetória de mais de 20 anos no mercado publicitário e a consolidação de negócios expressivos em agências do eixo São Paulo - Salvador, a executiva que se sentia limitada na sua rotina profissional, mergulhou fundo na sua essência para, então, encontrar uma nova jornada, que fizesse mais sentido e a conectasse com os valores que sempre acreditou.</p>
                    <br />
                    <p>Foram dois anos de incertezas até que, de fato, encontrasse um novo caminho que faria o seu coração bater mais forte!</p>
                    <br />
                    <p>
                        Amante da arte e do conhecimento, a baiana de 44 anos com formação em Turismo e especialista
                        em novos negócios, sempre ampliou o seu horizonte criativo com viagens, culturas diferentes, música, literatura, cinema, poesia e na troca genuína de experiências com as pessoas. Ela sempre teve urgência de alimentar a sua curiosidade e preencher esse espaço que ela chama de “infinito particular”. A cada nova descoberta, novas possibilidades surgiam alargando os horizontes de intervenção satisfazendo, assim, a sua busca interior, sempre motivo de celebração
                    </p>
                    <br />
                    <h2 className="text-3xl bold skita font-bold">E porque não transformar esta paixão em negócio?</h2>
                    <br />
                    <p>  Foi daí que veio a ideia de fundar a Bluebird Biz e conectar grandes marcas a projetos culturais que pudessem inspirar, emocionar e, principalmente, transformar o “infinito particular” de cada consumidor.  Hoje, com um ano de atuação e grandes marcas no portfólio, a empresária trilha uma trajetória de sucesso, exercendo o seu artivismo com dedicação e empenho e cumprindo a sua missão de fomentar a cultura e utilizar a arte como uma poderosa ferramenta de transformação social.</p>

                </div>
            </section>
        </>
    )
}