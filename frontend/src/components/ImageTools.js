import React from 'react'
import CardFormate from './CardFormate'
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';

function ImageTools() {
  return (
    <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" padding={5}>
      <Grid item xs={12} sm={6} md={3}  padding={2}>
        <CardFormate name="photoshop" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}  padding={2}>
        <CardFormate name="photoshop" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}  padding={2}>
        <CardFormate name="photoshop" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}  padding={2}>
        <CardFormate name="photoshop" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}  padding={2}>
        <CardFormate name="photoshop" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}  padding={2}>
        <CardFormate name="photoshop" />
      </Grid>

    </Grid>
  )
}

export default ImageTools