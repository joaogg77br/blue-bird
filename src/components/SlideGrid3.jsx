import React, { useState, useRef, useEffect } from 'react';
import '../css/SlideShow.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SlideGrid3() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const totalSlides = 2; // Número total de slides
    const [opacity, setOpacity] = useState(false)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide(currentSlide + 1)
    //         if (currentSlide > totalSlides) setCurrentSlide(0)
    //     }, 4000)
    //     return () => clearInterval(interval);
    // }, [currentSlide])

    // const handleNextSlide = () => {
    //     setCurrentSlide(currentSlide + 1)
    //     if (currentSlide > totalSlides) setCurrentSlide(0)
    // };

    // const handlePrevSlide = () => {
    //     if (currentSlide == 0) return;
    //     console.log("retornado")
    //     setCurrentSlide(currentSlide - 1)
    // };

    return (
        <div>
            <div className="slideshow-container">
                <div className="slide-wrapper" ref={slideRef}>
                    <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <div className='slide'>
                            <section className="hidden lg:grid mapa2 gap-4 grid-rows-2 grid-cols-2 lg:grid-row-2 lg:h-[400px] lg:grid-cols-5 w-full h-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">19ª Mostra de Cinema de Ouro Preto</div>
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
                                        <div className="uppercase">19ª Mostra de Cinema de Ouro Preto</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                        <div className="slide">
                            <section className="lg:h-[400px] grid mapa3 gap-4 lg:grid-row-2 lg:grid-cols-5 w-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">27ª Mostra de Cinema de Tiradentes</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                        <div className="slide">
                            <section className="lg:h-[400px] grid mapa3 gap-4 lg:grid-row-2 lg:grid-cols-5 w-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">27ª Mostra de Cinema de Tiradentes</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                        <div className="slide">
                            <section className="lg:h-[400px] grid mapa3 gap-4 lg:grid-row-2 lg:grid-cols-5 w-full">
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full row-span-2"></div>
                                <div className="h-full w-full"></div>
                                <div className="flex items-end text-white h-full w-full row-span-2 col-span-2">
                                    <div className="bolsonaro w-full text-[10px]">
                                        <div className="uppercase">27ª Mostra de Cinema de Tiradentes</div>
                                    </div>
                                </div>
                                <div className="h-full w-full"></div>
                                <div className="h-full w-full"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-end gap-3'>
                <button disabled={opacity} className={`opacity-50 p-2 border border-black`}><ChevronLeft /></button>
                <button className='p-2 opacity-50 border border-black' ><ChevronRight /></button>
            </div>
        </div>
    );
}

export default SlideGrid3;