import { Header } from '@/components'
import { Hero } from '@/components'
import HereIsWhat from '@/components/HereIsWhat'
import WhatInABox from '@/components/WhatInABox'
import GetGeek from '@/components/GetGeek'
import EveryDaySecond from '@/components/EveryDaySecond'
import Compliment from '@/components/Compliment'
import Footer from '@/components/Footer'
import Plans from '@/components/Plans'
import Reveal from '@/components/Reveal'

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<HereIsWhat />
			<WhatInABox />
			<GetGeek />
			<Plans />
			<Reveal />
			<EveryDaySecond />
			<Compliment />
			<Footer />
		</>
	)
}