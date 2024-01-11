import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from 'date-fns';

export const Inbox = ({ setIsActive }: { setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch('http://localhost:5000/auth/profile', { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                const userId = data.sub;
                fetch(`http://localhost:5000/users/${userId}`)
                    .then(res => res.json())
                    .then(userData => {
                        setMessages(userData.messages);
                        setLoading(false);
                    })
                    .catch(e => {
                        console.log("Error", e.message);
                        setLoading(false);
                    });
            });
    }

    const formatDate = (date: string) => {
        const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
        return formattedDate;
    }

    return (
        <div className="fixed w-full lg:w-1/3 right-0 bottom-0 top-0 bg-main-black overflow-y-scroll flex z-[100]">
            <div className="flex flex-col gap-3 text-center w-full py-2 px-4">
                <div className="flex justify-between">
                    <h3 className="text-[24px] font-din uppercase text-white">Messages</h3>
                    <button
                        onClick={() => setIsActive(false)}
                        className="text-[24px] font-din uppercase text-red-500 hover:text-red-600 active:text-red-800 focus:outline-none"
                    >
                        Close
                    </button>
                </div>
                {loading ? (
                    <p className="text-white">Loading...</p>
                ) : (
                    messages && messages.reverse().map((message: any, index: number) => (
                        <div key={index} className="bg-white box rounded-xl shadow-lg p-4 mb-4">
                            <p className="text-xl font-bold">{message.title}</p>
                            <p className="text-gray-500">{formatDate(message.date)} </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
