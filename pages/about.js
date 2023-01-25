import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/about.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Card from '../components/Card/about.js'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

console.log(data);
const [information, setInformation] = useState([...data])

return (
    <>
      <Head>
        <title>Wuhu Island</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
   
      <div className={styles.home}> 
      <Link href="/">HOME</Link>
      </div>

        <div className={styles.employees}> 
        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business"){
            return(
              <Card key={index} lastName={info.lastName}/>
              )
          }
          })
        }
        </div>
  
      </main>
    </>
  )
}