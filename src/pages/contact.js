
import ContactUs from '@/Component/Contact/ContactUs'
import Head from 'next/head'
import React from 'react'

export default function contact() {
  return (
    <div style={{ marginTop: '20vh' }}>

      <Head>
        <meta property="og:title" content="Contact us | Binary-Burst" />
        {/* Add more tags as needed */}
      </Head>

      <ContactUs />
    </div>
  )
}
