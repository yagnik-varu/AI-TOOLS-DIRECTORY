
import React, { useEffect, useState } from 'react'
import CardFormate from './CardFormate'
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import axios from 'axios';
import { ClassNames } from '@emotion/react';

function MediaTools() {

  const [data, setData] = useState([])
  // const [key, setKey] = useState("")
  const [checkData, setCheckData] = useState(false)

  const nav_key = {
    media: ["Audio", "Design", "Music", "Make presentation"]
  }

  function http_tool(e) {
    axios.get('http://127.0.0.1:8000/data/', {
      params: {
        keyFeild: e,
        keyDoc: "media"
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
  return (
    <>
    <div className='body'>MediaTools
      fdgfdgdfdfsdd
      fdsfsd
      sdfdsf
      dfsf
      dfkjdlfjdsdf
      fdsfsddfd
      dfds
    </div>



    <button onClick={() => http_tool()}>button</button>
      {/* rander sub navbar  */}
      {
        (<div className='p-40'>

          {
            nav_key["media"].map((e) => (
              <button onClick={() => http_tool(e)}>{e}</button>
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

                checkData && data[Object.keys(data)[0]].map((i) => (
                  <Grid item xs={12} sm={6} md={4} padding={2}>
                    <CardFormate name={i.tool_name} link={i.tool_link} image={i.image_link} description={i.tool_description} />
                  </Grid>
                ))

              }
            </Grid>

          </>
        )
      }


    </>
    
    
  )
}

export default MediaTools