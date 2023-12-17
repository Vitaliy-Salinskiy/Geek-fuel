import { planItems } from "@/constants"
import PlanItem from "./PlanItem"

const Plans = () => {
	return (
		<section className="bg-bg-white">
			<div className="appContainer">
				<div className="py-[70px] xl:py-[100px] flex flex-col items-center">

					<div className="flex flex-col gap-5 xl:gap-[30px] text-center">
						<h2 className="heading-primary">Select a plan</h2>
						<p className="max-w-[335px] lg:max-w-none text-[16px] font-graphik-regular leading-[26px] text-main-black">New subscribers receive our {" "} <b>GEEK FUEL BOX</b> {" "} ($122 + value) as their first box!</p>
					</div>

					<div className="w-full flex-wrap flex-col md:flex-row mt-[30px] xl:mt-[84px] gap-[50px] md:gap-[30px] md:gap-y-[50px] flexCenter md:justify-between">
						{planItems.map((plan, index) => (
							<PlanItem plan={plan} key={`${plan.description}-${index}}`} />
						))}
					</div>

					<p className="mt-[65px] xl:mt-[92px] max-w-[335px] md:max-w-none text-center font-graphik-regular">
						Your plan automatically renews. <br />
						<b>You can easily skip, pause, or cancel your subscription at any time.</b>
					</p>

				</div>
			</div>
		</section>
	)
}

export default Plans