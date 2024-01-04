"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

interface LoginButtonProps {
    children:React.ReactNode;
    mode?:"modal" | "redirect";
    asChild?:boolean;
}

const LoginButton = ({
    children,
    mode='redirect',
    asChild
}:LoginButtonProps) => {

  const router = useRouter()
  const redirect = () => {
    router.push("/auth/login")
  } 

  if(mode==="modal") {
    return (
      <span>
          TODO 
   
      </span>
    )
  }
  return (
    <span className='cursor-pointer' onClick={redirect}>
        {children}
    </span>
  )
}

export default LoginButton