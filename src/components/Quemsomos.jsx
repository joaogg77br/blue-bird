import ButtonDes from "./buttonDes"


//Mudar a font Instrumet sans e 

export default function QuemSomos(){
    return(
        <>
            <section className=" px-5
            text-black  py-10
            lg:px-40 text-[19px]
            xl:px-72 lg:py-20 ">
                <ButtonDes text="Quem somos"/>
                <br />
                <h1 className="skita text-4xl font-bold
                lg:text-6xl "> Bluebird Business</h1> 
                <br />
                <p> <span className="p-2"></span>Somos uma empresa de Marketing Cultural que utiliza a arte como plataforma  para conectar grandes marcas a projetos que transformam a sociedade</p>
                <br />
                <p> <span className="p-2"></span>Através de um planejamento estratégico e a gestão de projetos patrocinados com incentivos fiscais, contribuímos para a construção de marcas autênticas e engajadas com a cultura brasileira</p>
                <br />
                <p> <span className="p-2"></span>Com uma vasta rede de contatos no Brasil e nos Estados Unidos, oferecemos soluções completas  para empresas que buscam construir conexões profundas com o seu público, além de deixar um legado positivo e duradouro.</p>
                <br />
                <p> <span className="p-2"></span>Em 2023, iniciamos nossa jornada com o propósito de contribuir para transformar a sociedade através da arte com projetos culturais que inspiram, engajam e constroem um futuro mais justo e sustentável.</p>
                <p>Nosso portfólio inclui projetos nas áreas de música, artes visuais, teatro, cinema, moda, multimídia e muito mais.</p>
            </section>
        </>
    )
}