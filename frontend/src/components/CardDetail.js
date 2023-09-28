import React, { useEffect, useState } from 'react'
import "C:/collage work/AI-TOOLS-DIRECTORY/frontend/src/App.css"

import { Card, Button } from 'react-bootstrap';
import { Favorite } from '@mui/icons-material';

function CardDetail() {
  const [toolName, setToolName] = useState("")
  const [toolImage, setToolImage] = useState("")
  const [toolLink, setToolLink] = useState("")
  const [toolDescription, setToolDescription] = useState("")


  const cardDetails = () => {
    setToolImage(localStorage.getItem("tool_image"))
    setToolName(localStorage.getItem("tool_name"))
    setToolLink(localStorage.getItem("tool_link"))
    setToolDescription(localStorage.getItem("tool_description"))
  }

  useEffect(() => {
    cardDetails()
  }, [])




  return (
    <div className='padding-bottom'>
      <div className='card-details container body pb-100'>
        <div className='container border border-info d-flex aligns-items-center justify-content-center text-light fs-1 text_color'
        >
          <b><h1 style={{ color: "#81AFDD" }} >{toolName}</h1></b>
        </div>
        <div className='p-5 container border border-info d-flex aligns-items-center justify-content-center'>
          <img src={toolImage} width={"60%"} className='rounded'></img>

          <div>
            <Button
              variant="outline-danger"
              className='float-end'
            >
              <Favorite />
            </Button>

          </div>






        </div>
        <div className='container border border-info p-4 d-flex aligns-items-center justify-content-center text-light fs-4'>
          
          {toolDescription}
        </div>

        <div className='p-2 container border border-info d-flex aligns-items-center justify-content-center'>
          <a className='btn btn-warning' href={toolLink}>Click to go</a>

        </div>
      </div>
    </div>
  )
}

export default CardDetail