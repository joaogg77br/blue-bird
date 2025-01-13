import Block from "./Block"
import Block1 from "../assets/blocks/Frame_43_(1).png"
import Block2 from "../assets/blocks/Frame_37_(1).png"
import Block3 from "../assets/blocks/Frame_38_(1).png"
import Block4 from "../assets/blocks/Frame_39_(1).png"
import { t } from "i18next"
import "../css/background.css"

export default function Diferences() {
    return (
        <div className="pattern w-full bg-cinzaBg mb-10 py-5 pb md:px-2 pb-[150px]">
            <div className="flex flex-col items-center gap-10 justify-center mt-10 lg:gap-10 
                    lg:flex-row">

                <div className="grid grid-cols-1 gap-10">
                    <Block img={Block1} title={t("diferences-title")} text={t("diferences-txt")} />
                    <Block img={Block2} title={t("diferences-title2")} text={t("diferences-txt2")} />
                </div>

                <div className="grid gap-10 lg:pt-20 lg:grid-cols-1">
                    <Block img={Block3} title={t("diferences-title3")} text={t("diferences-txt3")} />
                    <Block img={Block4} title={t("diferences-title4")} text={t("diferences-txt4")} />
                </div>

            </div>
        </div>
    )
}
