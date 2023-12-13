"use client"

import React from 'react'

interface ButtonProps {
	children: React.ReactNode;
	styles?: string;
}

const Button = ({ children, styles }: ButtonProps) => {
	return (
		<button className={`'font-din font-bold text-lg leading-[91%] uppercase xl:text-[22px] py-4 xl:py-5 ${styles}`}>{children}</button>
	)
}

export default Button