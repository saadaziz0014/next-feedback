'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
    const user = useSelector(state => state.user);
    const router = useRouter();
    useEffect(() => {
        if (user) router.push('/')
    }, [user])
    return <>{children}</>;
}