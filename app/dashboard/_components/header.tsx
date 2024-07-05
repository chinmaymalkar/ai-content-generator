import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex items-center gap-2 p-2 border rounded-md max-w-lg bg-white'> 
        <Search/>
        <input type='text' placeholder='Search...' className='outline-none'/>
      </div>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-2 rounded-full text-xs text-white px-4'>join membership for $9.99</h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
