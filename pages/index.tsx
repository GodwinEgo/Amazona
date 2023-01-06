import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    <Layout>
        <div>
      <h1>Products</h1>
      <ul>
        <li>Products 1</li>
        <li>Products 2</li>
        <li>Products 3</li>
      </ul>
  </div>
    </Layout>
  )
}
