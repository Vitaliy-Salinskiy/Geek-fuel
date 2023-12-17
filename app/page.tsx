import { Hero } from '@/components'
import HereIsWhat from '@/components/HereIsWhat'
import WhatInABox from '@/components/WhatInABox'
import GetGeek from '@/components/GetGeek'
import EveryDaySecond from '@/components/EveryDaySecond'
import Compliment from '@/components/Compliment'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<>
			<Hero />
			<HereIsWhat />
			<WhatInABox />
			<GetGeek />
			<EveryDaySecond />
			<Compliment />
			<Footer />
		</>
	)
}
