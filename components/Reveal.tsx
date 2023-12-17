import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Reveal = () => {
	return (
		<section>
			<div className='appContainer'>
				<div className='py-[70px] xl:py-[100px] flex flex-col gap-[50px] md:flex-row mg:gap-[40px] xl:gap-[105px]'>

					<div className='flex flex-col xl:w-[416px]'>
						<h2 className='heading-primary text-main-black lg:max-w-[420px]'>FIRST MONTH REVEAL</h2>
						<div className='flex flex-col gap-[10px] max-w-[335px] xl:max-w-[420px] mt-[30px] xl:mt-10'>
							<p className='text-secondary'>Cras eu dapibus libero. Duis semper luctus pellentesque. Curabitur scelerisque, quam vel vestibulum rhoncus, nisl ligula tincidunt neque, sit amet rhoncus lectus nunc ut urna. Fusce nulla dolor, volutpat eget ultrices a, semper vitae felis.</p>
							<p className='text-secondary'>Cras non sapien justo. Praesent blandit dignissim lacus, sit amet pulvinar enim vestibulum non. Nunc non odio sit amet ipsum sodales porta. Nam tempus nec ex a placerat. Vivamus tincidunt dolor et nisi euismod ullamcorper. Ut mattis volutpat justo convallis aliquet.</p>
						</div>
						<div className='mt-10'>
							<Button styles='bg-main-red text-white px-8 xl:px-[38px] block'>learn more</Button>
						</div>
					</div>

					<div className='relative w-full  md:w-[calc(100%-365px)] md:w-[calc(100%-460px)] h-[267px] md:h-[475px] xl:h-[597px] bg-[#F1F4F9]'>
						<Image
							src="/assets/images/reveal/revael.svg"
							fill
							alt='reveal'
						/>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Reveal