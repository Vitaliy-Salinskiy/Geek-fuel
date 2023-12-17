'use client'

import React, { useState } from 'react'

const EveryDaySecond:React.FC = ():JSX.Element => {
  const [currentPag, setCurrentPag] = useState(1);
  const arr = [1, 2, 3];

  return (
    <div className='h-[650px] w-full flex items-center justify-center everyDaySecond-image lg:h-[940px] mt-[100px]'>
      <div className="max-w-[1220px] h-full px-[20px] py-[70px] sm:w-full flex justify-center items-center">
        <div className="h-full w-full flex flex-col justify-end items-center sm:w-[620px] lg:w-full lg:justify-between">
          <div className="empty-box"></div>
          <div className="w-[335px] h-[236px] flex flex-col justify-between items-start text-white sm:self-start lg:w-[387px] lg:h-[321px]">
            <h3 className='text-[18px] font-din lg:text-[20px]'>GOOD FOR</h3>
            <h2 className='text-[36px] font-din lg:text-[60px]'>EVERY DAY</h2>
            <p className='text-[16px] font-graphik-regular lg:text-[18px]'>Mauris vestibulum nulla vitae massa lacinia pretium. Aliquam sodales venenatis nunc, et lacinia nunc. </p>
            <button className='w-[122px] h-[49px] bg-main-red text-[18px] font-din font-regular lg:w-[149px] lg:h-[60px] lg:text-[18px]'>SHOP ALL</button>
          </div>
          <div className="w-[56px] h-[8px] flex justify-between items-center self-end lg:self-start lg:w-[70px] lg:h-[10px]">
            {arr.map((item, index) => <PaginationButton key={index} onClick={() => {setCurrentPag(item)}} currentPag={currentPag} page={item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function PaginationButton({ page, currentPag, onClick }: any) {
  return (
    <div
      style={currentPag === page ? { background: '#FFFFFF' } : {}}
      onClick={() => onClick(page)}
      className="h-[8px] w-[8px] border border-white rounded-full cursor-pointer transition-all duration-300 lg:h-[10px] lg:w-[10px]"
    ></div>
  );
}

export default EveryDaySecond;