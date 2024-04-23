import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Head from 'next/head'

export default function Projects() {
    const Router = useRouter()
    const cardData = [
        {
            logo: '/images/web/EzwagePayment/Dashboard.jpg',
            title: 'Payment Gateway',
            route: 'payment-gateway',
            about: "Payment Gateway system is designed to offer companies a cost-effective alternative to traditional banking methods for salary disbursements and financial transactions with employees."
        },
        {
            logo: '/images/web/yourguide/1.png',
            title: 'YourGuide',
            route: 'YourGuide',
            about: "There are always undoubted leaders, professionals in their field, experts of their product - that's us! Travel agency Verona-tour does not stand still,"
        },
        {
            logo: '/images/web/VvorkCloudTechnology/Vvork.png',
            title: 'Vvork Cloud Technologies',
            route: 'Vvork-Cloud-Technologies',
            about: "Vvork Cloud Technologies focuses on closing the gap in tech skills and productivity between developers and non-technical professionals."
        }
    ]

    return (
        <div>

            <Head>
                <meta property="og:title" content="Portfolio | Binary-Burst" />
                <meta property="og:description" content="We blend the technical (code), visual (pixels), and imaginative (creativity) aspects." />
                <meta property="og:type" content="website" />
                {/* Add more tags as needed */}
            </Head>
            <section id="portfolio" className="portfolio section-bg py-5">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>We blend the technical (code), visual (pixels), and imaginative (creativity) aspects.</p>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div className='container text-center'>
                            <div className="row d-flex justify-content-center">
                                {
                                    cardData?.map((data, index) => {
                                        return <div key={index} class="card col-4 m-3 p-0" style={{ width: '18rem' }}>
                                            <Link href={`/project/${data.route}`}>
                                                <img src={data.logo} class="card-img-top " alt="..." style={{ height: '200px' }} />
                                                <div class="card-body">
                                                    <h6 class="card-title">{data.title}</h6>
                                                    <p class="card-text card-description">{data.about}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                            <Link href={`/project`} >
                                <button className='my-3 btn ProjectDetail' >View More</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
