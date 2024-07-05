'use client'
import React, { useState } from 'react'
import Searchsection from './_components/Searchsection'
import Templatelist from './_components/Templatelist'


function Dashboard() {
  const[userSearchInput, setUserSearchInput]=useState<string>()
  return (
    <div>
      {/* search section */}
      <Searchsection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

      <Templatelist userSearchInput={userSearchInput}/>
      {/* template section list */}
    </div>
  )
}

export default Dashboard
