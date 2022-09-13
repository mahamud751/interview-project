/* eslint-disable react/no-unescaped-entities */
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function Testimonial() {
  return (
    <Container className="mt-5">
    <Typography className='text-center'  sx={{fontSize:16,color:'#2D89FF'}}>
    Testimonial
    </Typography>
    <Typography className='text-center'  sx={{fontSize:32}}>
    What they say?
    </Typography>
    <Box className='d-flex'>
   <Box className="me-5">
   <img src="https://i.ibb.co/nnNfnhN/Ellipse-14.png" alt="" style={{width:80 ,height:80,marginTop:100}}/>
   <img src="https://i.ibb.co/dpYMhvS/Vector-1.png" alt="" style={{width:30 ,height:30,marginTop:100,marginLeft:-60}} />
   </Box>
    <Card style={{  marginBottom: 10,marginLeft:40 }}>
    <CardContent>
    <Grid container spacing={4}>
    <Grid item xs={12} md={8}>
    <Box >
    <Typography sx={{ fontSize: 14,color:"#000000"  }} gutterBottom>
   
    David Jeams
    </Typography>
    <Typography sx={{ fontSize: 14,color:"#000000" }} gutterBottom>
   
    Pratient
    </Typography>

    <Typography sx={{ marginY: 1, fontSize: 14 ,color:"#575757" }}>
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content 
    </Typography>
    
    <img src="https://i.ibb.co/T1qnJN7/Ornament-57.jpg" alt="" style={{marginTop:100}} />
    
  </Box>
    </Grid>
    <Grid item xs={12} md={4}>
   <Box style={{marginTop:-12,marginLeft:148}}>
   <img src="https://i.ibb.co/T188hTg/Ornament-24.jpg
   https://i.ibb.co/T1qnJN7/Ornament-57.jpg" alt="" />
   </Box>
    <img
    src="https://i.ibb.co/P1Qkn3B/Ikbal-1.jpg"
    alt=""
    className="img-fluid"
    
  />
    </Grid>
    </Grid>
     
   
    </CardContent>
  </Card>
<Box >
<img src="https://i.ibb.co/nnNfnhN/Ellipse-14.png" alt="" style={{width:80 ,height:80,marginTop:100,marginLeft:40}}/>
<img src="https://i.ibb.co/dpYMhvS/Vector-1.png
https://i.ibb.co/P6FNzw2/Vector.png" alt="" style={{width:30 ,height:30,marginTop:100,marginLeft:-60}}/>
</Box>
    </Box>
    </Container>
  )
}

export default Testimonial