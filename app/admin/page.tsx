'use client'

import React, { useState } from 'react'
import axios from 'axios';

const adminPage:React.FC = ():JSX.Element => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF3ZXJ0eSIsInN1YiI6IjY1Nzc2YzVlMzQxMzQ4OTkxZTU0Y2QwMiIsInJvbGVzIjpbeyJfaWQiOiI2NTc3NmJkYWQ2ZjU2NDQ1MGZjMGZlNzEiLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IlVzZXIiLCJfX3YiOjB9LHsiX2lkIjoiNjU3NzZiZDFkNmY1NjQ0NTBmYzBmZTZmIiwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4iLCJfX3YiOjB9XSwiaWF0IjoxNzAyNTk4NDIxLCJleHAiOjE3MDMyMDMyMjF9.GntZZZb2l6EBHJGhY8DC1gzJFtLfNjYdk-EMLznVJBU"

    const createPost = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', file);
        formData.append('userId', '65776c5e341348991e54cd02');
    
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
    
    return (
      <div className='h-screen w-full flex items-center justify-center'>
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
                  <button className='bg-main-red rounded-md md:w-full p-[4px] text-white font-graphik-regular md:rounded-none'>Goods</button>
                  <button className='bg-main-red rounded-md md:w-full p-[4px] text-white font-graphik-regular md:rounded-none'>Posts</button>
              </div>
              <div className="h-full w-full flex justify-center items-center bg-border-gray">
                  <div className="h-[400px] w-[350px] flex justify-center items-center p-2 bg-main-red md:w-[320px] md:h-[350px]">
                      <form className='h-full w-full flex flex-col justify-around items-center ' onSubmit={(e) => {
                        e.preventDefault();
                        createPost();
                      }}>
                          <input className='w-full h-[40px] p-2 outline-none bg-bg-white' type="text" placeholder='post name' onChange={(e) => {
                                setTitle(e.target.value);
                        }} />
                          <textarea className='w-full h-[200px] p-2 outline-none bg-bg-white' placeholder='post text' onChange={(e) => {setContent(e.target.value)}}></textarea>
                          <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xl border-none rounded-none h-[30px]" onChange={(e: any) => {setFile(e.target.files[0])}} />
                                                    
                          <button className='bg-bg-white w-full h-[40px]' type='submit'>create post</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default adminPage;