"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Navbar from './components/Navbar'

const page = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <div>
      This is the page and blogs are {searchParams.get("blog")} and author is {searchParams.get("author")} .
    </div>
  )
}

export default page
