import Image from 'next/image'
import tshirt_1 from '../public/assets/images/RecentDesign/tshirt1.png'
import tshirt_2 from '../public/assets/images/RecentDesign/tshirt2.png'
import tshirt_3 from '../public/assets/images/RecentDesign/tshirt3.png'

const RecentDesign:React.FC = ():JSX.Element => {
    const tshirts = [tshirt_1, tshirt_2, tshirt_3];

    return (
      <div className='py-[70px] flex items-center justify-center'>
          <div className="max-w-[1220px] flex flex-col justify-between items-center gap-[40px]">
              <h2 className='font-din text-[24px] xl:text-[48px]'>RECENT T-SHIRTS DESIGNS</h2>
              <div className="flex flex-wrap items-center justify-around gap-[40px] xl:justify-between">
                  {tshirts.map((tshirt, key) => (
                        <div key={key} className="h-[409px] w-[335px] flex flex-col justify-between items-center tshirtContainer-hover gap-[16px] xl:h-auto">
                            <div className='transition-all duration-300 relative hover:bg-main-black hover:bg-opacity-5 overflow-hidden'>
                                <Image src={tshirt} alt='tshirt img here' />
                                <button className='transition-all duration-300 w-[315px] mx-[10px] h-[60px] bg-white font-din text-[22px] absolute bottom-[-50px]'>ADD TO CART</button>
                            </div>
                            <h3 className='font-din text-main-black text-[16px] xl:text-[18px]'>FREE RIVERS WORK BETTER!</h3>
                            <p className='font-graphik-regular text-[14px] text-main-black xl:text-[15px]'>$26.99 USD</p>
                            <div className="w-[122px] h-[22px] flex justify-center items-center gap-[8px]">
                                <div className="chooseColor-el bg-[#0D0D0D]"></div>
                                <div className="chooseColor-el bg-[#BDBDBD]"></div>
                                <div className="chooseColor-el bg-[#EB5757]"></div>
                                <div className="chooseColor-el bg-[#F2C94C]"></div>
                                <div className="chooseColor-el bg-[#FFFFFF] border"></div>
                            </div>
                        </div>
                  ))}
              </div>
          </div>
      </div>
    )
}

export default RecentDesign;