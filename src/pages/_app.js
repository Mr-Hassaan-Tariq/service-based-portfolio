import React, { useEffect } from 'react';
import "../Styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Footer from '@components/Component/Footer/footer';
import Footer from '@/Component/Footer/Footer';
import Navbar from '@/Component/Navbar/Navbar';
import ReactDOM from 'react-dom'

export default function App({ Component, pageProps }) {

    useEffect(() => {
        AOS.init({
            // Global settings
        });
    }, []);

    return (
        <>

            <div >
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    );
}
