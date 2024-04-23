import Aboutpage from '@/Component/About/Aboutpage'
import Head from 'next/head'
import React from 'react'

export default function about() {
    return (
        <div style={{ marginTop: '10vh' }}>
            <Head>
                <meta property="og:title" content="About | Binary-Burst" />
                {/* Add more tags as needed */}
            </Head>
            <Aboutpage />
        </div>
    )
}
