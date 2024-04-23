import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Crafting Software and Web Solutions for Success</h1>
                            <h2>At Binary Burst, we transcend the realm of mere ones and zeros. We are passionate tech pioneers, weaving the fabric of tomorrow&apos;s world, today.</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a className="btn-get-started scrollto" onClick={() => router.push('/contact')}>Get Started</a>
                                {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="images/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
