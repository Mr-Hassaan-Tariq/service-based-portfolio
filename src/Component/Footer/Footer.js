import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineRight } from "react-icons/ai";

export default function Footer() {
    const router = useRouter()
    return (
        <div>
            <footer id="footer" >
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-contact">
                                <img src='/images/Binary-Burst-logo_01.png' style={{ height: "45px" }} />
                                <p>
                                    Dubai, UAE <br />
                                    <strong>Email:</strong> info@binarybursts.com<br />
                                    {/* <strong>Business Hours:</strong> Monday - Friday ( 9:00 AM - 5:00 PM ) */}
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/')}>Home</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/services')}>Services</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/project')}>Projecs</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/about')}>About Us</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/contact')}>Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/services/Integration-Solution')}>Integration Soluction</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/services/Mobile-Development')}>Mobile Development</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/services/SaaS-Product-Development')}>Saas Product Development</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/services/Quality-Assurance')}>Quality Assurance</a></li>
                                    <li><AiOutlineRight style={{color:'#00ACE4'}}/> <a onClick={() => router.push('/services/UI&UX-Development')}>UI/UX Development</a></li>
                                </ul>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
