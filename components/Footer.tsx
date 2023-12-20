import logo from '../public/assets/images/Footer/geekfuel-logo.svg';
import arrow_right from '../public/assets/images/Footer/arrow-right.svg';
import facebook_img from '../public/assets/images/Footer/facebook.svg';
import instagram_img from '../public/assets/images/Footer/inst.svg';
import linkedin_img from '../public/assets/images/Footer/linkedin.svg';
import twitter_img from '../public/assets/images/Footer/twitt.svg';
import youtube_img from '../public/assets/images/Footer/yout.svg';
import Image from 'next/image';

const Footer:React.FC = ():JSX.Element => {
  return (
    <footer className='min-h-[689px] w-full flex justify-center items-center bg-[#262425] sm:min-h-[589px] xl:h-[422px] xl:min-h-0'>
        <div className="max-w-[1220px] w-full min-h-full px-[20px] pt-[70px] flex flex-col justify-between items-center sm:gap-[20px] xl:px-0">
            <div className="min-h-[519px] w-full flex flex-wrap justify-around items-center text-white sm:min-h-[419px] lg:items-start lg:min-h-[349px] lg:justify-between xl:min-h-[162px]">
                <div className="w-full h-[60px] lg:w-auto">
                    <Image className='h-[40px] ml-[-15px] lg:h-[60px]' src={logo} alt="" />
                </div>
                <ul className='text-[14px] font-graphik-medium flex flex-col gap-[34px] w-[150px] sm:w-[130px] lg:w-[200px]'>
                    <li>BUNDLES</li>
                    <li>EXCLUSIVE TEES</li>
                    <li>MONDO</li>
                    <li>COLLECTIBLES</li>
                </ul>
                <ul className='text-[14px] font-graphik-medium flex flex-col gap-[34px] w-[150px] sm:w-[130px] lg:w-[200px]'>
                    <li>TEE CLUB</li>
                    <li>GHOSTBUSTERS</li>
                    <li>🎁GIFT</li>
                    <li>LOGIN</li>
                </ul>
                <div className="w-[335px] min-h-[168px] mt-[20px] flex flex-col justify-between xl:h-auto">
                    <div>
                        <h3 className='font-graphik-medium text-[16px]'>Sign up for our news & updates</h3>
                        <div className="w-full flex justify-between items-center border-b-2">
                            <input className='w-full h-[50px] bg-transparent outline-none border-none font-graphik-medium text-[16px] pl-1' type="text" placeholder='Enter your email to subscribe' />
                            <Image src={arrow_right} className='cursor-pointer' alt="" />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <Image src={facebook_img} alt="" />
                        <Image src={instagram_img} alt="" />
                        <Image src={linkedin_img} alt="" />
                        <Image src={twitter_img} alt="" />
                        <Image src={youtube_img} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[100px] border-t-2 border-text-gray flex flex-wrap justify-center items-center sm:flex-row sm:justify-between xl:h-[61px]">
                <p className='text-text-gray font-graphik-regular text-[14px] text-center'>© 2021 Geek Fuel, LLC. All Rights Reserved.</p>
                <p className='text-text-gray font-graphik-regular text-[14px] text-center'>Privacy Policy  |  Terms & Conditions</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;