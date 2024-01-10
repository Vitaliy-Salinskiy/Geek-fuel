'use client'

import React, { useEffect, useState } from 'react'
import CreatePostForm from '@/components/CreatePostForm';
import CreateProductForm from '@/components/CreateProductForm';
import Comments from '@/components/Comments';

interface IRole {
	_id: string;
	value: string;
	description: string;
	__v?: number;
}

const adminPage: React.FC = (): JSX.Element => {
	const [formType, setFormType] = useState('products');	

	useEffect(() => {
		fetch('http://localhost:5000/auth/profile', {
			method: 'GET',
			credentials: 'include',
		})
			.then(response => response.json())
			.then(data => {
				const isAdminUser = data.roles.some((role: IRole) => role.value === 'ADMIN');
				if(!isAdminUser) window.location.href = '/';
				else {}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);

	return (
		<div className='h-screen w-full flex items-center justify-center min-h-[762px] md:min-h-[632px]'>
			<div className="border-main-red border-8 max-w-[1540px] max-h-[792px] w-full h-full flex flex-col justify-between items-center md:flex-row">
				<div className="border-main-red border-b-8 h-[80px] w-full flex items-center justify-around md:flex-col md:w-[300px] md:h-full md:justify-start md:gap-[20px] md:py-[40px] md:border-r-8 md:border-b-0">
					<div className="flex items-center justify-center gap-[10px]">
						<div className="h-[52px] w-[52px] bg-main-red rounded-full flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-[32px] h-[32px]">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
						</div>
						<h2 className='text-main-black text-[18px] font-din'>Admin</h2>
					</div>
					<p className='text-main-black text-[20px] font-bold md:hidden'>|</p>
					<button className='bg-main-red rounded-md md:w-full p-[4px] text-white font-graphik-regular md:rounded-none'
						onClick={() => { setFormType('products') }}
					>Products</button>
					<button className='bg-main-red rounded-md md:w-full p-[4px] text-white font-graphik-regular md:rounded-none'
						onClick={() => { setFormType('posts') }}
					>Posts</button>
					<button className='bg-main-red rounded-md md:w-full p-[4px] text-white font-graphik-regular md:rounded-none'
						onClick={() => { setFormType('comments') }}
					>Comments</button>
				</div>
				<div className="h-full w-full flex justify-center items-center bg-border-gray">
					{formType == 'posts' ? <CreatePostForm /> : null}
					{formType == 'products' ? <CreateProductForm /> : null}
					{formType == 'comments' ? <Comments /> : null}
				</div>
			</div>
		</div>
	)
}

export default adminPage;