import React, { useEffect, useState } from 'react'
import CardFormate from './CardFormate'
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import axios from 'axios';
import { ClassNames } from '@emotion/react';
import "C:/collage work/AI-TOOLS-DIRECTORY/frontend/src/App.css"

function ImageTools(props) {
  const [data, setData] = useState([])
  // const [key, setKey] = useState("")
  const [checkData, setCheckData] = useState(false)
  const [currKey, setCurrKey] = useState("Image Editors")

  const nav_key = {
    image: ["Image upscaller", "Image Genrators", "Image Editors"]
  }

  function http_tool(e) {
    axios.get('http://127.0.0.1:8000/data/', {
      params: {
        keyFeild: e,
        keyDoc: "image"
      }
    })
      .then(response => {
        setData(response.data);
        setCheckData(true)

        console.log("data--", data)

      })

  }

  useEffect(() => {
    setData(data)
    // data && setKey(Object.keys(data)[0])
  }, [data])

  useEffect(() => {
    if(localStorage.getItem("curr_key")){
      http_tool(localStorage.getItem('curr_key'))
    }else  http_tool(currKey)
  }, [currKey])

  
  window.addEventListener("unload", function(event) { localStorage.removeItem('curr_key'); });

  return (
    <>
     

    <div className='mt-5'>
      
      

      {/* <button onClick={() => http_tool()}>button</button> */}
      {/* rander sub navbar  */}
      {
        (<div className='mt-5' style={{}}>

          {
            nav_key["image"].map((e) => (
              <button onClick={() => {
                http_tool(e)
                localStorage.setItem("curr_key", e)
              }
              }>{e}</button>
            ))
          }

        </div>)
      }

      
      {
        
           data && (
          <>
            {console.log("data is in")}
            <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" padding={5}>
              {

                checkData && data[Object.keys(data)[0]].map((i,index) => (
                  <Grid item xs={12} sm={6} md={4} padding={2}>
                    <CardFormate name={i.tool_name} link={i.tool_link} image={i.image_link} description={i.tool_description} index={index-1} document={currKey} collection={"image"}/>
                  </Grid>
                ))

              }
            </Grid>

          </>
        )
        
       
      }
      </div>
    </>
  )
}

export default ImageTools