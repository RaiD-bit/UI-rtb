import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/Components/layout'
import HomeTabs from '@/Components/TabPanel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <HomeTabs></HomeTabs>
    </Layout>
  )
}
