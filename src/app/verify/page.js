'use client'
import { useSearchParams } from "next/navigation"

export default function Verify() {
    const searchParams = useSearchParams()
    const code = searchParams.get('code')
    // console.log(code)
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="rounded-full h-20 w-20 bg-blue-500 animate-ping" />
        </div>
    )
}