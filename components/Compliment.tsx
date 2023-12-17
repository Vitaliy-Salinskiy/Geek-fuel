'use client'

import React, { useEffect, useState } from 'react'
import { complimentQuotes } from '@/constants';

export default function Compliment() {
    const [currentPag, setCurrentPag] = useState(2);
    const [sliderTranslate, setSliderTranslate] = useState('0%');

    const opacity = {
        opacity: 0.5,
        transform: 'scale(0.85)'
    }

    useEffect(() => {
        if(currentPag === 1) setSliderTranslate('33.45%');
        if(currentPag === 2) setSliderTranslate('0%');
        if(currentPag === 3) setSliderTranslate('-33.45%');
    }, [currentPag]);

    return (
        <div className='w-full h-[526px] flex items-center justify-center mt-[100px] bg-[#F8F8F8]'>
            <div className="max-w-[1220px] h-full py-[100px] flex flex-col justify-between items-center">
                <h2 className='text-main-red text-[20px] font-din'>WE LOVE A GOOD COMPLIMENT</h2>
                <div style={{ transform: `translateX(${sliderTranslate})` }} className="w-[962px] md:w-[1595px] h-[180px] flex transition-all duration-1000 justify-between">
                    {complimentQuotes.map((quote) => (
                        <div className="w-[400px] md:w-[535px] flex flex-col justify-between items-center transition-all duration-1000" style={currentPag !== quote.id ? opacity : {}}>
                            <h3 className='text-[18px] font-graphik-medium text-main-black md:text-[24px] text-center font-bold'>{quote.text}</h3>
                            <p className='text-[16px] font-din text-text-gray md:text-[18px] text-center'>{quote.user}</p>
                        </div>
                    ))}
                </div>
                <div className="w-[70px] h-[10px] flex justify-between items-center ">
                    {complimentQuotes.map((quotePag) => (
                        <div className="h-[10px] w-[10px] rounded-full border border-main-black cursor-pointer"
                            onClick={() => { setCurrentPag(quotePag.id) }}
                            style={currentPag === quotePag.id ? { background: '#0D0D0D' } : {}}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
