import Services from '@/Component/Services/Services'
import React from 'react'
import projectData from "../../Component/Projects/project.json"
export default function services() {
  return (
    <div className='' style={{marginTop:"10vh"}}>
      
      <Services projectData={projectData}/>
    </div>
  )
}
