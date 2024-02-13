"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const getCurrentUser = await fetch("/api/current");
            if (!getCurrentUser.ok) {
                throw new Error("Failed to fetch current user");
            }
            const data = await getCurrentUser.json();
            setUser({ ...data });
        };
        if(!user){

            fetchCurrentUser();
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
