import React from 'react'
import Image from 'next/image';
import img_1 from '../public/assets/images/EveryDayFirst/img1.svg'
import img_2 from '../public/assets/images/EveryDayFirst/img2.svg'
import img_3 from '../public/assets/images/EveryDayFirst/img3.svg'
import img_4 from '../public/assets/images/EveryDayFirst/img4.svg'
import img_5 from '../public/assets/images/EveryDayFirst/img5.svg'
import img_6 from '../public/assets/images/EveryDayFirst/img6.svg'
import img_7 from '../public/assets/images/EveryDayFirst/img7.svg'
import img_8 from '../public/assets/images/EveryDayFirst/img8.svg'
import img_9 from '../public/assets/images/EveryDayFirst/img9.svg'
import delive_img from '../public/assets/images/EveryDayFirst/icons/delive.svg'
import medal_img from '../public/assets/images/EveryDayFirst/icons/medal.svg'
import package_img from '../public/assets/images/EveryDayFirst/icons/package.svg'
import tshirt_img from '../public/assets/images/EveryDayFirst/icons/tshirt.svg'

const EveryDayFirst:React.FC = ():JSX.Element => {
  return (
    <div className='w-full h-[1192px] flex items-center justify-center bg-white py-[70px] sm:h-auto'>
        <div className="h-full w-[360px] max-w-[1220px] px-[20px] flex flex-col justify-between items-center sm:w-[600px] lg:w-full">
            
            {/* md and low */}
            <div className="w-full flex flex-col items-start gap-[20px] lg:hidden">
                <h3 className='text-[18px] font-din text-main-red'>GOOD FOR</h3>
                <h2 className='text-[36px] font-din text-main-black'>EVERY DAY</h2>
            </div>
            <p className='font-graphik-regular text-[14px] text-main-black opacity-60 mt-[40px] lg:hidden'>Mauris vestibulum nulla vitae massa lacinia pretium. Aliquam sodales venenatis nunc, et lacinia nunc. </p>
            <div className="h-[347px] w-[335px] flex items-end gap-[13px] sm:scale-150 sm:my-[120px] lg:hidden">
                <div className="flex flex-col gap-[13px]">
                    <Image src={img_1} alt="img" />
                    <Image src={img_2} alt="img" />
                    <Image src={img_3} alt="img" />
                </div>
                <div className="flex gap-[13px] items-end">
                    <div className="flex flex-col gap-[13px]">
                        <Image src={img_4} alt="img" />
                        <Image src={img_5} alt="img" />
                    </div>
                    <div className="flex flex-col gap-[13px]">
                        <Image src={img_6} alt="img" />
                        <Image src={img_7} alt="img" />
                        <Image src={img_8} alt="img" />
                    </div>
                </div>
            </div>
            <div className="h-[481px] w-[336px] everyDayFirst-bg sm:scale-150 sm:my-[120px] lg:hidden">
                <ul className='w-full h-full py-[40px] px-[30px] flex flex-col justify-between items-center'>
                    <li className='everyDayFirst-listItem'>
                        <Image src={delive_img} alt='icon here' />
                        <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                    </li>
                    <li className='everyDayFirst-listItem'>
                        <Image src={medal_img} alt='icon here' />
                        <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                    </li>
                    <li className='everyDayFirst-listItem'>
                        <Image src={package_img} alt='icon here' />
                        <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                    </li>
                    <li className='everyDayFirst-listItem'>
                        <Image src={tshirt_img} alt='icon here' />
                        <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                    </li>
                </ul>
            </div>

            {/* lg and more */}
            <div className="hidden lg:flex w-full flex-col justify-between items-center gap-[70px] py-[30px]">
                <div className="h-[511px] w-full flex justify-center items-end gap-[25px]">
                    {/* top */}
                    <div className="h-full flex flex-col justify-between">
                        <div className="w-[387px] flex flex-col items-start gap-[20px]">
                            <h3 className='text-[20px] font-din text-main-red'>GOOD FOR</h3>
                            <h2 className='text-[40px] font-din text-main-black xl:text-[60px]'>EVERY DAY</h2>
                            <p className='font-graphik-regular text-[18px] text-main-black opacity-60 mt-[40px] xl:mt-[20px]'>Mauris vestibulum nulla vitae massa lacinia pretium. Aliquam sodales venenatis nunc, et lacinia nunc. </p>
                        </div>
                        <div className="flex gap-[25px] items-center justify-end">
                            <Image src={img_1} className='images lg:h-[100px] lg:w-[100px] xl:h-[150px] xl:w-[110px]' alt="img here" />
                            <Image src={img_4} className='images lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]' alt="img here" />
                        </div>
                    </div>
                    <div className="h-[511px] flex justify-between items-center gap-[25px]">
                        <div className='flex flex-col gap-[25px] h-full justify-end'>
                            <Image src={img_8} className='images lg:h-[100px] lg:w-[100px] xl:w-[149px] xl:h-[149px]' alt="img here" />
                            <Image src={img_6} className='images lg:h-[100px] lg:w-[100px] xl:w-[149px] xl:h-[149px]' alt="img here" />
                        </div>
                        <div className='flex flex-col gap-[25px] h-full justify-end mb-[175px]'>
                            <Image src={img_2} className='images lg:h-[100px] lg:w-[100px] xl:w-[149px] xl:h-[149px]' alt="img here" />
                            <Image src={img_3} className='images lg:h-[100px] lg:w-[100px] xl:w-[149px] xl:h-[149px]' alt="img here" />
                        </div>
                        <div className='flex flex-col gap-[25px] h-full justify-end mb-[200px] xl:mb-[250px]'>
                            <Image src={img_5} className='images lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]' alt="img here" />
                        </div>
                        <div className='flex flex-col gap-[25px] h-full justify-end'>
                            <Image src={img_9} className='images lg:h-[100px] lg:w-[100px] xl:w-[149px] xl:h-[149px]' alt="img here" />
                            <Image src={img_7} className='images lg:h-[100px] lg:w-[100px] xl:w-[149px] xl:h-[149px] mb-[90px]' alt="img here" />
                            <button className='bg-main-red font-din text-white text-[14px] w-[100px] h-[40px] xl:w-[149px] xl:h-[60px] xl:text-[22px]'>SHOP ALL</button>
                        </div> 
                    </div>
                </div>
                <div className="h-[301px] w-full everyDayFirst-bg-lg">
                    <ul className='w-full h-full py-[90px] px-[65px] flex justify-between items-center'>
                        <li className='everyDayFirst-listItem'>
                            <Image src={delive_img} alt='icon here' />
                            <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                        </li>
                        <li className='everyDayFirst-listItem'>
                            <Image src={medal_img} alt='icon here' />
                            <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                        </li>
                        <li className='everyDayFirst-listItem'>
                            <Image src={package_img} alt='icon here' />
                            <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                        </li>
                        <li className='everyDayFirst-listItem'>
                            <Image src={tshirt_img} alt='icon here' />
                            <p className='everyDayFirst-listItem-p'>Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EveryDayFirst;