import React from 'react'
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import avatar1 from "./avatar1.jpeg";
import avatar2 from "./avatar2.jpeg";
import avatar3 from "./avatar3.jpeg";
import avatar4 from "./avatar4.jpeg";
import avatar5 from "./avatar5.jpeg";
import avatar6 from "./avatar6.jpeg";
import CardComponent from './CardComponent';

export default function ContentComponent() {

  const cards = [
    {
      avatar:avatar1,
      person:'Georgia Laila',
      designation:'Student at porter library',
      text:'But also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    },
    {
      avatar:avatar2,
      person:'Ricky Johnson',
      designation:'Instructor at porter library',
      text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ',
    },
    {
      avatar:avatar3,
      person:'Charry Porter',
      designation:'Student at porter library',
      text:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web ',
    },
  ]

  const cards2 = [
    {
      avatar:avatar4,
      person:'Grayson Leo',
      designation:'Student at porter library',
      text:'More recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply rando',
    },
    {
      avatar:avatar5,
      person:'Issac Lincoln',
      designation:'Instructor at porter library',
      text:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
    },
    {
      avatar:avatar6,
      person:'Christopher Jaxon',
      designation:'Student at porter library',
      text:'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated ',
    },
  ]
  return (
    <Box pb={6}>
      <Stack alignItems='center' spacing={2} sx={{backgroundColor:'#f7f8f9',pt:'10px',pb:'40px'}}>
        <Typography variant='h3' sx={{fontWeight:'800'}} >Testimonials</Typography>
        <Breadcrumbs>
          <Link underline="hover" sx={{color:'#000000'}} href="/">
            Home
          </Link>
          <Typography sx={{color:'#f6951a'}}>Testimonials</Typography>
        </Breadcrumbs>
      </Stack>
      <Stack alignItems='center' spacing={3} mt={14}>
        <Typography sx={{color:'#f6951a',fontWeight:'800'}}> Our Testimonials</Typography>
        <Typography variant='h4' sx={{fontWeight:'800',fontSize:'38px'}} >What People Say <Typography component='span' sx={{fontWeight:'800',fontSize:'38px',color:'#f6951a'}}>About Us</Typography></Typography>
        <Stack direction='row' alignItems='center' spacing={3}>
          {
            cards.map((card,index)=>{
              return <CardComponent key={index} avatar={card.avatar} person={card.person} designation={card.designation} text={card.text} />
            })
          }
        </Stack>
        <Stack direction='row' alignItems='center' spacing={3}>
          {
            cards2.map((card,index)=>{
              return <CardComponent key={index} avatar={card.avatar} person={card.person} designation={card.designation} text={card.text} />
            })
          }
        </Stack>
      </Stack>
    </Box>
  )
}
