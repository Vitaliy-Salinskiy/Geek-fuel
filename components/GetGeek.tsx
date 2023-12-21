import { geekCardInfo } from '@/constants'
import Image from 'next/image'

const GetGeek:React.FC = ():JSX.Element => {
  return (
    <div className='max-h-[1685px] mt-[80px] bg-[#F8F8F8] flex items-center justify-center'>
        <div className="max-w-[1220px] w-full px-[20px] py-[70px] flex flex-col items-center xl:px-0">
            <h2 className='text-[30px] font-din text-main-black xl:text-[44px]'>GET YOUR GEEK ON!</h2>
            <div className="flex flex-wrap items-center mt-[40px] gap-[40px] justify-center xl:justify-between">
            {geekCardInfo.map((card, index) => (
                <div key={index} className="w-[335px] flex flex-col gap-[20px] xl:w-[347px]">
                  <div className="h-[380px] w-full bg-white p-[20px] flex flex-col justify-between items-center xl:h-[400px]">
                    <Image src={card.img} alt="" />
                    <p className='text-[18px] font-bold text-main-black font-din'>{card.card_text.toUpperCase()}</p>
                  </div>
                  <p className='text-[14px] text-main-black font-graphik-regular xl:text-[16px]'>{card.bottom_text}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default GetGeek;