import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projectsData from '../../Component/Projects/project.json';
import slugify from 'slugify';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Head from 'next/head';


export default function ProjectDetail() {
    const router = useRouter();
    const { project } = router.query;
    let projectName = null;
    let projectData = null;
    const [currentIndex, setCurrentIndex] = useState(0);

    if (project) {
        projectName = project.charAt(0).toUpperCase() + project.slice(1); // Capitalize first letter

        // Generate slug
        const slug = slugify(projectName, { lower: true }); // Using slugify directly here

        // Find service data from JSON
        projectData = projectsData.projects.find(item => slugify(item.name, { lower: true }) === slug);
        console.log(projectData, 'serviceData...........serviceData');
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projectData?.images?.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData?.images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectData?.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='pt-5 '>

            <Head>
                <meta property="og:title" content={(project || '') + " | Binary-Burst"} />
                <meta property="og:description" content={projectData?.about} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content={projectData?.images[0]}
                />
                {/* Add more tags as needed */}
            </Head>
            <section id="why-us" className="why-us section-bg p-4">

                <div className="container-fluid" data-aos="fade-up">

                    <div className="row mt-5 ">

                        <div className="col-lg-7 d-flex flex-column align-items-stretch  order-2 order-lg-1">

                            <div className="content">
                                <h3> About Project</h3>
                                <p className='mt-4' style={{ lineHeight: '30px', color: 'black' }}>
                                    {projectData?.about}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5 text-center align-items-stretch order-1 order-lg-2 img" data-aos="zoom-in" data-aos-delay="150">
                            <img src={projectData?.images[0]} style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-7 d-flex flex-column align-items-stretch  order-2 order-lg-1">
                            <div className="mx-lg-5 px-lg-5 ProjectDescription">
                                <h3> Project Description</h3>
                                <p className='mt-4' style={{ lineHeight: '30px', color: 'black' }}>
                                    {projectData?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills py-5">
                <div className="container" data-aos="fade-up">
                    <div className="my-4">
                        <h2 style={{ color: '#37517e' }}>key Features</h2>
                    </div>

                    <div className="row mt-lg-5">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-left" data-aos-delay="100">
                            {projectData?.features.map((data) => {
                                return <>
                                    <h4 style={{ color: '#37517e' }}>{data.name} </h4>
                                    <p className="" style={{ lineHeight: '30px' }}>
                                        {data.description}
                                    </p>
                                </>
                            })}

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-right" data-aos-delay="100">
                            <img decoding="async" style={{ objectFit: 'contain' }} className="featuresImg ms-lg-5"
                                data-wow-delay=".5s"
                                src={projectData?.images[1]}
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="" className="section-bg mainProjectSlider">
                <div className='m-lg-5 m-3'>
                    <div className="ProjectSlider">
                        {projectData?.images?.map((image, index) => (
                            <img

                                // style={{objectFit:'cover',height:'100%'}}
                                key={index}
                                src={`${image}`}
                                alt={`Slide ${index + 1}`}
                                className={index === currentIndex ? 'active' : 'hidden'}
                            />
                        ))}
                        <button className="leftButton" onClick={goToPreviousSlide}>
                            <AiOutlineArrowLeft /> Left
                        </button>
                        <button className="rightButton" onClick={goToNextSlide}>
                            Right <AiOutlineArrowRight />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}
