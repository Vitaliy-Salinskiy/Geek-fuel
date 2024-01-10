"use client"

import React, { useEffect, useState } from "react"
import { formatDistanceToNow } from 'date-fns';


export const Inbox = ({ setIsActive }: { setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const [messages, setMessages] = useState<any[]>([])
	console.log(messages);

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => { console.log(messages) }, [messages])

	const fetchData = () => {
		console.log("Inbox fetch")
		fetch('http://localhost:5000/auth/profile', { credentials: "include" })
			.then(res => res.json())
			.then(data => {
				const userId = data.sub;
				fetch(`http://localhost:5000/users/${userId}`)
					.then(res => res.json())
					.then(userData => {
						setMessages(userData.messages)
					})
					.catch(e => console.log("Error", e.message))
			});
	}

	const formatDate = (date: string) => {
		const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
		return formattedDate;
	}

	return (
		<div className="fixed w-full lg:w-1/3  right-0 bottom-0 top-0 bg-main-black  overflow-y-scroll flex z-[100]" >
			<div className="flex flex-col gap-3 text-center w-full py-2 px-4">
				<div className="flex justify-between">
					<h3 className="text-[24px] font-din uppercase text-white">Messages</h3>
					<button onClick={() => setIsActive(false)} className="text-[24px] font-din uppercase text-white">Close</button>
				</div>
				{messages && messages.map((message: any) => {
					return (
						<div className="bg-white box rounded-xl shadow-lg">
							<p>{message.title}</p>
							<p>{formatDate(message.date)} ago</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
