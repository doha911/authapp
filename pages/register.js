import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import { HiAtSymbol,HiFingerPrint,HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
export default function Register(){
    const[show,setshow]=useState({password:false,cpassword:false})
    return(
        
        <Layout>
            <Head>
            <title> Register</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
                <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
                <p className='w-3/4 mx-auto text-gray-400'>lgkjsdfglkdfgjdflgsdfgsdgdfgdgdfsg</p>
               

            </div>
             {/*form*/}
             <form className='flex flex-col gap-5'>
             <div className={styles.input_group}>
                <input type='text' name='username' placeholder='username' className={styles.input_text} />
                <span className="absolute right-3 top-1/3  ">
                <HiOutlineUser size={18} />
                </span>
                
                </div>
                <div className={styles.input_group}>
                <input type='email' name='email' placeholder='email' className={styles.input_text} />
                <span className="absolute right-3 top-1/3  ">
                <HiAtSymbol size={18} />
                </span>
                
                </div>
                <div className={styles.input_group}>
                <input type={show.password ? "text" : "password"}
                 name='password' placeholder='password'className={styles.input_text}  />
                <span className="absolute right-3 top-1/3  " onClick={()=> setshow({...show,password:!show.password})} >
            
                <HiFingerPrint size={18} />
                </span>
                </div>
                <div className={styles.input_group}>
                <input type={show.cpassword ? "text" : "password"}
                 name='cpassword' placeholder='Confirm Password'className={styles.input_text}  />
                <span className="absolute right-3 top-1/3  " onClick={()=> setshow({...show,cpassword:!show.cpassword})} >
                <HiFingerPrint size={18} />
                </span>
                </div>
                {/*login buttons*/}
                <div className='input_button'>
                <button type="submit" className={styles.button}>Login</button>
                </div>
                
                </form>
            {/*bottom*/}
            <p className='text-center text-gray-400'> have an account?
            <Link href={'/login'}><span className='text-blue-700'>Sign In</span></Link>
            </p> 
           
         

        </section>
        </Layout>
        )
}