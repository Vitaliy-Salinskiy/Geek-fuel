'use client'

import React, { useState } from 'react'
import axios from 'axios';

const CreatePostForm:React.FC = ():JSX.Element => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF3ZXJ0eSIsInN1YiI6IjY1N2YzMmZmYmU0Nzc2ODMyMGMyN2EzNSIsInJvbGVzIjpbeyJfaWQiOiI2NTdmMzI1Y2JlNDc3NjgzMjBjMjdhMjUiLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IlVzZXIiLCJfX3YiOjB9LHsiX2lkIjoiNjU3ZjMyNjRiZTQ3NzY4MzIwYzI3YTI3IiwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4iLCJfX3YiOjB9XSwiaWF0IjoxNzAyODM1MTk4LCJleHAiOjE3MDM0Mzk5OTh9.ZmukE47SrwwkuOccw2QbTuSYi10i8XzZeToT_P1rC7g"

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

    return (
      <div className="h-[400px] w-[350px] flex justify-center items-center p-2 bg-main-red md:w-[320px] md:h-[350px]">
          <form className='h-full w-full flex flex-col justify-around items-center ' onSubmit={(e) => {
            e.preventDefault();
            createPost();
          }}>
              <input className='w-full h-[40px] p-2 outline-none bg-bg-white' type="text" placeholder='post name' onChange={(e) => {
                    setTitle(e.target.value);
            }} />
              <textarea className='w-full h-[200px] p-2 outline-none bg-bg-white resize-none' placeholder='post text' onChange={(e) => {setContent(e.target.value)}}></textarea>
              <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xl border-none rounded-none h-[30px]" onChange={(e: any) => {setFile(e.target.files[0])}} />
                                        
              <button className='bg-bg-white w-full h-[40px]' type='submit'>create post</button>
          </form>
      </div>
    )
}

export default CreatePostForm;