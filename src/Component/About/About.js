import React from 'react'

export default function About() {
    return (
        <div>
            <section id="skills" className="skills testimonial-section pt-5">
                <div className="container" data-aos="fade-up">
                    <div className="section-title ">
                        <h2>About Our Company</h2>
                    </div>
                    <div className="row companyAbout">
                        <div className="col-lg-6 d-flex justify-content-center aboutimg" data-aos="fade-right" data-aos-delay="100">
                            <img src="images/h2_about_img-2.png" alt=""  style={{height:"550px"}}/>
                        </div>
                        <div className="col-lg-6 pt-5 content " data-aos="fade-left" data-aos-delay="100">
                            <h3 className='mt-lg-5'>We run all kinds of IT services that view your success!</h3>
                            <p className="mt-4 me-lg-5" style={{lineHeight:"30px"}}>
                                Elevate your success with our diverse IT services. From development to support, we empower your journey with innovative solutions. Your achievement, our priority.
                            </p>

                            <div className="d-lg-flex d-md-flex my-3">
                                <div className="d-flex">
                                    <img decoding="async"
                                        src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/about_icon01.svg"
                                        alt="Icon" className='p-3' style={{backgroundColor:"#FFF9FA",borderRadius:"50px"}}/>
                                    <h6 className="mt-4 mx-3 fw-bold">Website Development</h6>

                                </div>
                                <div className="d-flex ">
                                    <img decoding="async"
                                        src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/about_icon02.svg"
                                        alt="Icon" className='p-3' style={{backgroundColor:"#EAFFF9",borderRadius:"50px"}}/>
                                    <h6 className="mt-4 mx-3 fw-bold">Managed IT Services</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
