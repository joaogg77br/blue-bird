
import ButtonDes from "./buttonDes"

export default function SimpleContactForm() {
    return (
        <div className="min-h-screen flex items-center justify-center  lg:w-full">
            <div className="bg-cinzaBg backdrop-blur-sm rounded-lg shadow-lg
            lg:w-2/3
            ">
                <div className="p-6">
                    <div className="text-center mb-6">
                        <div className="flex justify-center p-5">
                            <ButtonDes text="Contato" />
                        </div>
                        <h1 className="skita text-4xl font-semibold">
                            Fale como podemos apoiá-lo
                        </h1>
                    </div>
                    <form className="space-y-4">
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
                                className="bg-black text-white px-4 py-2 rounded hover:bg-black/90"
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

