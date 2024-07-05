import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS{
  aioutput:string
}
function Outputsection({aioutput}:PROPS) {
  const editorref:any= useRef()

  useEffect(()=>{
    const editorinstance=editorref.current.getInstance();
    editorinstance.setMarkdown(aioutput)
  },[aioutput])
  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={()=> navigator.clipboard.writeText(aioutput)}><Copy/> Copy</Button>
      </div>
      <Editor
        ref={editorref}
        initialValue="your result will appear here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorref.current.getInstance().getMarkdown())}
       />
    </div>
  )
}

export default Outputsection
