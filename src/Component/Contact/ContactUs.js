import React from 'react'
import style from '../../Styles/contact.module.css'
import ContactForm from './ContactForm'

import ContactLocation from './ContactLocation';

export default function ContactUs() {
    
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <img className={style.img} src='/images/contact_img-2.png' />
                </div>

                <div className='col-lg-8 col-md-12 col-sm-12 p-4'>
                    <p className={style.heading}> Send a message</p>
                    <ContactForm />
                </div>

                {/* <div className='col-lg-12 col-md-6 col-sm-6'>
                    <ContactLocation />
                </div> */}
            </div>
        </div>
    )
}
