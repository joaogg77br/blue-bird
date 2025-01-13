
import { t } from "i18next"
import ButtonDes from "./buttonDes"

export default function SimpleContactForm() {
    return (
        <div className="min-h-screen flex items-center p-2 justify-center  lg:w-full pb-[100px]">
            <div className="bg-cinzaBg w-full sm:w-2/3 backdrop-blur-sm rounded-lg shadow-lg 
            lg:w-2/3
            ">
                <div className="md:p-6">
                    <div className="text-center mb-6">
                        <div className="flex justify-center p-5">
                            <ButtonDes text={t("contact")} />
                        </div>
                        <h1 className="skita text-3xl font-semibold">{t("form_title")}</h1>
                    </div>
                    <form className="space-y-4 ">
                        <div>
                            <input
                                type="text"
                                placeholder="Nome completo"
                                className="w-full p-2 border-t-none border-b-2 bg-cinzaBg border-gray-300 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                                type="text"
                                placeholder="Nome da empresa"
                                className="w-full p-2 border-t-none border-b-2 bg-cinzaBg border-gray-300 outline-none"
                            />      <input
                            type="text"
                            placeholder="Endereço de email"
                            className="w-full p-2 border-t-none border-b-2 bg-cinzaBg border-gray-300 outline-none"
                        />
                    
                        </div>
                        <div>
                            <textarea
                                placeholder="Mensagem"
                                className="w-full p-2 border border-gray-300 bg-cinzaBg rounded min-h-[100px]"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 mb-2 mx-2 rounded hover:bg-black/90"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

