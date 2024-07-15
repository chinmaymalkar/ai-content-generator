'use client'
import { aioutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import {eq} from 'drizzle-orm'
import { db } from '@/utils/db';

function Usestrack() {

    const user =useUser();
    const email:string = user?.user?.emailAddresses?.[0]?.emailAddress;
    const [totalUses,setTotalUses]=useState();
    useEffect(()=>{
        user && getdata()
    },[user])

    const getdata= async()=>{
        // const result=await db.select().from(aioutput).where(eq(aioutput.createdBy,user?.user?.emailAddresses[0].emailAddress))
        // const result = await db.select()
        // .from(aioutput)
        // .where(eq(aioutput.createdBy, user?.user?.emailAddresses[0].emailAddress)); 
        // gettotaluses(result);
        const result:string = await db.select()
        .from(aioutput)
        .where(eq(aioutput.createdBy, email));

    }
    const gettotaluses=(result)=>{
        let total:number=0;
        result.forEach(element => {
            total=total+Number(element.aiResponse?.length)
            
        });
        setTotalUses(total)
        console.log(total)
    }

  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium p-2'>Credits</h2>
        <div className='h-2 bg-[#9981f9] rounded-full w-full '>
            <div className='h-2 bg-white rounded-full ' style={{
                width: ((totalUses%10000)/10000)*100+'%'
            }}>

            </div>
        </div>
        <h2 className='text-sm py-2'>{totalUses %10000}/10000 credits used</h2>
      </div>
      
    </div>
  )
}

export default Usestrack
