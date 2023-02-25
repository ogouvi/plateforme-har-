import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import Welcome from './welcome'
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <title>Plateforme-Haré.com</title>
            <meta name='keyword' content='la plateforme hare,agriculture, agritech, ecommerce, agriculteurs'/>
            <meta name='keyword' content='la plateforme agricole au togo, solutions agricole au togo'/>
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