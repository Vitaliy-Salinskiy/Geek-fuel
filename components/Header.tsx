"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Inbox } from './Inbox';

import { IHeaderLinks } from '@/interfaces';
import { headerLinks } from '@/constants';

interface HeaderItemsProps {
	link: IHeaderLinks;
	activatedLink: string;
	setActivated: React.Dispatch<React.SetStateAction<string>>
}

export const HeaderItems = ({ link, setActivated, activatedLink }: HeaderItemsProps) => {

	const linkToggle = () => {
		if (activatedLink === link.lable) {
			setActivated("")
		} else if (link.subLables) {
			setActivated(link.lable)
		} else {
			setActivated("")
		}
	}

	return (
		<li
			className={`w-full px-[20px] py-[30px] w-full min-w-[335px] h-[75px] relative justify-between items-center transition-colors duration-[400ms] cursor-pointer hover:bg-bg-white
			${activatedLink === link.lable ? `bg-bg-white` : ""} 
			${activatedLink && activatedLink !== link.lable ? "hidden" : "flex"}
			`}
			onClick={linkToggle}
		>
			<p className="group font-graphik-medium font-semibold text-[14px]  text-main-black uppercase flexCenter gap-3 transition-all duration-300">
				{activatedLink === link.lable && (
					<Image
						className={`rotate-180`}
						alt="arrow menu"
						width={11}
						height={11}
						src="/assets/images/header/arrow.svg"
					/>
				)}
				{link.lable}
			</p>
			{link.subLables && (
				<Image
					src="/assets/images/header/arrow.svg"
					alt="extra menu"
					width={10}
					height={10}
					className={`transition-transform duration-500 ease-in-out ${activatedLink === link.lable ? `translate-x-10` : ""}`}
				/>
			)}
		</li>
	)
}

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
	const [activatedLink, setActivatedLink] = useState<string>("");
	const [isInboxActive, setIsInboxActive] = useState<boolean>(false);

	useEffect(() => {
		if (isInboxActive) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isInboxActive])

	useEffect(() => {
		setActivatedLink("")
	}, [isBurgerActive])

	return (
		<header className='font-graphik-medium border-b border-border-gray'>
			{isInboxActive && <Inbox setIsActive={setIsInboxActive} />}
			<div className='lg:max-w-[1568px] mx-auto px-5 md:px-4 header-2xl:px-0'>
				<div className='h-[74px] xl:h-[99px] py-5 flexBetween'>

					<div className='flex gap-5 xl:hidden'>
						<div
							className="h-5 w-5 cursor-pointer flexCenter"
							onClick={() => setIsBurgerActive(prevState => !prevState)}
						>
							<div className={`${isBurgerActive ? "burger activated" : "burger"}`} />
						</div>
						<Image
							className="cursor-pointer"
							src="/assets/images/header/search.svg"
							width={17}
							height={17}
							alt='search'
						/>
					</div>

					<nav className={`z-10 bg-white absolute top-[75px] xl:top-[100px] left-0 right-0 w-full h-[calc(100%-75px)] xl:h-[calc(100%-100px)] flex justify-between flex-col items-start transition-transform duration-[450ms] ${isBurgerActive ? "translate-x-0" : "translate-x-full"} xl:hidden`}>
						<ul className='w-full'>
							{headerLinks.map((link, index) => (
								<div className='w-full' key={`${link.lable}-mobile-${index}`}>
									<HeaderItems
										link={link}
										setActivated={setActivatedLink}
										activatedLink={activatedLink}
									/>
									{activatedLink && activatedLink === link.lable && (
										<div className="mt-[30px] flex flex-col gap-10">
											{link.subLables && link.subLables.map((item, index) => (
												<Link href="" key={`${item}-${index}`} className="font-graphik-regular w-full px-5 text-[14px] text-text-gray capitalize cursor-pointer transition-transform duration-300 ease-in-out">
													{item}
												</Link>
											))}
										</div>
									)}
								</div>
							))}
						</ul>

						<Link href="/auth">
							<button
								disabled={activatedLink ? true : false}
								className={`py-[30px] w-full items-center justify-center border-t border-t-border-gray cursor-pointer font-bold ${activatedLink ? "hidden" : "flex"}`}
							>
								LOGIN
							</button>
						</Link>
					</nav>

					{/* desktop nav */}

					<nav className="hidden gap-[50px] xl:flex">
						{headerLinks.map((link, index) => (
							<Link
								href="/"
								className="group font-graphik-medium font-semibold text-[14px] text-main-black uppercase flex items-center justify-center gap-3 transition-all duration-300"
								key={`${link}-desk-${index}`}
							>
								{link.lable}
								{link.subLables && (
									<Image
										src="/assets/images/header/plus-sign.svg"
										width={10}
										height={10}
										alt='more'
										className='group-hover:rotate-[135deg] duration-300'
									/>
								)}
							</Link>
						))}
					</nav>

					{/* desktop nav */}

					<div className='relative w-[150px] h-[35px] 2xl:w-[260px] 2xl:h-[60px]'>
						<Image
							className="cursor-pointer absolute"
							src="/assets/images/header/logo.svg"
							alt='search'
							priority
							fill
						/>

					</div>

					<div className='flex gap-5 xl:hidden'>
						<Image
							className="cursor-pointer"
							onClick={() => {
								setIsBurgerActive(false)
								setIsInboxActive(prevState => !prevState)
							}}
							src="/assets/images/header/heart.svg"
							width={17}
							height={17}
							alt='search'
						/>
						<Image
							className="cursor-pointer"
							src="/assets/images/header/shopping-bag.svg"
							width={17}
							height={17}
							alt='search'
						/>
					</div>

					{/* desktop tools */}

					<div className="hidden gap-[50px] xl:flex">
						<Link href="/auth">
							<button className="uppercase text-[14px] text-main-black font-semibold">LOGIN</button>
						</Link>
						<Image src="/assets/images/header/search.svg" width={22} height={22} alt="search" className="cursor-pointer" />
						<Image src="/assets/images/header/heart.svg" width={22} height={22} alt="heart" className="cursor-pointer" onClick={() => { setIsInboxActive(prevState => !prevState) }} />
						<Image src="/assets/images/header/shopping-bag.svg" width={22} height={22} alt="cart" className="cursor-pointer" />
					</div>

					{/* desktop tools */}

				</div>
			</div>
		</header>
	)
}

export default Header