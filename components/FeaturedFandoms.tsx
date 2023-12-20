import Image from 'next/image';
import logo_1 from '../public/assets/images/FeaturedFandoms/logo1.svg'
import logo_2 from '../public/assets/images/FeaturedFandoms/logo2.svg'
import logo_3 from '../public/assets/images/FeaturedFandoms/logo3.svg'
import logo_4 from '../public/assets/images/FeaturedFandoms/logo4.svg'
import logo_5 from '../public/assets/images/FeaturedFandoms/logo5.svg'
import logo_6 from '../public/assets/images/FeaturedFandoms/logo6.svg'
import logo_7 from '../public/assets/images/FeaturedFandoms/logo7.svg'
import logo_8 from '../public/assets/images/FeaturedFandoms/logo8.svg'

const FeaturedFandoms:React.FC = ():JSX.Element => {
  return (
    <div className='min-h-[333px] w-full flex items-center justify-center'>
        <div className='h-full w-full max-w-[1220px] py-[100px] flex flex-col justify-center items-center gap-[50px]'>
            <h2 className='font-din text-[20px]'>FEATURED FANDOMS</h2>
            <div className="w-full flex flex-wrap justify-center items-center gap-[70px]">
                <Image src={logo_1} alt='' />
                <Image src={logo_2} alt='' />
                <Image src={logo_3} alt='' />
                <Image src={logo_4} alt='' />
                <Image src={logo_5} alt='' />
                <Image src={logo_6} alt='' />
                <Image src={logo_7} alt='' />
                <Image src={logo_8} alt='' />
            </div>
        </div>
    </div>
  )
}

export default FeaturedFandoms;