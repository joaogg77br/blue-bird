import React, { useState, useRef, useEffect } from 'react';
import '../css/SlideShow.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { t } from 'i18next';

function SlideGrid2() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const totalSlides = 2; // Número total de slides
    const [opacity, setOpacity] = useState(false)



    // useEffect(() => {
    //     if (currentSlide === 0) setOpacity(true)
    //     const interval = setInterval(() => {
    //         setCurrentSlide(currentSlide + 1)
    //         if (currentSlide > totalSlides) setCurrentSlide(0)
    //     }, 4000)
    //     return () => clearInterval(interval);
    // }, [currentSlide])

    // const handleNextSlide = () => {
    //     setCurrentSlide(currentSlide + 1)
    //     setOpacity(false)
    //     if (currentSlide > totalSlides) setCurrentSlide(0)
    // };

    // const handlePrevSlide = () => {
    //     if (currentSlide == 0) return;
    //     console.log("retornado")
    //     setCurrentSlide(currentSlid'e - 1)
    // };

    return (
        <div className='w-full'>
            <div className="slideshow-container w-full">
                <div className="slide-wrapper flex justify-center" ref={slideRef}>
                    <div className="slides w-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <div className="slide">
                            <section className="grid grid-cols-2 grid-rows-3 lg:grid-cols-5 gap-3 lg:h-[450px] mapa w-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2 flex items-end text-white">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">{t("slide6")}</div>
                                    </div>
                                </div>
                                <div className="h-full w-full flex items-end text-white">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">{t("slide7")}</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-1 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">{t("slide8")}</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
                <div className='w-full md:w-full flex justify-end gap-3'>
                    <button disabled={opacity} className={`opacity-50 p-2 border border-black`} ><ChevronLeft /></button>
                    <button className='p-2 border border-black opacity-50'><ChevronRight /></button>
                </div>
        </div>
    );
}

export default SlideGrid2;