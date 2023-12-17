import Image from 'next/image'

import { IPlanItem } from '@/interfaces'
import Button from './Button'
import { checked, denied } from '@/public/assets/images/plans'

interface PlanItemProps {
	plan: IPlanItem
}

const PlanItem = ({ plan }: PlanItemProps) => {
	return (
		<div className='plan-item'>
			<div className="flex flex-col gap-3">
				<h3 className="text-main-black text-description">{plan.title}</h3>
				<p className="font-graphik-medium text-[28px] text-main-black">
					<span className="text-[23px] text-main-black font-semibold">$</span>
					{plan.price} {" "}
					<span className="text-[14px] text-text-gray">/ month</span>
				</p>
			</div>

			<div className="w-full max-w-full h-[240px] xl:h-[305px] relative flexCenter p-5 mt-[22px] overflow-hidden">
				<Image
					src="assets/images/hero/snow.svg"
					className="w-full absolute right-0 left-0 top-[50px] z-[-1]"
					alt="plan product-bg"
					fill
				/>
				<Image
					src={plan.img}
					alt={plan.description}
					fill
				/>
			</div>

			<p className="font-graphik-medium mt-5 text-sm leading-[21px] gap-2 xl:mt-[30px] text-[16px] leading-[26px]">{plan.description}</p>

			<ul className="flex flex-col gap-2 mt-3">
				{plan.includedIn.map((clause, index) => (
					<li
						key={`${clause.title}-${clause.status}-${index}`}
						className="flex items-center gap-3"
					>
						<div className='relative w-3 h-3 xl:w-[14px] xl:h-[14px] opacity-70'>
							<Image
								src={clause.status === true ? checked : denied}
								fill
								style={{ objectFit: "cover" }}
								alt="status"
							/>
						</div>

						<p className={`font-graphik-regular text-sm leading-[21px] xl:text-[16px] xl:leading-[26px] text-main-black ${clause.status ? "" : " text-text-gray"}`}>{clause.title}</p>
					</li>
				))}
			</ul>

			<Button styles="btn bg-main-red text-white absolute bottom-[-24px] left-[50%] -translate-x-1/2 whitespace-nowrap ">SELECT PLAN</Button>
		</div>
	)
}

export default PlanItem