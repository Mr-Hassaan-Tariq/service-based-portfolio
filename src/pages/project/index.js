import React from 'react'
import projectData from "../../Component/Projects/project.json"
import router from 'next/router'
import Link from 'next/link'

export default function products() {
  // const router = useRouter() 
  return (
    <div className='pt-5'>
      <section id="portfolio" className="portfolio section-bg py-5">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>we blend the technical (code), visual (pixels), and imaginative (creativity) aspects.</p>
          </div>


          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div className='container'>
              <div className="row d-flex justify-content-center">

                {
                  projectData.projects?.map((data, index) => {

                    return <div key={index} class="card col-4 m-3 p-0" style={{ width: '18rem' }}>
                      <Link href={`/project/${data.name}`}>
                        <img src={data.logo} class="card-img-top " alt="..." style={{ height: "180px", objectFit: 'cover' }} />
                        <div class="card-body">
                          <h5 class="card-title">{data.name}</h5>
                          <p class="card-text card-description">{data.about?.slice(0, 165)}</p>
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
      </section>
    </div>
  )
}
