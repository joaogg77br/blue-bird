
export default function Conteudos({title,text,img}){
    return(
        <>
            <div className="flex items-center text-center flex-col lg:w-80 gap-2">
                <img src={img} alt="imagems" className="h-16" />
                <h1 className="skita text-3xl font-[500]">{title}</h1>
                <p className="text-[19px]">{text}</p>
            </div>
        </>
    )
}