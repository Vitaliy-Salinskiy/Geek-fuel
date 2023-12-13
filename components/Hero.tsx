import Button from './Button'
import Image from 'next/image'

const Hero = () => {
	return (
		<section className='bg-main-red'>
			<div className='max-w-[1568px] mx-auto px-5 md:px-4 header-2xl:px-0'>
				<div className='h-[575px] xl:h-[600px] pt-[50px] lg:pt-0 flex flex-col justify-start items-center lg:flex-row lg:justify-between lg:gap-[135px]'>

					<div className='flex flex-col gap-[30px] xl:gap-[50px] flex items-center lg:items-start'>
						<div className='text-center lg:text-left flex flex-col gap-5 lg:gap-[30px] text-white'>
							<h1 className='max-w-[334px] xl:max-w-[460px] font-din text-6xl xl:text-[100px] leading-[91%] font-bold'>GET YOUR GEEK ON!</h1>
							<p className='max-w-[335px] font-graphik-regular text-[16px] leading-6 '>Come on in to score your fan favorite tees, figures, and geeky essentials you won't find anywhere else!</p>
						</div>
						<Button styles='px-9 xl:px-11 text-main-black bg-white'>SHOP ALL</Button>
					</div>

					<div className='relative mt-auto w-full lg:mt-0 lg:h-full flex-1'>
						<Image
							width={100}
							height={100}
							src="/assets/images/hero/shirts.svg"
							alt="hero-background"
							className="absolute top-0 bottom-0 right-0 h-full w-full bg-cover z-[3]"
						/>
						<Image
							width={100}
							height={100}
							src="/assets/images/hero/snow.svg"
							alt="snow"
							className="absolute top-0 bottom-0 right-0 h-full w-full bg-cover z-[2]"
						/>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Hero