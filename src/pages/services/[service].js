import { useRouter } from 'next/router';
import servicesData from '../../Component/Services/services.json';
import slugify from 'slugify';
import { useEffect } from 'react';
import projectData from "../../Component/Projects/project.json"
import Link from 'next/link';
import Head from 'next/head';
export default function ServicePage() {

    const router = useRouter();
    const { service } = router.query;
    let serviceName = null;
    let serviceData = null;

    if (service) {
        serviceName = service.charAt(0).toUpperCase() + service.slice(1); // Capitalize first letter

        // Generate slug
        const slug = slugify(serviceName, { lower: true }); // Using slugify directly here

        // Find service data from JSON
        serviceData = servicesData.services.find(item => slugify(item.name, { lower: true }) === slug);
    }


    return (
        <div className='mt-5'>

            <Head>
                <meta property="og:title" content={serviceName + " | Binary-Burst"} />
                <meta property="og:description" content={serviceData?.description} />
                <meta property="og:type" content="website" />
                {/* <meta
                    property="og:image"
                    content={serviceData.img}
                /> */}
                {/* Add more tags as needed */}
            </Head>
            <div className='pt-5'>
                {serviceData ? (
                    <>
                        <div className="section-title mx-lg-5 mx-md-5">
                            <h2>{serviceName}</h2>
                            <p>{serviceData.text}</p>
                        </div>
                        <section id="skills" className="skills py-lg-5">
                            <div className="container" data-aos="fade-up">

                                <div className="row">
                                    <div className="col-lg-6 pt-4 pt-lg-0 content  order-2 order-lg-1" ddata-aos="zoom-in-right" data-aos-delay="100">
                                        <p className="mt-lg-3" style={{ lineHeight: '30px' }}>
                                            {serviceData.description}
                                        </p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 servicesMainImg" data-aos="fade-right" data-aos-delay="100">
                                        <img decoding="async" className="ms-5"
                                            data-wow-delay=".5s"
                                            src={serviceData.img}
                                            alt="" />
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section >
                            <div className="container-fluid py-4" data-aos="zoom-in-right" data-aos-delay="100">
                                {serviceData?.Process?.map((data, index) => {
                                    return <div key={index} className='row my-5'>
                                        {index % 2 === 0 ? (
                                            <>
                                                <div className="col-lg-6 pt-2 px-lg-5 mt-lg-5 order-2 order-lg-1">
                                                    <div className="card mx-lg-5">
                                                        <div
                                                            className="card-body p-5 rounded"
                                                            style={{ backgroundColor: '#37517e' }}
                                                        >
                                                            <h5 className="card-title text-white">{data.name}</h5>
                                                            <p className="card-text text-white">1 {data.step1}</p>
                                                            <p className="card-text text-white">2 {data.step2}</p>
                                                            <p className="card-text text-white">3 {data.step3}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 order-1 order-lg-2 text-center servicesStepImg">
                                                    <img src={data.logo} alt={data.name} />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="col-lg-6 servicesStepImg">
                                                    <img src={data.logo} alt={data.name} />
                                                </div>
                                                <div className="col-lg-6 pt-2 px-lg-5 mt-lg-5">
                                                    <div className="card mx-lg-5">
                                                        <div
                                                            className="card-body p-5 rounded"
                                                            style={{ backgroundColor: '#37517e' }}
                                                        >
                                                            <h5 className="card-title text-white">{data.name}</h5>
                                                            <p className="card-text text-white">1 {data.step1}</p>
                                                            <p className="card-text text-white">2 {data.step2}</p>
                                                            <p className="card-text text-white">3 {data.step3}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                })}

                            </div>
                        </section>



                        <div>


                            <div className="row p-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
                                <div className='container'>
                                    <div className="row d-flex justify-content-center">

                                        <div className="section-title mx-lg-5 mx-md-5">
                                            <h2>Related Projects</h2>
                                        </div>
                                        {
                                            projectData.projects?.map((data, index) => {

                                                return data?.services?.includes(serviceName) && <div class="card col-4 m-3 p-0" style={{ width: '18rem' }}>
                                                    <Link href={`/project/${data.name}`}>
                                                        <img src={data.logo} class="card-img-top " alt="..." style={{ height: "180px", objectFit: 'cover' }} />
                                                        <div class="card-body">
                                                            <h5 class="card-title">{data.name}</h5>
                                                            <p class="card-text card-description">{data.about?.slice(0, 100)}</p>
                                                            {/* <a class="btn ProjectDetail" onClick={()=> router.push(`/project/${data.name}`)}>Peoject Details</a> */}

                                                        </div>
                                                    </Link>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                ) : (
                    <p>Service not found</p>
                )}
            </div>

        </div>
    );
}