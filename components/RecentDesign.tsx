import Image from 'next/image'
import { ColorName, IProduct } from '@/interfaces'
import { useEffect, useState } from 'react'

const RecentDesign = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			const data = await fetch("http://localhost:5000/products", { credentials: "include" })
			const res = await data.json();
			setProducts(res)
		} catch (error) {
			console.log(error)
		}
	}

	const colorMap: Record<ColorName, string> = {
		"red": "#EB5757",
		"yellow": "#F2C94C",
		"black": "#0D0D0D",
		"white": "#FFFFFF",
		"gray": "#BDBDBD",
	};

	return (
		<div className='py-[70px] flex items-center justify-center'>
			<div className="max-w-[1220px] flex flex-col justify-between items-center gap-[40px]">
				<h2 className='font-din text-[24px] xl:text-[48px]'>RECENT T-SHIRTS DESIGNS</h2>
				<div className="flex flex-wrap items-center justify-around gap-[40px] xl:justify-between">
					{products && products.map((product: IProduct, index: number) => {

						let parsedColors: ColorName[] = JSON.parse(product.colors[0]);

						return (
							<div key={index} className="h-[409px] w-[335px] flex flex-col justify-between items-center tshirtContainer-hover gap-[16px] xl:h-auto">
								<div className='transition-all duration-300 relative hover:bg-main-black hover:bg-opacity-5 overflow-hidden'>
									<div className='relative  w-[335px] h-[380px]'>
										<Image src={`http://localhost:5000/${product.image}`} alt='tshirt img here' fill />
									</div>
									<button className='transition-all duration-300 w-[315px] mx-[10px] h-[60px] bg-white font-din text-[22px] absolute bottom-[-50px]'>ADD TO CART</button>
								</div>
								<h3 className='font-din text-main-black text-[16px] xl:text-[18px]'>{product.title.toUpperCase()}</h3>
								<p className='font-graphik-regular text-[14px] text-main-black xl:text-[15px]'>${product.price} USD</p>
								<div className="w-[122px] h-[22px] flex justify-center items-center gap-[8px]">
									{parsedColors.map((color: ColorName, index: number) => (
										<div
											key={index}
											className="chooseColor-el"
											style={{ backgroundColor: colorMap[color] }}
										></div>
									))}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default RecentDesign;