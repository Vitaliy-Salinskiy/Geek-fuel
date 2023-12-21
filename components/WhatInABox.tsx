import { boxList, boxGalleryCols } from '@/constants';
import Image from 'next/image';

const WhatInABox:React.FC = ():JSX.Element => {
  return (
    <div className='mt-[100px] h-[796px] w-full px-[20px] flex items-center justify-center lg:h-[476px] xl:h-[573px] xl:px-0'>
        <div className="max-w-[1220px] w-full h-full flex items-center justify-center whatInABox-image sm:w-[600px] lg:w-full">
            <div className="h-full flex flex-col justify-between items-center py-[60px] lg:flex-row lg:py-[70px] lg:px-[50px] lg:justify-between lg:w-full xl:py-[100px] xl:px-[74px]">
                <div className="h-[375px] w-[275px] flex flex-col items-center justify-between sm:w-[500px] sm:justify-start sm:gap-[20px] lg:w-[451px] lg:items-start lg:justify-center xl:w-[481px]">
                    <h2 className='font-din text-[32px] text-main-black sm:text-[40px]'>WHAT’S IN A BOX?</h2>
                    <ul className='h-312px w-full flex flex-col justify-between items-start gap-[12px] lg:gap-[20px]'>
                        {boxList.map((item, index) => <ListItem key={index} {...item} />)}
                    </ul>
                </div>
                <div className="w-full lg:w-[400px] xl:w-[487px]">
                    <div className="h-[251px] w-full flex flex-wrap items-center justify-center gap-[13px] sm:h-auto">
                        {boxGalleryCols.map((col, index) => <Col key={index} {...col} />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function ListItem({ img, text }: any) {
    return (
        <li className='flex items-start justify-between gap-[12px]'>
            <Image src={img} alt=''/>
            <p className='font-graphik-regular text-main-black text-[14px] lg:text-[18px]'>{text}</p>
        </li>
    );
}

function Col({ firstImage, secondImage }: any) {
    return (
        <div className="flex flex-col gap-[13px]">
            <Image className='w-[102px] sm:w-[150px] lg:w-[120px] xl:w-[149px]' src={firstImage} alt=''/>
            <Image className='w-[102px] sm:w-[150px] lg:w-[120px] xl:w-[149px]' src={secondImage} alt=''/>
        </div>
    )
}

export default WhatInABox;