"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react';

interface IAuthor {
	_id: string;
	username: string;
	password: string;
	roles: Array<any>;
	posts: Array<any>;
	likedPosts: Array<any>;
	comments: Array<any>;
	messages: Array<any>;
	__v: number;
}

interface IPost {
	_id: string;
	image: string;
	title: string;
	content: string;
	author: IAuthor;
	likedBy: Array<any>;
	comments: Array<any>;
	__v: number;
}

const GetGeek = () => {

	const [posts, setPosts] = useState<IPost[]>([])
	const [user, setUser] = useState<any>()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const fetchData = () => {
		fetch('http://localhost:5000/posts').then(res => res.json()).then(data => { setPosts(data) });
		fetch('http://localhost:5000/auth/profile', { credentials: "include" }).then(res => res.json()).then(data => { setUser(data) });
	}

	useEffect(() => {
		fetchData()
	}, [isLoading])

	const likePost = (post: IPost, userId: string) => {
		setIsLoading(true)
		fetch(`http://localhost:5000/likes/${post._id}/user/${userId}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"senderId": user.sub,
				"receiverId": post.author._id,
			})
		})
			.then(res => res.json())
			.then(data => {
				setIsLoading(false)
			})
			.catch(error => console.log(error))
	}

	const unlikePost = (post: IPost, userId: string) => {
		setIsLoading(true)
		fetch(`http://localhost:5000/likes/${post._id}/user/${user.sub}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => {
				setIsLoading(false)
			})
			.catch(error => console.log(error))
	}

	return (
		<div className=' max-h-[1685px] mt-[80px] bg-[#F8F8F8] flex items-center justify-center'>
			<div className="max-w-[1220px] w-full px-[20px] py-[70px] flex flex-col items-center xl:px-0">
				<h2 className='text-[30px] font-din text-main-black xl:text-[44px]'>GET YOUR GEEK ON!</h2>
				<div className="flex flex-wrap items-center mt-[40px] gap-[40px] justify-center xl:justify-between">
					{posts && posts.map((post: IPost, index: number) => (
						<div key={index} className="w-[335px] flex flex-col gap-[20px] xl:w-[347px]">
							<div className="h-[380px] w-full bg-white p-[20px] flex flex-col justify-between items-center xl:h-[400px] ">
								<div className='w-[305px] h-[305px] relative'>
									<Image src={`http://localhost:5000/${post.image}`} alt="" fill />
								</div>
								<p className='text-[18px] font-bold text-main-black font-din'>{post.title.toUpperCase()}</p>
							</div>
							<p className='text-[14px] text-main-black font-graphik-regular xl:text-[16px]'>{post.content}</p>
							<div className='flex justify-between'>
								<button
									className={`
										${post.likedBy.includes(user.sub) ? "border-red-500 border text-red-500" : "bg-red-500 hover:bg-red-700 active:bg-red-900 text-white"}
										font-bold py-2 px-4 rounded text-center flex items-center justify-center
										`}
									onClick={() => !post.likedBy.includes(user.sub) ? likePost(post, user.sub) : unlikePost(post, user.sub)}
									disabled={isLoading}
								>
									{post.likedBy.length} | {post.likedBy.includes(user.sub) ? "LIKED" : "LIKE"}
								</button>

								<p className='text-[18px] font-bold text-main-black font-din'>author: {post.author.username}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default GetGeek;