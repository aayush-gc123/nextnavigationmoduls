"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div>
     <div>
        Navbar
     </div>
     <p>You are under the {pathname}</p>
    </div>
  )
}

export default Navbar
