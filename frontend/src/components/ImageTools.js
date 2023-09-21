import React, { useEffect, useState } from 'react'
import CardFormate from './CardFormate'
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import axios from 'axios';

function ImageTools(props) {

  const[key, setKey] = useState(Object.keys(props.data)[0])
  const [data,setData] = useState(props.data) 

  useEffect(() =>{
    setData(props.data)
    setKey(Object.keys(props.data)[0])
  }, [props])

  return (
   <>
   {
    data && (
      <>
          <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" padding={5}>
      { 
        data[key].map((i)=>(
          
          
          <Grid item xs={12} sm={6} md={4}  padding={2}>
            <CardFormate name={i.tool_name} link={i.tool_link} image={i.image_link} description={i.tool_description}/>
          </Grid>
          
         
          
        ))
      }
          </Grid>

      </>
    )
   }
   </>
    // <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" padding={5}>
    //   <Grid item xs={12} sm={6} md={3}  padding={2}>
    //     <CardFormate name="photoshop" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}  padding={2}>
    //     <CardFormate name="photoshop" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}  padding={2}>
    //     <CardFormate name="photoshop" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}  padding={2}>
    //     <CardFormate name="photoshop" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}  padding={2}>
    //     <CardFormate name="photoshop" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}  padding={2}>
    //     <CardFormate name="photoshop" />
    //   </Grid>

    // </Grid>
  )
}

export default ImageTools