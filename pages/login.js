import Head from 'next/head';
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import { HiAtSymbol,HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { signIn,signOut } from 'next-auth/react';
import { useFormik } from 'formik';


export default function login(){
    const[show,setshow]=useState(false);
    const formik = useFormik({
        initialValues:{ email: '', password: '' },
        onSubmit

    })
    async function onSubmit(values){
         console.log(values)
    }
    //google handler function 
    async function handleGoogleSignin(){
        signIn('google',{callbackUrl:"http://localhost:3000"})
    }
    //github handler function 
    async function handleGithubSignin(){
        signIn('github',{callbackUrl:"http://localhost:3000"})
    }
    return(
        
        
        <Layout>
            <Head>
            <title> Login</title>
            </Head>
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
                <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>lgkjsdfglkdfgjdflgsdfgsdgdfgdgdfsg</p>
               

            </div>
             {/*form*/}
             <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={styles.input_group}>
                <input type='email' name='email' placeholder='email' className={styles.input_text} onChange={formik.handleChange}
                value={formik.values.email} />
                <span className="absolute right-3 top-1/3  ">
                <HiAtSymbol size={18} />
                </span>
                
                </div>
                <div className={styles.input_group}>
                <input type={show ? "text" : "password"}
                 name='password' placeholder='password'className={styles.input_text} onChange={formik.handleChange}
                 value={formik.values.password} />
                <span className="absolute right-3 top-1/3  " onClick={()=> setshow(!show)} >
                <HiFingerPrint size={18} />
                </span>
                </div>
                {/*login buttons*/}
                <div className='input_button'>
                <button type="submit" className={styles.button}>Login</button>
                </div>
                <div className='input_button'>
                <button type="button" onClick={handleGoogleSignin} className={styles.button_custom}>Sign In with Google
                </button>
                </div>
                <div className='input_button'>
                <button onClick={handleGithubSignin} type="button"className={styles.button_custom}>Sign In with Github</button>
                </div>
                </form>
            {/*bottom*/}
            <p className='text-center text-gray-400'>don't have an account yet?
            <Link href={'/register'}><span className='text-blue-700'>Sign Up</span></Link>
            </p> 
           
         

        </section>
        </Layout>
        )
}
        
