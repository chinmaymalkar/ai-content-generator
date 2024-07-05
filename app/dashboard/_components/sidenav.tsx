'use client'
import { HomeIcon } from '@radix-ui/react-icons'
import { History, Home, Settings, Wallet } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Usestrack from './Usestrack'
import Link from 'next/link'

function Sidenav() {
  const Menulist = [
    {
      name: "home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history"
    },
    {
      name: "billing",
      icon: Wallet,
      path: "/dashboard/billing"
    },
    {
      name: "setting",
      icon: Settings,
      path: "/dashboard/setting"
    },
  ]
  const path = usePathname()
  useEffect(() => {
    console.log(path)
  }, [])
  return (
    <div className='h-screen relative p-5 border shadow-sm bg-white'>
      <div className='flex justify-center '>
        <img src="/logo.svg" alt="logo" width={120} height={100} />
      </div>
      <hr className='my-6' />
      <div className='mt-5'>
        {Menulist.map((menu, index) =>
        (
          <Link href={menu.path}>
          <div className={`flex mb-2 gap-2 p-3 hover:bg-primary hover:text-white rounded-lg hover:cursor-pointer
            ${path == menu.path && 'bg-primary text-white'}`}>
            <menu.icon></menu.icon>
            <h2>{menu.name}</h2>
          </div>
          </Link>
          
        )

        )}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <Usestrack/>
      </div>
    </div>
  )
}

export default Sidenav
