
export default function Block({ img, title, text }) {
    return (
        <>
            <div className="flex flex-col py-10 px-8 items-start pr-[50npx] p-4 md:w-96 bg-white">
                <img src={img} alt="" className="mb-5" />
                <p className="text-3xl text-start skita">{title}</p>
                <br />
                <p className="text-justify">{text}</p>
            </div>
        </>
    )

} 