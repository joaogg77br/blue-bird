import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { useState, useEffect } from "react"
import { parsePhoneNumber } from "awesome-phonenumber"

import ButtonDes from "./buttonDes"
export default function SimpleContactForm() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [nEmpresa, setNEmpresa] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [number, setNumber] = useState(false)
    const [string,setString] = useState("")
    const [verify, setVerify] = useState(true)
    const serviceId = "service_p0gm6hl"
    const templateId = "template_nfauqse"
    const templateParams = {
        from_name: nome,
        email: email,
        empresa: nEmpresa,
        message: mensagem,
        number: string,
    }
    const { t } = useTranslation()
    const publicKey = "z9CQ9sx93i6EfrFrA"

    useEffect(() =>{
        function Mask() {
            let text = string 
            text = (text || "").replace(/\D/g,"")
            text = text.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            setString(text)
            console.log(number)
            const pn = parsePhoneNumber(string,{regionCode:"BR"})
            setNumber(pn.valid)
            console.log(pn)
        }
        Mask()
    },[string])

    function SendEmail() {
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(response => {
                alert("Email enviado")
                console.log("email send")
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (nome.trim().length > 0 && email.trim().length > 0 && nEmpresa.trim().length && mensagem.trim().length > 0  && number) {
            console.log("email valido")
            setVerify(false)
        } else {
            setVerify(true)
            console.log("email não valido")
        }
    }, [nome, email, nEmpresa, mensagem,number])


    return (
        <div className="min-h-screen flex items-center justify-center  lg:w-full pb-[100px]">
            <div className="bg-cinzaBg w-full sm:w-2/3  p-4 backdrop-blur-sm shadow-lg 
            lg:w-2/3
            ">
                <div className="md:p-6">
                    <div className="text-center mb-6">
                        <div className="flex justify-center p-5">
                            <ButtonDes text={t("contact")} />
                        </div>
                        <h1 className="skita text-3xl font-semibold">{t("form_title")}</h1>
                    </div>
                    <div className="space-y-4 ">
                        <div className="relative mb-10">
                            <input
                                type="text"
                                placeholder=""
                                className="peer w-full p-2 border-t-none border-b-2 bg-cinzaBg border-gray-300 outline-none"
                                required
                                value={nome}
                                e onChange={(e) => { setNome(e.target.value) }}
                            />
                            <label className="absolute top-2 left-2 text-gray-500 peer-valid:top-[-20px] peer-focus:top-[-20px] duration-150">{t('form_place')}</label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="peer w-full p-2 border-t-none border-b-2 bg-cinzaBg border-gray-300 outline-none"
                                    required
                                    value={nEmpresa}
                                    onChange={(e) => { setNEmpresa(e.target.value) }}
                                />
                                <label className="absolute top-2 left-2 text-gray-500 peer-valid:top-[-20px] peer-focus:top-[-20px] duration-150">{t("form_placeholder2")}</label>
                            </div>

                            <div className="relative mb-5">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="peer w-full p-2 border-t-none border-b-2 bg-cinzaBg border-gray-300 outline-none"
                                    required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <label className="absolute top-2 left-2 text-gray-500 peer-valid:top-[-20px] peer-focus:top-[-20px] duration-150">{t("form_placeholder3")}</label>
                            </div>
                        </div>

                        <div className="relative ">
                            <input
                                type="text"
                                placeholder=""
                                className="peer w-full p-2 border-t-none border-b-2 bg-cinzaBg border-gray-300 outline-none mb-10"
                                required
                                value={string}
                                max={10}
                                onChange={(e) => { setString(e.target.value) }}
                            />
                            <label className="absolute top-2 left-2 text-gray-500 peer-valid:top-[-20px] peer-focus:top-[-20px] duration-150">{t("form_placeholder6")}</label>
                        </div>

                        <div className="relative mt-10">
                            <textarea
                                className="peer w-full  border border-gray-300 bg-cinzaBg border-b-2  h-10 outline-none border-x-0 border-t-0 p-2"
                                value={mensagem}
                                onChange={(e) => { 
                                    setMensagem(e.target.value) 
                                    }}
                                required
                            ></textarea>
                            <label className="absolute top-[-2px] left-2 text-gray-500 peer-valid:top-[-20px] peer-focus:top-[-20px] duration-150">{t("form_placeholder4")}</label>
                        </div>
                        <div className="flex justify-end">
                            <button
                                disabled={verify}
                                type="submit"
                                className="bg-black disabled:bg-zinc-400 duration-100 text-white px-4 py-2 mb-2 mx-2 rounded hover:bg-black/90"
                                onClick={() => SendEmail()}
                            >{t("form_placeholder5")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

