"use client"

import { useForm } from "react-hook-form";
import { ZodType, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react";

interface IAuth {
	username: string;
	password: string;
	confirmPassword?: string;
}

const page = () => {
	const [isLogging, setIsLogging] = useState(true)

	useEffect(() => {
		fetch('http://localhost:5000/auth/profile', {
			method: 'GET',
			credentials: 'include',
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch((error) => {
				console.error('Error:', error);
			});
	}, [])

	const loginSchema = z.object({
		username: z.string().min(4).max(24),
		password: z.string().min(6).max(24),
	})

	const registerSchema: ZodType<IAuth> = isLogging ? loginSchema : loginSchema.extend({
		confirmPassword: z.string().min(6).max(24),
	}).refine((data: IAuth) => data.confirmPassword === data.password, {
		path: ["confirmPassword"],
		message: "Passwords do not match"
	})

	const { register, handleSubmit, formState: { errors } } = useForm<IAuth>({ resolver: zodResolver(registerSchema) })

	const handleAuthSubmit = (data: IAuth) => {
		console.log(data);
		const { confirmPassword, ...result } = data;
		fetch(`http://localhost:5000/auth/${isLogging ? "login" : "registration"}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include",
			body: JSON.stringify(result)
		})
			.then(res => res.json())
			.then(data => {
				if (data.statusCode >= 400) {
					if (data.statusCode === 401) {
						alert("Check you username and password again")
					} else {
						alert(data.message)
					}
				}
				console.log(data)
			})
			.catch(e => alert(e))
	}

	return (
		<div className="w-full min-h-screen flex justify-center items-center">
			<form onSubmit={handleSubmit(handleAuthSubmit)} className="flex flex-col w-[400px]">
				<h1>Form</h1>
				<div className=" flex flex-col gap-2">
					<input {...register("username")} type="text" />
					{errors.username && <p>{errors.username.message}</p>}
					<input {...register("password")} type="text" />
					{errors.password && <p>{errors.password.message}</p>}
					{!isLogging && <input {...register("confirmPassword")} type="text" />}
					{!isLogging && errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
				</div>
				<button type="submit" >Submit</button>
			</form>
		</div>
	)
}

export default page
