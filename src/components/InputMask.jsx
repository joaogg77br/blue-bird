import { useState, useEffect,useContext } from "react"
import { parsePhoneNumber } from "awesome-phonenumber"
import { NumberPhoneVerify } from "../Context/NumberPhoev";


export default function InputPhoneMask() {
    const [phoneNumber,setPhoneNumber,string,setString] = useContext (NumberPhoneVerify)
    useEffect(() =>{
        function Mask() {
            let text = string 
            text = (text || "").replace(/\D/g,"")
            text = text.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            setString(text)
            console.log(phoneNumber)
            const pn = parsePhoneNumber(string,{regionCode:"BR"})
            setPhoneNumber(pn.valid)
            console.log(pn)
        }
        Mask()
    },[string])
    return (
        <>
            <input className="w-full p-3 rounded-xl" type="text" placeholder="(00)00000-0000" maxLength={13} value={string} onChange={(e) => setString(e.target.value)} />
            { !phoneNumber &&  string != "" ?
                <p className="text-red-400 font-bold"> O número inserido não existe</p>
            :null
            }
        </>
    )
}