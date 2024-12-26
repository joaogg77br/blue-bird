import ButtonDes from "./buttonDes"
import Manivela from "./Manivela"
import Image1 from "../assets/images/image2.png"
import Image2 from "../assets/images/image1.png"
import Image3 from "../assets/images/image6.png"
import Image4 from "../assets/images/image7.png"
import Image5 from "../assets/images/image8.png"
import Image6 from "../assets/images/image9.png"
import Image7 from "../assets/images/image10.png"
import Image8 from "../assets/images/image11.png"
import Image10 from "../assets/images/image10.png"

import Image11 from "../assets/images2/Frame_91.png"
import Image12 from "../assets/images2/image10.png"
import Image13 from "../assets/images2/image11.png"
import Image14 from "../assets/images2/image12.png"
import Image15 from "../assets/images2/image_6.png"
import Image16 from "../assets/images2/image_7.png"
import Image17 from "../assets/images2/image_8.png"

import Images18 from "../assets/images3/Frame 100.png"
import Images19 from "../assets/images3/Frame 97.png"
import Images20 from "../assets/images3/image 8.png"
import Images21 from "../assets/images3/image(1).png"
import Images22 from "../assets/images3/image.png"
import Images23 from "../assets/images3/image2.png"

export default function OqueFazemos() {
    return (
        <>
            <section className="lg:px-72 py-10 flex flex-col gap-20 p-5">
                <div className="">
                    <div className="py-10">
                        <ButtonDes text="Oque fazemos" />
                    </div>
                    <h1 className="text-5xl py-4 skita">Patrocínios</h1>
                    <p className="font-bold">Projetos Culturais:</p>
                    <p className="py-4">Filmes   •   Espaços Culturais   •   Exposições   •   Mostras de Cinema   •   Espetáculos   •   Intervenções Urbanas</p>
                    <section className="grid gap-4 lg:grid-row-2 lg:grid-cols-5">
                        <img src={Image1} alt="alt1" className="bg-blue-500 w-full  h-full" />
                        <img src={Image3} alt="alt3" className="row-span-2 h-full w-full " />
                        <img src={Image4} alt="alt4" className="w-full h-full" />
                        <img src={Image6} alt="alt5" className="h-full w-full" />
                        <img src={Image10} alt="alt2" className="h-full w-full" />
                        <img src={Image2} alt="alt2" className="h-full w-full" />
                        <img src={Image5} alt="alt2" className="h-full w-full" />
                        <img src={Image8} alt="alt2" className="w-full h-full col-span-2" />
                    </section>
                    <Manivela/>
                </div>
                <div className="">
                    <h1 className="text-5xl py-4 skita">Mídia</h1>
                    <p className="font-bold">Veículos:</p>
                    <p className="py-4">Aeroporto   •   Metrô   •   Rodoviária   •   Ônibus   •   Outdoor   •   Rádio   •   Mobiliário Urbano</p>
                    <section className="grid gap-4 lg:grid-row-2 lg:grid-cols-5 ">
                        <img src={Image11} alt="alt1" className="bg-blue-500 w-full  h-full" />
                        <img src={Image15} alt="alt2" className=" row-span-2 h-full w-full" />
                        <img src={Image12} alt="alt3" className="h-full w-full" />
                        <img src={Image14} alt="alt5" className="h-full w-full row-span-2 col-span-2" />
                        <img src={Image17} alt="alt2" className="w-full h-full" />
                        <img src={Image13} alt="alt4" className="w-full h-full" />
                    </section>
                    <Manivela/>
                </div>
                <div className="">
                    <h1 className="text-5xl py-4 skita">Planejamento</h1>
                    <p className="py-4">
                        <span className="p-2"></span>  Oferecemos um serviço completo em <span className="font-bold">Planejamento de Marketing Cultural</span>, desde o mapeamento inicial de oportunidades até a supervisão final dos projetos. Desenvolvemos estratégias personalizadas, negociamos parcerias estratégicas, gerimos contratos e garantimos a execução impecável de todas as ações, maximizando o impacto de sua marca no cenário cultural.
                    </p>
                    <section className="grid gap-4 lg:grid-row-2 lg:grid-cols-5">
                        <img src={Images20} alt="alt4" className="w-full h-full" />
                        <img src={Images22} alt="alt2" className="h-full w-full row-span-2" />
                        <img src={Images23} alt="alt2" className="w-full h-full" />
                        <img src={Images21} alt="alt5" className="h-full w-full col-span-2  row-span-2" />
                        <img src={Images19} alt="alt3" className=" h-full -full" />
                        <img src={Images18} alt="alt1" className="bg-blue-500 w-full  h-full" />
                    </section>
                    <Manivela/>
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