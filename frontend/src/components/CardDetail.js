import React, { useEffect,useState } from 'react'

function CardDetail() {
const [toolName,setToolName]=useState("")
const [toolImage,setToolImage]=useState("")
const [toolLink,setToolLink]=useState("")
const [toolDescription,setToolDescription]=useState("")


const cardDetails = () =>{
  setToolImage(localStorage.getItem("tool_image"))
  setToolName(localStorage.getItem("tool_name"))
  setToolLink(localStorage.getItem("tool_link"))
  setToolDescription(localStorage.getItem("tool_description"))
}

useEffect(()=>{
  cardDetails()
},[])




  return (
    <div>
      <div className='mt-2 p-10 container border border-primary body'>
        <div className='container border border-danger d-flex aligns-items-center justify-content-center'>{toolName}</div>
        <div className='p-5 container border border-danger d-flex aligns-items-center justify-content-center'>
          <img src={toolImage} width={500}></img>
        </div>
        <div className='container border border-danger d-flex aligns-items-center justify-content-center'>
        {toolDescription}
        </div>
        <div className='p-5 container border border-danger d-flex aligns-items-center justify-content-center'>
          <a className='btn btn-success' href={toolLink}>go to link</a>
        </div>
      </div>
    </div>
  )
}

export default CardDetail