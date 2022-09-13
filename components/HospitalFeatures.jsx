/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'


function HospitalFeatures() {
  return (
    <Container className='mt-5'>
   
    <Grid container spacing={2}>
    <Grid item sx={12} md={6}>
    
    <img src="https://i.ibb.co/nDx8cT9/Group-19.png
    " alt=""/>

    <img src="https://i.ibb.co/vXbFS9K/pose-7.png" alt="" style={{marginTop: -260,
position: "relative",left:-30}} />

    <img src="https://i.ibb.co/8dJXfFg/Ellipse-10.png" alt=""  style={{marginTop: -40}}/>

    </Grid>
    <Grid item sx={12} md={6}>
    <Typography  sx={{fontSize:16,color:'#2D89FF'}}>
    Our Hospital Feature
    </Typography>
    <Typography  sx={{fontSize:32}}>
    Make An Appointment Easy And Fast Services 
    </Typography>
    <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
    <Card style={{  marginBottom: 10 }}>
    <CardContent className="d-flex">
      <Box>
        <Typography sx={{ fontSize: 12 }} gutterBottom>
       
        24 Hours Doctor Support
        </Typography>

        <Typography sx={{ marginY: 1, fontSize: 14 ,color:"#575757" }}>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        </Typography>
    
      </Box>
      <img
        src="https://i.ibb.co/h1sFPpW/image-5.png"
        alt=""
        className="img-fluid"
        style={{ width: "20px", height: "20px" }}
      />
    </CardContent>
  </Card>
    </Grid>
    <Grid item xs={12} md={6}>
    <Card style={{  marginBottom: 10 }}>
    <CardContent className="d-flex">
      <Box>
        <Typography sx={{ fontSize: 12 }} gutterBottom>
        Exclusive Supports
       
        </Typography>

        <Typography sx={{ marginY: 1, fontSize: 14,color:"#575757" }}>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        </Typography>
     
      </Box>
      <img
        src="https://i.ibb.co/4P6WjD8/image-6.png"
        alt=""
        className="img-fluid"
        style={{ width: "20px", height: "20px" }}
      />
    </CardContent>
  </Card>
    </Grid>
    </Grid>
    <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
    <Card style={{  marginBottom: 10 }}>
    <CardContent className="d-flex">
      <Box>
        <Typography sx={{ fontSize: 12 }} gutterBottom>
        Friendly Environment 
        </Typography>

        <Typography sx={{ marginY: 1, fontSize: 14 ,color:"#575757" }}>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        </Typography>
      
      </Box>
      <img
        src="
        https://i.ibb.co/QQsLv8g/image-7.png"
        alt=""
        className="img-fluid"
        style={{ width: "20px", height: "20px" }}
      />
    </CardContent>
  </Card>
    </Grid>
    <Grid item xs={12} md={6}>
    <Card style={{  marginBottom: 10 }}>
    <CardContent className="d-flex">
      <Box>
        <Typography sx={{ fontSize: 12 }} gutterBottom>
        24 Hours Nurse Support
       
        </Typography>

        <Typography sx={{ marginY: 1, fontSize: 14,color:"#575757" }}>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        </Typography>
       
      </Box>
      <img
        src="https://i.ibb.co/r7TcKtM/image-8.png"
        alt=""
        className="img-fluid"
        style={{ width: "20px", height: "20px" }}
      />
    </CardContent>
  </Card>
    </Grid>
    </Grid>
    </Grid>
    </Grid>
    </Container>
  )
}

export default HospitalFeatures