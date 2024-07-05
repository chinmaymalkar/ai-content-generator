import React from 'react'
import Sidenav from './_components/sidenav';
import Header from './_components/header';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-slate-100 h-screen'>
      <div className='md:w-64 hidden md:block fixed'>
        <Sidenav/>
      </div>
      <div className='md:ml-64'> 
        <Header/>
        {children}
      </div>
      
    </div>
  );
}

export default layout
