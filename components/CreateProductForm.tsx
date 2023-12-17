'use client'

import React, { useState } from 'react'
import axios from 'axios';
import Select from 'react-select';

interface IColorOption {
    value: string;
    label: string;
}
  
const CreateProductForm:React.FC = ():JSX.Element => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [image, setImage] = useState("");
    const [colors, setColors] = useState<string[]>([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF3ZXJ0eSIsInN1YiI6IjY1Nzc2YzVlMzQxMzQ4OTkxZTU0Y2QwMiIsInJvbGVzIjpbeyJfaWQiOiI2NTc3NmJkYWQ2ZjU2NDQ1MGZjMGZlNzEiLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IlVzZXIiLCJfX3YiOjB9LHsiX2lkIjoiNjU3NzZiZDFkNmY1NjQ0NTBmYzBmZTZmIiwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4iLCJfX3YiOjB9XSwiaWF0IjoxNzAyNTk4NDIxLCJleHAiOjE3MDMyMDMyMjF9.GntZZZb2l6EBHJGhY8DC1gzJFtLfNjYdk-EMLznVJBU"
    const formData = new FormData();
    
    const colourOptions = [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'white', label: 'White' },
        { value: 'black', label: 'Black' },
    ];
    
    const handleColorChange = (selectedOptions: IColorOption[]):void => {
        setColors(selectedOptions.map((color: any) => color.value));
        formData.append('colors', colors[colors.length-1]);
    };

    const createProduct = ():void => {
        formData.append('title', title);
        formData.append('price', price as any);
        formData.append('colors', JSON.stringify(colors));
        formData.append('image', image);
        formData.append('userId', '65776c5e341348991e54cd02');

        axios.post('http://localhost:5000/products', formData, {
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
      <div className="h-[280px] w-[350px] flex justify-center items-center p-2 bg-main-red md:w-[320px] md:h-[250px]">
          <form className='h-full w-full flex flex-col justify-around items-center ' onSubmit={(e) => {
            e.preventDefault();
            createProduct();
          }}>
              <input className='w-full h-[40px] p-2 outline-none bg-bg-white' type="text" placeholder='product name' onChange={(e) => {
                    setTitle(e.target.value);
              }} />
              <input className='w-full h-[40px] p-2 outline-none bg-bg-white' type="text" placeholder='product price' onChange={(e: any) => {
                    setPrice(e.target.value);
              }} />
              <Select
                name="colors"
                options={colourOptions}
                className="basic-multi-select w-full border-none outline-none active:outline-none active:border-none"
                classNamePrefix="select"
                isMulti
                onChange={handleColorChange as any}
              />
              <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xl border-none rounded-none h-[30px]" onChange={(e: any) => {setImage(e.target.files[0])}} />
                                        
              <button className='bg-bg-white w-full h-[40px]' type='submit'>create product</button>
          </form>
      </div>
    )
}

export default CreateProductForm;