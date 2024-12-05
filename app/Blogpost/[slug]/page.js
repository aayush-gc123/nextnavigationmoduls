"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
const params = useParams();
const router = useRouter();
  return (
    <div>
        <div>
        {params.slug}
        </div>
        <button className='bg-blue-500 text-white rounded-3xl w-24' type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
   
    </div>
  )
}

export default page
