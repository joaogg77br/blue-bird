import { Instagram, Linkedin } from "lucide-react"
import Logo from "../assets/Logo.png"


export default function Footer() {

  return (
    <>
      <div className="lg:px-72 flex gap-10 justify-center  bg-cinzaBg py-10 items-center">
        <div className=" bg-black p-5">
          <img src={Logo} alt="" className="w-54" />
        </div>
        <div className="">
          <div className="flex items-center justify-center w-full gap-3" >
            <div className="">
              <h1 className="text-4xl text-end skita lg:mb-5">Contato</h1>
              <p className="text-end">Bluebird Biz</p>
              <p className="text-end">ola@bluebidbr.com</p>
              <p className="text-end">+55 (71) 9 8726-0582</p>
            </div>
            {/* Divisoria */}
            <div className="h-32 mx-5 border border-zinc-400"></div>
            <div>
              <h1 className="text-4xl skita lg:mb-5">Endereço</h1>
              <p>Alameda Tancredo Neves, 2227</p>
              <p>Sala 603 - Caminho das Árvores</p>
              <p>Salvador, Bahia, Brasil - 41.820-021</p>
            </div>
          </div>
          </div>
        </div>
          <div>
      </div>
      <div className="w-full flex  items-center justify-center  pb-10 bg-cinzaBg">
        <p className="p-4 font-bold">
          Quer ter acesso a conteúdos exclusivos, dicas incríveis e fazer parte de<br />
          uma comunidade engajada? Siga nossas redes sociais e não perca nada!
        </p>
        <div className="flex">
          <div className="border-2 p-2 border-r-0 border-black">
            <Linkedin/>
          </div>
        </div>
          <div className="border-2 p-2 border-black">
            <Instagram/>
          </div>
          <div className="border-2 p-2 border-l-0 border-black">
            <Instagram/>
          </div>
      </div>
    </>
  )
}