import Image from 'next/image'
import tick from '../public/assets/images/hereIsWhat/tick.svg'

const HereIsWhat:React.FC = ():JSX.Element => {
  return (
    <div className='w-full h-[390px] flex justify-center mt-[70px] lg:mt-[100px] lg:h-[294px]'>
        <div className='max-w-[1220px] w-full h-full px-5 flex flex-col justify-between items-center lg:flex-row lg:items-start xl:w-[1220px]'>
            <h2 className='font-din text-[25px] font-semibold sm:w-[420px] sm:text-center lg:text-[36px] lg:text-left xl:text-[43px] xl:w-[417px]'>HERE’S WHAT YOU’LL GET IN OUR <span className='color text-main-red'>LIMITED TIME OFFER</span></h2>
            <ul className='h-[294px] w-full flex flex-col items-start justify-between sm:w-[595px] lg:w-[500px] xl:w-[594px]'>
                <li className='HereIsWhat__list-item'>
                    <Image className='h-[24px] w-[24px]' src={tick} alt='tick-image'/>
                    <p className='HereIsWhat__list-item__text'>Mauris vestibulum nulla vitae massa lacinia pretium. Aliquam sodales venenatis nunc, et lacinia nunc. </p>
                </li>
                <li className='HereIsWhat__list-item'>
                    <Image className='h-[24px] w-[24px]' src={tick} alt='tick-image'/>
                    <p className='HereIsWhat__list-item__text'>Mauris vestibulum nulla vitae massa lacinia pretium. Aliquam sodales venenatis nunc, et lacinia nunc. </p>
                </li>
                <li className='HereIsWhat__list-item'>
                    <Image className='h-[24px] w-[24px]' src={tick} alt='tick-image'/>
                    <p className='HereIsWhat__list-item__text'>Mauris vestibulum nulla vitae massa lacinia pretium. Aliquam sodales venenatis nunc, et lacinia nunc. </p>
                </li>
                <li className='HereIsWhat__list-item'>
                    <Image className='h-[24px] w-[24px]' src={tick} alt='tick-image'/>
                    <p className='HereIsWhat__list-item__text'>Mauris vestibulum nulla vitae massa lacinia pretium. Aliquam sodales venenatis nunc, et lacinia nunc. </p>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default HereIsWhat;