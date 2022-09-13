import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

function Faq() {
  return (
    <Container className='mt-5'>
    <Typography style={{fontSize:16,color:'#642DFF'}} >FAQ Questions</Typography>
    <Typography style={{fontSize:32,color:'#1E1E1E'}} >Get Your General Answer </Typography>
    <Grid container spacing={4} className='mt-5'>
    <Grid item sx={12} md={6}>
    <Accordion className=''  style={{position:'unset'}}>
        <AccordionSummary
        expandIcon={<AddIcon style={{color:'#5DA4FC'}}></AddIcon>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{position:'unset'}}
         
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails style={{position:'unset'}} >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    <Accordion  style={{backgroundColor:'unset'}}>
        <AccordionSummary
        expandIcon={<AddIcon style={{color:'#5DA4FC'}}></AddIcon>}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  
      
  
    </Grid>
    <Grid item sx={12} md={6}>

    <img src="https://i.ibb.co/9tf7VkX/Group-26.png" alt=""/>
    <img src="https://i.ibb.co/QDYdZXb/Blood-Pressure.png" alt=""  style={{marginTop:-370,marginLeft:-20}}/>
   
    <img src="https://i.ibb.co/xMGqQrN/pose-8.png" alt="" style={{marginTop:-420,marginLeft:20}}/>
    <img src="https://i.ibb.co/v18S47S/Gloves.png" alt="" style={{marginTop:-320,marginLeft:-80}}/>
    <img src="https://i.ibb.co/hCZyMBn/Defibrillator.png" alt="" style={{marginTop:-420,marginLeft:-300}}/>
    </Grid>
    </Grid>
    </Container>
  )
}

export default Faq