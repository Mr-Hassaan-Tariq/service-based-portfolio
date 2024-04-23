import React from 'react'

export default function TechnologyServices() {
    return (
        <div>
            <section id="why-us" className="why-us my-5">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className="row companyAbout">

                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div className="content">
                                <h3><strong>Trusted Companies</strong></h3>
                                <p>
                                    Join a global community of success with many trusted companies. Our commitment to excellence has made us a preferred choice for businesses worldwide. Experience unparalleled service and innovation as we empower your journey to success through unwavering trust and collaboration
                                </p>
                            </div>

                            <div className="accordion-list mt-4">
                                <div className="d-flex">
                                    <div>
                                        <img decoding="async"
                                            src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/choose_icon01.svg"
                                            alt="Icon" className='p-3' style={{ backgroundColor: "#816CFF;", borderRadius: "50px" }} />
                                    </div>
                                    <div className='ms-4'>
                                        <h5 className="">First Working Process</h5>
                                        <p style={{ color: '#848484', }}>Embark on success with our meticulously crafted First Working Process. From ideation to execution</p>
                                    </div>

                                </div>
                                <div className="d-flex my-4">
                                    <div>
                                        <img decoding="async"
                                            src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/choose_icon02.svg"
                                            alt="Icon" className='p-3' style={{ backgroundColor: "#0EC181", borderRadius: "50px" }}/>
                                    </div>
                                    <div className='ms-4'>
                                        <h5 className="">Dedicated Team</h5>
                                        <p style={{ color: '#848484', }}>Experience excellence with our Dedicated Team, committed to turning your vision into reality.</p>
                                    </div>

                                </div>
                                <div className="d-flex">
                                    <div>
                                        <img decoding="async"
                                            src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/choose_icon03.svg"
                                            alt="Icon" className='p-3' style={{ backgroundColor: "#FA803B", borderRadius: "50px" }}/>
                                    </div>
                                    <div className='ms-4'>
                                        <h5 className="">24/7Hours Support</h5>
                                        <p style={{ color: '#848484', }}>Reliable and responsive, our 24/7 Hours Support is your dedicated lifeline. Whether it&apos;s a query</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 align-items-stretch order-1 order-lg-2 img chooseUsImage" data-aos="zoom-in" data-aos-delay="150">
                            <img decoding="async" src="images/choose_img01-2.png" alt="" style={{ height: "80vh", marginLeft: "30%" }} className='chooseUsImage1' />
                            <img decoding="async" 
                                src="images/choose_img02-2.png" alt="" style={{ position: "absolute", top: "72%", left: "10%", boxShadow: 'rgba(17, 12, 46, 0.15) 0px 10px 10px 0px', borderRadius: '20px', height: '220px' }} className='chooseUsImage2'/>

                            <img decoding="async" 
                                src="images/choose_img03-2.png" alt="" style={{ position: "absolute", top: '40%', right: "50px" }} className='chooseUsImage3'/>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
