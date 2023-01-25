import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '@/components/Card/index.js'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
   
      <div className={styles.ourTeam}> 
      <Link href="about">OUR TEAM</Link>
      </div>

        <div className={styles.departments}> 
        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business"){
            return(
              <Card key={index} degree={info.degree.toUpperCase()} colour="#FFA69E"/>
            )
          }
          })
        }
        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing"){
            return(
              <Card key={index} degree={info.degree.toUpperCase()} colour="#FFA69E"/>
            )
          }
          })
        }
        </div>
  
      </main>
    </>
  )
}
