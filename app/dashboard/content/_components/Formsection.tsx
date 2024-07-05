'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/Templatelist'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'


interface PROPS{
    selectedtemplate:TEMPLATE
    userforminput:any
    loading:boolean
}

function Formsection({selectedtemplate,userforminput,loading}:PROPS) {
  const [formdata,setFormdata]=useState()
  const onsubmit=(e:any)=>{
  e.preventDefault()
  userforminput(formdata)
  }

    const handleinputchange= (event:any)=>{
    const {name,value}=event.target;
    setFormdata({...formdata,[name]:value})
}
  return (
    
    <div className='p-5 shadow-md border rounded-lg bg-white'>
        <img src={selectedtemplate.icon} width={70} height={70}/>
      <h2 className='font-bold text-2xl text-primary mb-2'>{selectedtemplate.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedtemplate.desciption}</p>
      <form className='mt-6' onSubmit={onsubmit}>
        {selectedtemplate.form?.map((item,index)=>(
            
            <div className='my-2 flex flex-col gap- mb-7'>
                <label className='font-bold'>{item.label}</label>
                {item.field=='input'?
                <Input name={item.name} onChange={handleinputchange}/>: item.field=='text'?
                <Textarea name={item.name} onChange={handleinputchange}/>: null

            }
            </div>
        ))}
        <Button type='submit' className='py-6 w-full ' disabled ={loading}> {loading&&<Loader2Icon className='animate-spin'></Loader2Icon>} Generate </Button>
      </form>
    </div>
  )
}

export default Formsection
