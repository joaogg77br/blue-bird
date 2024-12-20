
export default function Conteudos({title,text,img}){
    return(
        <>
            <div className="flex items-center text-center flex-col lg:w-80">
                <img src={img} alt="imagems" />
                <h1 className="skita text-4xl">{title}</h1>
                <br />
                <p>{text}</p>
            </div>
        </>
    )
}