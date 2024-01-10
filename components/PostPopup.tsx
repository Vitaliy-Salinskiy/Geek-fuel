"use client"

import { IComment, IPost } from "@/interfaces";
import Image from "next/image";
import { useState } from "react";

interface PostPopupProps {
	post: IPost,
	user: any,
	showPost: boolean,
	loading: boolean,
	setShowPost: React.Dispatch<React.SetStateAction<boolean>>,
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const PostPopup = ({ post, showPost, setShowPost, user, setIsLoading, loading }: PostPopupProps) => {
	const [comment, setComment] = useState<string>("");

	const closePopup = () => {
		setShowPost(false);
	}

	const addComment = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (comment === "") {
			alert("Please add a comment");
			return;
		}

		setIsLoading(true);

		const commentBody = {
			createCommentDto: {
				content: comment,
				userId: user.sub,
				postId: post._id
			},
			createMessageDto: {
				senderId: user.sub,
				receiverId: post.author._id,
			}
		};

		setComment("")

		fetch('http://localhost:5000/comments', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentBody)
		})
			.then(res => res.json())
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<div className={`fixed top-0 left-0 right-0 bottom-0 z-[1000] flex justify-center items-center`} style={{ backdropFilter: 'blur(10px)' }} onClick={closePopup}>
			<div className='max-w-full lg:w-1/2 bg-white text-main-black p-4 rounded-xl' onClick={(e) => e.stopPropagation()}>
				<p className='text-[18px] font-bold text-main-black font-din'>{post.title.toUpperCase()}</p>
				<div className="relative w-full h-[250px]">
					<Image src={`http://localhost:5000/${post.image}`} alt="" fill />
				</div>
				<p className='text-[14px] text-main-black font-graphik-regular xl:text-[16px]'>{post.content}</p>
				<p className='text-[16px] text-main-black font-graphik-regular xl:text-[16px]'>author: <span className='text-[18px] font-bold text-main-black font-din'> {post.author.username}</span></p>
				<hr className='bg-main-black my-3' />
				<form className='flex flex-col'>
					<label>Add your comment</label>
					<textarea
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						name='comment'
						className='w-full h-10 border border-main-black rounded-md text-[18px] font-din px-4 py-2 min-w-full min-h-[100px] max-h-[250px]' />
					<button disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={(e) => addComment(e)}>
						{loading ? "Loading..." : "ADD COMMENT"}
					</button>
				</form>
				<hr className='bg-main-black my-3' />
				<div className='flex flex-col gap-3 max-h-[200px] overflow-y-scroll pr-2' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
					<h3 className='text-[18px] font-din'>Comments</h3>
					{post.comments.map((comment: IComment, index: number) => (
						<>
							{comment.approved &&
								<div key={index} className='flex items-center gap-[10px] bg-main-red rounded-md px-2 py-3 relative' >
									<p className='text-[14px] text-main-black font-graphik-regular xl:text-[16px] max-w-[90%]'>{comment.content}</p>
									<p className='text-[14px] text-main-black font-graphik-regular xl:text-[16px] absolute bottom-1 right-1'>{comment.author.username}</p>
								</div>
							}
						</>
					))}
				</div>
			</div>
		</div>
	)

}