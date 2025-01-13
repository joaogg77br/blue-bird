import { Instagram, Linkedin } from "lucide-react"
import Logo from "../assets/Logo_Bluebird.svg"
import { t } from "i18next"


export default function Footer() {

  return (
    <>
      <div className="lg:px-56 flex flex-col lg:flex-row gap-10 justify-between  bg-cinzaBg py-5 lg:py-10 items-center">

        <div className="w-full items-start pl-4 md:items-center">
          <div className=" bg-black p-5 w-80">
            <img src={Logo} alt="" className="w-80" />
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row w-full gap-3" >
            <div className="pl-4">
              <h1 className="text-4xl text-start lg:text-end skita lg:mb-5">{t("contact")}</h1>
              <p className="text-start lg:text-end">Bluebird Biz</p>
              <p className="text-start lg:text-end">ola@bluebidbr.com</p>
              <p className="text-start lg:text-end">+55 (71) 9 8726-0582</p>
            </div>
            {/* Divisoria */}
            <div className="w-1/2 ml-5 lg:w-0 lg:h-32 lg:mx-5 border border-zinc-400"></div>
            <div className="pl-4">
              <h1 className="text-4xl skita lg:mb-5">{t("endereco")}</h1>
              <p>Alameda Tancredo Neves, 2227</p>
              <p>Sala 603 - Caminho das Árvores</p>
              <p>Salvador, Bahia, Brasil - 41.820-021</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className="w-full flex flex-col lg:flex-row  items-start lg:items-center justify-center  pb-10 bg-cinzaBg">
        <p className="p-4 font-bold">{t("access1")}<br />{t("access2")}</p>
        <div className="flex w-full lg:w-0 pl-4 lg:items-center">
          <div className="">
            <div className="border-2 p-2 border-r-0 border-black">
              <a href=" https://www.linkedin.com/company/bluebird-biz/?viewAsMember=true">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="border-2 p-2 border-black">
            <a href="https://www.instagram.com/bluebirdbr.biz?igsh=MWRhMHE2anZ0ZTB2YQ%3D%3D&utm_source=qr">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}