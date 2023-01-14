import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import Welcome from './Welcome'
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <title>Plateforme-Haré.com</title>
            <meta name='keyword' content='agriculture, agritech, ecommerce, agriculteurs'/>
        </Head>
        <Welcome />
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout