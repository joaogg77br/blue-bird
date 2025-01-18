import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function SlideGrid1() {
    const { t } = useTranslation()
    const [currentSlide, setCurrentSlide] = useState(0);
    const [opacity, setOpacity] = useState(false)
    const slideRef = useRef(null);
    const totalSlides = 2; // Número total de slides

    useEffect(() => {
        if (currentSlide === 0) setOpacity(true)
        const interval = setInterval(() => {
            handleNextSlide()
            if (currentSlide > totalSlides) setCurrentSlide(0)
        }, 4000)
        return () => clearInterval(interval);
    }, [currentSlide])

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide + 1)
        setOpacity(false)
        if (currentSlide > totalSlides) setCurrentSlide(0)
    };

    const handlePrevSlide = () => {
        if (currentSlide == 0) return;
        console.log("retornado")
        setCurrentSlide(currentSlide - 1)
    };

    return (
        <div>
            <div className="slideshow-container">
                <div className="slide-wrapper" ref={slideRef}>
                    <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <div className='slide'>
                            <section className="hidden lg:grid mapa2 gap-4 grid-rows-2 grid-cols-2 lg:grid-row-2 lg:h-[300px] lg:grid-cols-5 w-full h-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">{t("slide1")}</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                            <section className='mapa2 grid grid-cols-2 w-full gap-3 lg:hidden'>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">{t("slide1")}</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                        <div className="slide">
                            <section className="lg:h-[300px] grid mapa3 gap-4 lg:grid-row-2 lg:grid-cols-5 w-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">{t("slide2")}</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                        <div className="slide">
                            <section className="lg:h-[300px] grid mapa5 gap-4 lg:grid-row-2 lg:grid-cols-5 w-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2 flex items-end text-white">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">{t("slide3")}</div>
                                    </div>
                                </div>
                                <div className="h-full w-full">
                                </div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                        <div className="slide">
                            <section className="lg:h-[300px] grid mapa6 gap-4 lg:grid-row-2 lg:grid-cols-5 w-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px] flex items-end text-white">
                                        <div className="uppercase">{t("slide4")}</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full  flex justify-end gap-3'>
                <button disabled={opacity} className={`${opacity ? `opacity-50` : `opacity-100`} p-2 border border-black`} onClick={handlePrevSlide}><ChevronLeft /></button>
                <button className='p-2 border border-black' onClick={handleNextSlide}><ChevronRight /></button>
            </div>
        </div>
    );
}

export default SlideGrid1;
