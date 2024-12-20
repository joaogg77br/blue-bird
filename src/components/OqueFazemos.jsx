import ButtonDes from "./buttonDes"

export default function OqueFazemos() {
    return (
        <>
            <section className="lg:px-72 py-10 flex flex-col gap-20">
                <div className="">
                    <div className="py-10">
                        <ButtonDes text="Oque fazemos" />
                    </div>
                    <h1 className="text-5xl py-4 skita">Patrocínios</h1>
                    <p className="font-bold">Projetos Culturais:</p>
                    <p className="py-4">Filmes   •   Espaços Culturais   •   Exposições   •   Mostras de Cinema   •   Espetáculos   •   Intervenções Urbanas</p>
                    <section className="grid gap-2 lg:grid-row-2 lg:grid-cols-4">
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                    </section>
                </div>
                <div className="">
                    <h1 className="text-5xl py-4 skita">Mídia</h1>
                    <p className="font-bold">Veículos:</p>
                    <p className="py-4">Aeroporto   •   Metrô   •   Rodoviária   •   Ônibus   •   Outdoor   •   Rádio   •   Mobiliário Urbano</p>
                    <section className="grid gap-2 lg:grid-row-2 lg:grid-cols-4">
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                    </section>
                </div>
                <div className="">
                    <h1 className="text-5xl py-4 skita">Planejamento</h1>
                    <p className="py-4">
                       <span className="p-2"></span>  Oferecemos um serviço completo em <span className="font-bold">Planejamento de Marketing Cultural</span>, desde o mapeamento inicial de oportunidades até a supervisão final dos projetos. Desenvolvemos estratégias personalizadas, negociamos parcerias estratégicas, gerimos contratos e garantimos a execução impecável de todas as ações, maximizando o impacto de sua marca no cenário cultural.
                    </p>
                    <section className="grid gap-2 lg:grid-row-2 lg:grid-cols-4">
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                        <div className="bg-blue-600 ">a</div>
                    </section>
                </div>
            </section>
            <div className="flex flex-col w-full py-10 bg-cinzaBg text-center ">
                <p className="font-bold pb-5">Remuneração Bluebird Biz</p>
                <div className=" w-full flex flex-col lg:flex-row gap-4 justify-center">
                    <p><span className="bg-azulbebe m-2">10%</span> pago pelo proponente  de cada projeto fechado</p>
                    <p><span className="bg-azulbebe m-2">20%</span> pago pelo veículo </p>
                </div>
            </div>
        </>
    )
}