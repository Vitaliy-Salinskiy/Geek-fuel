'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CreatePostForm:React.FC = ():JSX.Element => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const [posts, setPosts] = useState([]); 
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF3ZXJ0eSIsInN1YiI6IjY1N2YzMmZmYmU0Nzc2ODMyMGMyN2EzNSIsInJvbGVzIjpbeyJfaWQiOiI2NTdmMzI1Y2JlNDc3NjgzMjBjMjdhMjUiLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IlVzZXIiLCJfX3YiOjB9LHsiX2lkIjoiNjU3ZjMyNjRiZTQ3NzY4MzIwYzI3YTI3IiwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4iLCJfX3YiOjB9XSwiaWF0IjoxNzAyODM1MTk4LCJleHAiOjE3MDM0Mzk5OTh9.ZmukE47SrwwkuOccw2QbTuSYi10i8XzZeToT_P1rC7g"

    const fetchData = ():void => {
        axios.get('http://localhost:5000/posts')
        .then((response) => {
            setPosts(response.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const createPost = ():void => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', file);
        formData.append('userId', '657f32ffbe47768320c27a35');
    
        axios.post('http://localhost:5000/posts', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const removePost = (id: string):void => {
        axios.delete(`http://localhost:5000/posts/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() => {
            fetchData();
        });
    }

    return (
        <div className='h-auto w-full p-[20px] flex flex-col items-center justify-between gap-[10px]'>
            <div className="overflow-y-scroll h-[400px] w-[370px] flex flex-col justify-start items-center gap-[8px] p-2 bg-main-red md:h-[400px] md:w-[calc(100%-150px)]">
                {posts.length === 0 ? (
                <p className='text-[20px] mt-[20px] text-bg-white font-graphik-medium'>No posts here</p>
                    ) : (
                      posts.map((post: any, key) => (
                        <div key={key} className="w-full h-[80px] bg-white flex items-center justify-between p-[20px]">
                            <div className="flex flex-col justify-between items-start">
                                <h2 className='font-din text-[18px]'>{post.author.username}</h2>
                                <p className='font-graphik-medium text-main-black text-[15px]'>{post.title}</p>
                                <h2 className='font-graphik-regular text-[13px] text-main-gray'>- {post.content}</h2>
                            </div>
                            <p className='text-[20px] text-main-black'>|</p>
                            <div className="flex justify-end items-center gap-[10px]">
                                 <button className='p-1 bg-main-red text-white rounded-md cursor-pointer' onClick={() => {
                                    removePost(post._id);
                                 }}>remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div> 
            <div className="h-[200px] w-[370px] flex justify-center items-center p-2 bg-main-red md:h-[200px] md:w-[calc(100%-150px)]">
              <form className='h-full w-full flex flex-col justify-around items-center' onSubmit={(e) => {
                e.preventDefault();
                createPost();
              }}>
                  <input className='w-full h-[40px] p-2 outline-none bg-bg-white' type="text" placeholder='post name' onChange={(e) => {
                        setTitle(e.target.value);
                }} />
                  <textarea className='w-full h-[40px] p-2 outline-none bg-bg-white resize-none' placeholder='post text' onChange={(e) => {setContent(e.target.value)}}></textarea>
                  <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xl border-none rounded-none h-[30px]" onChange={(e: any) => {setFile(e.target.files[0])}} />

                  <button className='bg-bg-white w-full h-[40px]' type='submit'>create post</button>
              </form>
            </div>
        </div>
    )
}

export default CreatePostForm;