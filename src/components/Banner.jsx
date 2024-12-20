import "../css/banner.css"

export default function Banner() {
    return (
        <section className="uppercase flex justify-center items-center lg:h-96">
            <div className="background-imagem w-full h-full flex justify-center items-center
            px-10 py-10
            ">
                <h1 className="skita text-startp-10">
                    <p className="text-azulbebe text-4xl 
                lg:text-6xl">Mais do que marketing,</p>
                    <span className="font-bold text-black text-5xl 
                lg:text-6xl
                ">um legado cultural</span>
                </h1>
            </div>
        </section>
    )
}