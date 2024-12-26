import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Manivela() {
    return (
        <>
            <div className="w-full p-4">
                <div className="flex justify-end gap-4 ">
                    <div className="border rounded-sm border-black">
                        <ChevronLeft />
                    </div>
                          <div className="border rounded-sm border-black">
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </>
    )
}

