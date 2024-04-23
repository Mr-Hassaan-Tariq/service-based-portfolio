
import axios from 'axios'
import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { ImSpinner9 } from "react-icons/im";
export default function ContactForm() {
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const sendMessageToUserLogic = async () => {
        emailjs.send('service_21cpmxv', 'template_qaigz7l', {
            subject: data.subject,
            userName: data.name,
            message: data.message,
            email_to: data.email,
        }, 'kn2NYYt8UCMRNyH2j')
            .then((response) => {
                console.log('Email sent successfully:', response);
                // alert('Email sent successfully');
                setData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    message: ''
                })
                alert('We’ve successfully received your request for demo.')
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send email');
                setLoading(false)
            });

    }
    const sendMessageToUsLogic = async () => {
        emailjs.send('service_21cpmxv', 'template_4wht1my', {
            subject: data.subject,
            name: data.name,
            phoneNumber: data.phoneNumber,
            message: data.message,
            emailReceived: data.email,
        }, 'kn2NYYt8UCMRNyH2j')
            .then((response) => {
                console.log('Email sent successfully:', response);
                // alert('Email sent successfully');
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // alert('Failed to sen/d email');
                setLoading(false)
            });

    }
    const sendMessage = async () => {

        setLoading(true)
        sendMessageToUserLogic();
        sendMessageToUsLogic()
        return;
        console.log("data is ", data)
        axios.post('/api/email', data).then(response => {
            console.log("response is ", response)
        }).then(response => {

            setData({
                name: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: ''
            })
        })



    }
    return (
        <div className='container'>
            <div className="row g-3">
                <div className="col-md-6">
                    <input required type="text" name='name' value={data.name} onChange={onChange} className="form-control" placeholder='Your Name' />
                </div>
                <div className="col-md-6">
                    <input required type="text" name='email' value={data.email} onChange={onChange} className="form-control" placeholder='Your email' />
                </div>
                <div className="col-md-6">
                    <input requiredtype="text" name='phoneNumber' value={data.phoneNumber} onChange={onChange} className="form-control" placeholder='Your Phone number' />
                </div>
                <div className="col-md-6">
                    <input required type="text" name='subject' value={data.subject} onChange={onChange} className="form-control" placeholder='Your subject' />
                </div>
                <div className="col-12">
                    <textarea required className="form-control" name='message' value={data.message} onChange={onChange} placeholder="Write your message" id="floatingTextarea"></textarea>

                </div>
                <div className="col-12">
                    <button onClick={loading?()=>{}:sendMessage} className="btn button-fix-width btn-primary">
                        {loading == true?<ImSpinner9  className='loading-icon'/>:'Send message'} </button>
                </div>
            </div>
        </div>
    )
}
