import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import Menu from "../components/Menu"
import GlobeComponent from "./GlobeComponent"
import { useTranslation } from "react-i18next"
import "../css/Animations.css"
import Logo from "../assets/Logo_Bluebird.svg"
import Logo2 from "../assets/Symbol.png"

//Nescesário trocar as fonts desse component
export default function Header() {
  const [menu, setMenu] = useState(false)
  const [chevron, setChevron] = useState(false)
  const [language, setLanguage] = useState("PT")

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const body = document.body

  body.addEventListener("click", (e) => {
    const item = e.target
    let verification = item.classList.contains("chevron")
    if (verification) {
      console.log("safe")
    } else {
      setChevron(false)
    }
  })

  return (
    <>
      <header className="flex items-center justify-between fixed h-20 w-full bg-azulbebe z-40">
        <div className="flex items-center h-20 bg-black w-40 justify-between
        lg:w-1/5">
          {/* logo 1 */}
          <div className="flex items-center justify-center w-full
          xl:hidden">
            <img src={Logo2} alt="logo" className="" />
          </div>
          {/* logo 2 */}
          <div className="hidden  w-full h-20
          xl:flex lg:items-center justify-center text-white
          ">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="w-full ">
          <div className="hidden text-black p-4
            lg:flex lg:justify-between px-8
          ">
            {/* Lista de Links dentro da page */}
            <ul className="flex gap-6 font-semibold  uppercase
              items-center
              lg:text-[12px] lg:gap-4
              xl:text-[16px]
            ">
              <li className="hover:underline underline-offset-2 decoration-2"><a href="#quemsomos">{t("nav1")}</a></li>
              <li className="hover:underline underline-offset-2 decoration-2"><a href="#oqueFazemos">{t("nav2")}</a></li>
              <li className="hover:underline underline-offset-2 decoration-2"><a href="#nossosclients">{t("nav3")}</a></li>
              <li className="hover:underline underline-offset-2 decoration-2"><a href="#artivismo">{t("nav4")}</a></li>
              <li className="hover:underline underline-offset-2 decoration-2"><a href="#ondeatuamos">{t("nav5")}</a></li>
            </ul>
            {/* Tradutor */}
            <div className="flex gap-5">
              {/* Tradutor */}
              <div className="flex gap-2 justify-center items-center relative">
                <GlobeComponent />
                <div className="font-bold">{language}</div>
                <ChevronDown className={`z-0 chevron cursor-pointer ${chevron ? `chevronTurnDown` : `chevronTurnUp`}`}
                  onClick={(e) => {
                    setChevron(!chevron)
                    console.log(chevron)
                  }}
                />
                <div className="bl opacity-[20%] w-full h-20 bolsonaro absolute h-18  chevron z-50"
                  onClick={() => {
                    setChevron(!chevron)
                  }}
                ></div>
              </div>
              <div className={`${chevron ? `block` : `hidden`} bg-black w-20 fixed top-20 `}>
                <ul className="flex flex-col p-3 items-center justify-center text-white">
                  <li className={`cursor-pointer hover:text-azulbebe`} onClick={() => {
                    changeLanguage("pt")
                    setLanguage("PT")
                  }}>PT-BR</li>
                  <li className="cursor-pointer hover:text-azulbebe" onClick={() => {
                    changeLanguage("en")
                    setLanguage("EN")
                  }}>EN-US</li>
                </ul>
              </div>
              <a href="#contato">
                <button className="bg-black py-2 px-6 font-semibold rounded text-[16px] uppercase text-white">{t("contact")}</button>
              </a>
            </div>
          </div>
          <div className="flex  justify-end gap-4 text-black p-4
          lg:hidden
          ">
            <div className="flex items-center justify-center gap-2 z-50">
              {/* Tradutor */}
              <Globe />
              <div className="font-bold">{language}</div>
              <ChevronDown className={`z-0 chevron cursor-pointer ${chevron ? `chevronTurnDown` : `chevronTurnUp`}`}
                onClick={(e) => {
                  setChevron(!chevron)
                  console.log(chevron)
                }}
              />
              <div className="bl opacity-[100%] right-18 w-28 h-50 lg:w-full h-20 bolsonaro absolute h-18  chevron z-50"
                onClick={() => setChevron(!chevron)}
              ></div>
              <div className={`${chevron ? `block` : `hidden`} bg-black w-20 fixed top-20 `}>
                <ul className="flex flex-col p-3 items-center justify-center text-white">
                  <li className={`cursor-pointer hover:text-azulbebe`} onClick={() => {
                    changeLanguage("pt")
                    setLanguage("PT")
                  }}>PT-BR</li>
                  <li className="cursor-pointer hover:text-azulbebe" onClick={() => {
                    changeLanguage("en")
                    setLanguage("EN")
                  }}>EN-US</li>
                </ul>
              </div>
            </div>
            <div className={`fixed top-0  right-0 bg-azulbebe h-screen z-0 w-[20%] ${menu ? `MenuOpen` : `MenuClose`}`} >
              <div className="flex flex-col gap-10 absolute top-32 left-10 text-[16px] font-semibold">
                <div onClick={()=>{setMenu(!menu)}}>
                  <a href="#quemsomos">{t("nav1")}</a>
                </div>
                <div onClick={()=>{setMenu(!menu)}}>
                  <a href="#oqueFazemos">{t("nav2")}</a>
                </div>
                <div onClick={()=>{setMenu(!menu)}}>
                  <a href="#nossosClients">{t("nav3")}</a>
                </div>
                <div onClick={()=>{setMenu(!menu)}}>
                  <a href="#artivismo">{t("nav4")}</a>
                </div>
                <div onClick={()=>{setMenu(!menu)}}>
                  <a href="#ondeatuamos">{t("nav5")}</a>
                </div>
              </div>
              <a href="#contato" className="absolute bottom-10 left-10" onClick={()=> setMenu(!menu)}>
                <button className="bg-black py-2 px-6 font-semibold rounded text-[16px] uppercase text-white">{t("contact")}</button>
              </a>
            </div>
            <div className="z-10" onClick={() => {
              setMenu(!menu)
              console.log("bolsonaro")
            }}>
              <Menu />
            </div>
          </div>
        </div>
      </header>
      <div className="h-20 w-full"></div>
    </>
  )
}
