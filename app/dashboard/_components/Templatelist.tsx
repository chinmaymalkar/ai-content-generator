import Template from '@/app/(data)/template'
import React, { useEffect, useState } from 'react'
import Templatecard from './Templatecard'
import { Link } from 'lucide-react'
// import Template from '@/app/(data)/Template'
export interface TEMPLATE {
    name:string,
    desciption:string,
    icon:string,
    category: string,
    
    slug: string,
    aiprompt:string,
    form? :FORM[]
}
export interface FORM{
    label: string,
    name: string,
    field :string,
    required?: boolean,
}
function Templatelist({userSearchInput}:any) {
    const [templates, setTemplates]=useState(Template)
    useEffect(()=>{
        if(userSearchInput)
        {
            const filterdata= Template.filter(item=>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            )
            setTemplates(filterdata)
        }
    },[userSearchInput])
  return (
    
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templates.map((item: TEMPLATE, index: number) => (
                <Templatecard {...item}/>
            ))}

    </div>
  )
}

export default Templatelist
