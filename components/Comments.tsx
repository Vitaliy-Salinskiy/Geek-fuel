'use client'

import { useEffect, useState } from 'react'
import axios from 'axios';
  
const Comments:React.FC = ():JSX.Element => {
    const [comments, setComments] = useState([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF3ZXJ0eSIsInN1YiI6IjY1Nzc2YzVlMzQxMzQ4OTkxZTU0Y2QwMiIsInJvbGVzIjpbeyJfaWQiOiI2NTc3NmJkYWQ2ZjU2NDQ1MGZjMGZlNzEiLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IlVzZXIiLCJfX3YiOjB9LHsiX2lkIjoiNjU3NzZiZDFkNmY1NjQ0NTBmYzBmZTZmIiwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4iLCJfX3YiOjB9XSwiaWF0IjoxNzAyNTk4NDIxLCJleHAiOjE3MDMyMDMyMjF9.GntZZZb2l6EBHJGhY8DC1gzJFtLfNjYdk-EMLznVJBU"

    const fetchData = ():void => {
        axios.get('http://localhost:5000/comments')
        .then((response) => {
            setComments(response.data);
        })
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    const approveComment = (id: string):void => {
        axios.put(`http://localhost:5000/comments/${id}`, null, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response.data);
            fetchData();
        })
    };

    const removeComment = (userId: string, postId: string, id: string) => {
        fetch(`http://localhost:5000/comments/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                postId: postId
            })
        })
        .then(() => {
            fetchData();
        })
    };
    

    return (
      <div className="h-[calc(100%-100px)] w-[370px] overflow-y-scroll flex flex-col justify-start items-center gap-[8px] p-2 bg-main-red md:h-[calc(100%-100px)] md:w-[calc(100%-150px)]">
        {comments.length === 0 ? (
            <p className='text-[20px] mt-[20px] text-bg-white font-graphik-medium'>No comments here</p>
          ) : (
            comments.map((comment: any, key) => (
                !comment.approved ? (
                    <div key={key} className="w-full h-[80px] bg-white flex items-center justify-between p-[20px]">
                        <div className="flex flex-col justify-between items-start">
                            <h2 className='font-din'>{comment.author.username}</h2>
                            <h2 className='font-graphik-medium text-[16px]'>- {comment.content}</h2>
                            <p className='text-text-gray text-xs'>{new Date(comment.date).toLocaleString()}</p>
                        </div>
                        <p className='text-[20px] text-main-black'>|</p>
                        <div className="flex justify-end items-center gap-[10px]">
                            <button className='p-1 bg-main-red text-white rounded-md cursor-pointer' onClick={() => approveComment(comment._id)}>approve</button>
                            <button className='p-1 bg-main-red text-white rounded-md cursor-pointer' onClick={() => removeComment(comment.author._id, comment.post, comment._id)}>remove</button>
                        </div>
                    </div>
                ) : null
            ))
        )}
      </div>
    )
}

export default Comments;