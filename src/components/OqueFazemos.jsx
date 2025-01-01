import "../css/grids.css"
import ButtonDes from "./buttonDes"
import Manivela from "./Manivela"

export default function OqueFazemos() {
    return (
        <>
            <section className="lg:px-72 py-10 flex flex-col gap-20 p-5">
                <div className="">
                    <div className="py-10">
                        <ButtonDes text="Oque fazemos" />
                    </div>
                    <h1 className="text-4xl py-4 skita">Projetos culturais patrocinados</h1>
                    <ul className="flex pb-4 gap-22 list-none">
                        <li>•&nbsp; Filmes</li>
                        <li>•&nbsp; Espaços Culturais</li>
                        <li>•&nbsp;Exposições</li>
                        <li>•&nbsp;Mostras de Cinema</li>
                        <li>•&nbsp;Espetáculos</li>
                        <li>•&nbsp;Intervenções Urbanas</li>
                    </ul>
                    <section className="mapa grid gap-4 lg:grid-row-2 lg:grid-cols-5 h-80 items-center">
                        <div className="h-full w-full"></div>
                        <div className="flex items-end h-full w-full row-span-2 text-white">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="">FILME POR UM FIO</div>
                            </div>
                        </div>
                        <div className="h-full w-full flex items-end text-white">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="">DOCUMENTÁRIO OBEM</div>
                            </div>
                        </div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                        <div className="flex text-white items-end h-full w-full col-span-2">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="">ART FOR LOVE</div>
                            </div>
                        </div>
                    </section>
                    <Manivela />
                </div>
                <div className="">
                    <h1 className="text-4xl py-4 skita"> Veiculações em Mídia</h1>
                    <ul className="flex pb-4 gap-4 list-none">
                        <li>•&nbsp; Aeroporto</li>
                        <li>•&nbsp; Metrô</li>
                        <li>•&nbsp; Rodoviária</li>
                        <li>•&nbsp; Ônibus</li>
                        <li>•&nbsp; Outdoor</li>
                        <li>•&nbsp; Rádio</li>
                        <li>•&nbsp; Mobiliário Urbano</li>
                    </ul>
                    <section className="grid mapa3 gap-4 lg:grid-row-2  h-80 lg:grid-cols-5">
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full row-span-2"></div>
                        <div className="h-full w-full"></div>
                        <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="uppercase">27ª Mostra de Cinema de Tiradentes</div>
                            </div>
                        </div>
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full"></div>
                    </section>

                    <Manivela />
                </div>
                <div className="">
                    <h1 className="text-4xl py-4 skita">Planejamento Anual de Marketing Cultural</h1>
                    <p className="pb-4">
                        Oferecemos um serviço completo em <span className="font-bold">Planejamento de Marketing Cultural</span>, desde o mapeamento inicial de oportunidades até a supervisão final dos projetos. Desenvolvemos estratégias personalizadas, negociamos parcerias estratégicas, gerimos contratos e garantimos a execução impecável de todas as ações, maximizando o impacto de sua marca no cenário cultural.
                    </p>
                    <section className="grid mapa2 gap-4 lg:grid-row-2  h-80 lg:grid-cols-5">
                        <div className="h-full w-full"></div>
                        <div className="h-full w-full row-span-2"></div>
                        <div className="h-full w-full"></div>
                        <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                            <div className="bolsonaro w-full text-[10px]">
                                <div className="uppercase">19ª Mostra de Cinema de Ouro Preto</div>
                            </div>
                        </div>
                        <div className="h-full w-full">a</div>
                        <div className="h-full w-full"></div>
                    </section>
                    <Manivela />
                </div>
            </section>
            <div className="flex flex-col w-full py-10 bg-cinzaBg text-center ">
                <p className="font-bold pb-5 text-4xl skita">Remuneração Bluebird Biz</p>
                <div className=" w-full flex flex-col lg:flex-row gap-4 justify-center">
                    <p><span className="bg-azulbebe m-2 p-1 font-bold">10%</span> pago pelo proponente  de cada projeto fechado</p>
                    <p><span className="bg-azulbebe m-2 p-1 font-bold">20%</span> pago pelo veículo </p>
                </div>
            </div>
        </>
    )
}