import React from 'react'

export default function Aboutpage() {
    return (
        <div>
            <section id="skills" className="skills py-5">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                            <img decoding="async" className="ms-5"
                                data-wow-delay=".5s"
                                src="images/about_img01-2.png"
                                alt="" />

                            <img decoding="async" className="" data-wow-delay=".2s"
                                src="images/about_img02-2.png"
                                alt="" style={{ position: 'absolute', zIndex: '-1', left: '0px' }} />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3>Creative Agency that Help you go Ahead.</h3>
                            <p className="mt-3" style={{ lineHeight: '30px' }}>
                                At BinaryBurst, we are more than just a creative agency; we are your strategic partners in navigating the ever-evolving digital landscape. Our team of dynamic creatives is dedicated to propelling your brand forward by crafting compelling solutions that captivate your audience and elevate your online presence. With a focus on innovation and design, we specialize in developing strategic, audience-centric approaches that leave a lasting impact. Whether &apos; brand development, digital marketing, web and app development, or creative content, we are committed to delivering unparalleled results that drive growth and success for your business. Join us at BinaryBurst and let&apos;s embark on a journey of creativity, progress, and digital transformation together.
                            </p>

                            <div className="skills-content">

                                <ul className="list-wrap">
                                    <li>
                                        <img decoding="async"
                                            src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/check.svg"
                                            alt="Icon" />
                                        &nbsp;
                                        Creative excellence brands forward with BinaryBurst
                                    </li>
                                    <li>
                                        <img decoding="async"
                                            src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/check.svg"
                                            alt="Icon" />
                                        &nbsp;
                                        Innovation and design redefine success here
                                    </li>
                                    <li>
                                        <img decoding="async"
                                            src="https://itcroctheme.com/wp/demos/themes/xotric-final/wp-content/uploads/2023/09/check.svg"
                                            alt="Icon" />
                                        &nbsp;
                                        Your brand&apos;s journey, creatively guided forward
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section id="why-us" className="why-us section-bg py-5">
                <div className="container-fluid" data-aos="fade-up">

                    <div className="row">

                        <div className="col-lg-7 d-flex flex-column align-items-stretch  order-2 order-lg-1">

                            <div className="content">
                                <h3>Crafting Digital Excellence:<strong> Your Trusted Software Partner</strong></h3>
                                <p className='mt-5' style={{ lineHeight: '30px' }}>
                                    At BinaryBurst, we don&apos;t just write code; we sculpt digital masterpieces that redefine excellence. As your trusted software partner, we&apos;re on a mission to turn your boldest ideas into reality with solutions that resonate with your users on a profound level. Our team of seasoned professionals doesn&apos;t just bring technical expertise to the table; we infuse every project with a potent blend of creativity and innovation. From concept to execution, we&apos;re dedicated to crafting robust, user-centric solutions that set new standards in the digital realm. Trust us to be the architects of your digital success story, where every line of code is a brushstroke in our masterpiece of innovation.
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img p-5" data-aos="zoom-in" data-aos-delay="150">
                            <img src='images/breadcrumb_img-2.png' style={{ width: '80%' }} />
                        </div>
                    </div>

                </div>
            </section>

            {/* <section id="services" className="services py-5">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Our Amazing Team</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box d-flex flex-column justify-content-end align-items-center" style={{ backgroundImage: 'url(images/team_img01-2.jpg)', backgroundSize: '100% 100%', height: '50vh', width: '100%', borderRadius: '10px' }}>
                                <div className='teamBackground p-3'>
                                    <h4><a href="">M Haris</a></h4>
                                    <h6>Founder</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box d-flex flex-column justify-content-end align-items-center" style={{ backgroundImage: 'url(images/team_img03-2.jpg)', backgroundSize: '100% 100%', height: '50vh', width: '100%', borderRadius: '20px' }}>
                                <div className='teamBackground p-3'>
                                    <h4><a href="">Hassan Tariq</a></h4>
                                    <h6>Co Founder</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box d-flex flex-column justify-content-end align-items-center" style={{ backgroundImage: 'url(images/team_img04-2.jpg)', backgroundSize: '100% 100%', height: '50vh', width: '100%', borderRadius: '20px' }}>
                                <div className='teamBackground p-3'>
                                    <h4><a href="">M Hamza Saleemi</a></h4>
                                    <h6>Operational Manager</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box d-flex flex-column justify-content-end align-items-center" style={{ backgroundImage: 'url(images/team_img02-2.jpg)', backgroundSize: '100% 100%', height: '50vh', width: '100%', borderRadius: '20px' }}>
                                <div className='teamBackground p-3'>
                                    <h4><a href="">Mishal</a></h4>
                                    <h6>Marketing Manager</h6>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}
        </div>
    )
}
