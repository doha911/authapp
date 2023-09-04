import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession,signOut } from 'next-auth/react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data:session}=useSession()

  function handleSignOut(){
signOut()
  }
  return (
    <div>
      <Head>
        <title>
        Home page</title>
      
      </Head>
      {session ? user({session,handleSignOut}): Guest()}
    </div>
  )

}
//guest
function Guest (){
  return(
    <main className="container mx-auto  text-center py-20">
 <h3 className='text-4xl font-bold '> Guest Homepage</h3>
 <div className='flex justify-center mt-5'>
  <Link href={'/login'}><span className=' px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</span></Link>
 </div>
    </main>

  )

}
//authorize user
function user({session,handleSignOut}){
  return(
    <main className="container mx-auto  text-center py-20">
    <h3 className='text-4xl font-bold '> Authorize User Homepage</h3>
    <div className='details mt-5'>
    <h5>{session.user.name}</h5>
    <h5>{session.user.email}</h5>
    </div>
    <div className='flex justify-center mt-5'>
      <button onClick={handleSignOut} className=' px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50 border-neutral-50 border-solid'>Sign Out</button>
    </div>
    <div className='flex justify-center mt-5'>
     <Link href={'/profil'}><span className=' px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profil Page</span></Link>
    </div>
       </main>
  )
}

  

