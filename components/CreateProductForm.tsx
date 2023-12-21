'use client'

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import { useEffect, useState } from 'react'
import axios from 'axios';

interface IColorOption {
    value: string;
    label: string;
}
  
const CreateProductForm:React.FC = ():JSX.Element => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState<number | string>(0);
    const [image, setImage] = useState("");
    const [colors, setColors] = useState<string[]>([]);
    const [products, setProducts] = useState([]);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF3ZXJ0eSIsInN1YiI6IjY1Nzc2YzVlMzQxMzQ4OTkxZTU0Y2QwMiIsInJvbGVzIjpbeyJfaWQiOiI2NTc3NmJkYWQ2ZjU2NDQ1MGZjMGZlNzEiLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IlVzZXIiLCJfX3YiOjB9LHsiX2lkIjoiNjU3NzZiZDFkNmY1NjQ0NTBmYzBmZTZmIiwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4iLCJfX3YiOjB9XSwiaWF0IjoxNzAyNTk4NDIxLCJleHAiOjE3MDMyMDMyMjF9.GntZZZb2l6EBHJGhY8DC1gzJFtLfNjYdk-EMLznVJBU"
    const formData = new FormData();
    
    const fetchData = () => {
        axios.get('http://localhost:5000/products')
        .then((response) => {
            setProducts(response.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

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
            setTitle('');
            setPrice('');
            setImage('');
            setColors([]);
            fetchData();
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const removeProduct = (id: string):void => {
        axios.delete(`http://localhost:5000/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() => {
            fetchData();
        });
    }
    return (
        <div className="h-auto w-full p-[20px] flex flex-col items-center justify-between gap-[10px]">
            <div className="overflow-y-scroll h-[360px] w-[370px] flex flex-col justify-start items-center gap-[8px] p-2 bg-main-red md:h-[340px] md:w-[calc(100%-150px)]">
                {products.length === 0 ? (
                <p className='text-[20px] mt-[20px] text-bg-white font-graphik-medium'>No products here</p>
                    ) : (
                      products.map((product: any, key) => (
                        <div key={key} className="w-full h-[80px] bg-white flex items-center justify-between p-[20px]">
                            <div className="flex flex-col justify-between items-start">
                                <h2 className='font-din text-[18px]'>{product.title}</h2>
                                <p className='font-graphik-medium text-main-black text-[16px]'>{product.price}$</p>
                            </div>
                            <p className='text-[20px] text-main-black'>|</p>
                            <p className='text-text-gray text-sm w-[100px] break-all text-center'>{product._id}</p>
                            <p className='text-[20px] text-main-black'>|</p>
                            <div className="flex justify-end items-center gap-[10px]">
                                <button className='p-1 bg-main-red text-white rounded-md cursor-pointer' onClick={() => {
                                    removeProduct(product._id);
                                }}>remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="h-[240px] w-[370px] flex justify-center items-center p-2 bg-main-red md:w-[calc(100%-150px)]">
              <form className='h-full w-full flex flex-col justify-around items-center ' onSubmit={(e) => {
                e.preventDefault();
                createProduct();
              }}>
                  <input className='w-full h-[40px] p-2 outline-none bg-bg-white' type="text" placeholder='product name' value={title} onChange={(e) => {
                        setTitle(e.target.value);
                  }} />
                  <input className='w-full h-[40px] p-2 outline-none bg-bg-white' type="text" placeholder='product price' value={price} onChange={(e: any) => {
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
        </div>
    )
}

export default CreateProductForm;