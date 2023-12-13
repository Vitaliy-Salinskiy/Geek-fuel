"use client"

import React, { createContext, useState } from "react"

const UserContext = createContext({});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

	const [user, setUser] = useState({})

	return (
		<UserContext.Provider value={user}>
			UserContextProvider
		</UserContext.Provider>
	)
}

export default UserContextProvider