import React, { useEffect, useState } from 'react'
import "C:/collage work/AI-TOOLS-DIRECTORY/frontend/src/App.css"
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Favorite } from '@mui/icons-material';

function CardDetail() {
  const [toolName, setToolName] = useState("")
  const [toolImage, setToolImage] = useState("")
  const [toolLink, setToolLink] = useState("")
  const [toolDescription, setToolDescription] = useState("")
  const [toolDocument, setToolDocument] = useState("")
  const [toolCollection, setToolCollection] = useState("")
  const [toolIndex, setToolIndex] = useState("")
  const [currentUser, setCurrentUser] = useState("")
  const [buttonShow, setButtonShow] = useState(true)
  const [favourite_tool, setFavourite_tool] = useState("")


  const cardDetails = () => {
    setToolImage(localStorage.getItem("tool_image"))
    setToolName(localStorage.getItem("tool_name"))
    setToolLink(localStorage.getItem("tool_link"))
    setToolDescription(localStorage.getItem("tool_description"))
    setToolDocument(localStorage.getItem("tool_document"))
    setToolCollection(localStorage.getItem("tool_collection"))
    setToolIndex(localStorage.getItem("tool_index"))
    setCurrentUser(localStorage.getItem("email"))
    setFavourite_tool(localStorage.getItem("favourite_tool"))

  }

  const favourite_handler = () => {
    setButtonShow(false)
    axios.get('http://127.0.0.1:8000/favourite/', {
      params: {
        index: toolIndex,
        document: toolDocument,
        collection: toolCollection,
        currentUser: currentUser

      }
    })
      .then(response => {
        console.log("add to favourite")
      })

  }

  useEffect(() => {
    if (favourite_tool) {
      let tmp = favourite_tool.split(",")
      for (var i of tmp) {
        let tmp2 = i.split("/")
        if ((tmp2[0] === toolDocument) && (tmp2[1] === toolCollection) && (parseInt(tmp2[2]) === parseInt(toolIndex))) {
          console.log("inside if")
          setButtonShow(false)
        }
      }

    }
  }, [favourite_tool])

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
            {
              buttonShow && <Button onClick={favourite_handler}
                variant="outline-danger"
                className='float-end'
              >
                <Favorite />
              </Button>

            }


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