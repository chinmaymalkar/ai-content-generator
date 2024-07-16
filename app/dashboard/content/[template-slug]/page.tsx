'use client'
import React, { useState } from 'react'
import Outputsection from '../_components/Outputsection'
import Template from '@/app/(data)/Template'
import { TEMPLATE } from '../../_components/Templatelist'
import Formsection from '../_components/Formsection'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { aioutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'


interface PROPS{
  params:
  {
    'template-slug' :string
  }
}
interface FormData {
  // Define the structure of your form data here
  [key: string]: any;
}
function CreateNewContent(props :PROPS) {
  const [loading,setLoading]=useState(false)
  const user=useUser()
  const [Aioutput,setAioutput]=useState<string>('')
  const GenerateAIcontent = async (formdata:any)=>{
    setLoading(true)
    const selectedPrompt= selectedtemplate?.aiprompt;
    const finalprompt=JSON.stringify(formdata)+", "+selectedPrompt;

    const res=await chatSession.sendMessage(finalprompt);
    const result=res.response.text()
    console.log(result);
    setAioutput(result);
    setLoading(false)
    await saveindb(formdata,selectedtemplate?.slug,result)
    
  }
  const saveindb=async (formdata:FormData,slug,Aioutput) =>{
    const plainFormData = JSON.parse(JSON.stringify(formdata));

    const result=await db.insert(aioutput).values(
      {
        formData:plainFormData,
        templateSlug:slug,
        aiResponse:Aioutput,
        createdAt:Date.now(),
        createdBy:user?.user?.emailAddresses[0].emailAddress,
      }
    )
    console.log(result)
  }
  const selectedtemplate:TEMPLATE| undefined= Template?.find((item)=>item.slug==props.params['template-slug'])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      {/* form section */}
      <Formsection selectedtemplate={selectedtemplate} userforminput={(v:any)=>GenerateAIcontent(v)} loading={loading}/>
      {/* Output section */}
      <div className='col-span-2'> 
      <Outputsection aioutput={Aioutput}/>
      </div>
      

    </div>
  )
}

export default CreateNewContent

// 'use client'
// import React, { useState } from 'react'
// import Outputsection from '../_components/Outputsection'
// import Template from '@/app/(data)/Template'
// import { TEMPLATE } from '../../_components/Templatelist'
// import Formsection from '../_components/Formsection'
// import { chatSession } from '@/utils/AiModel'
// import { db } from '@/utils/db'
// import { aioutput } from '@/utils/schema'
// import { useUser } from '@clerk/nextjs'

// interface PROPS {
//   params: {
//     'template-slug': string
//   }
// }

// function CreateNewContent(props: PROPS) {
//   const [loading, setLoading] = useState(false)
//   const { user } = useUser()
//   const [Aioutput, setAioutput] = useState<string>('')

//   const GenerateAIcontent = async (formdata: any) => {
//     setLoading(true)
//     const selectedPrompt = selectedtemplate?.aiprompt;
//     const finalprompt = JSON.stringify(formdata) + ", " + selectedPrompt;

//     const result = await chatSession.sendMessage(finalprompt);
//     const aiResponse =result.response.text();
//     console.log(aiResponse);
//     setAioutput(aiResponse);
//     setLoading(false)
//     await saveindb(formdata, selectedtemplate?.slug, aiResponse)
//   }

//   const saveindb = async (formdata: any, slug: string, aiResponse: string) => {
//     // Convert formdata to a plain object
//     const plainFormData = JSON.parse(JSON.stringify(formdata));
//     const currentUser = user ? user.email : 'unknown';
//     const result = await db.insert(aioutput).values({
//       formData: plainFormData,
//       templateSlug: slug,
//       aiResponse: aiResponse,
//       createdAt: new Date().toISOString(),
//       createdBy: currentUser,
//     })
//     console.log(result)
//   }

//   const selectedtemplate: TEMPLATE | undefined = Template?.find((item) => item.slug === props.params['template-slug'])

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
//       {/* form section */}
//       <Formsection selectedtemplate={selectedtemplate} userforminput={(v: any) => GenerateAIcontent(v)} loading={loading} />
//       {/* Output section */}
//       <div className='col-span-2'>
//         <Outputsection aioutput={Aioutput} />
//       </div>
//     </div>
//   )
// }

// export default CreateNewContent


