import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function CardComponent({avatar, person, designation, text}) {
  return (
    <Card sx={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',p:'20px',pb:'0',maxWidth:'400px'}}>
      <CardContent>
        <Stack direction='row' alignItems='center' spacing={1}>
          <Avatar src={avatar} alt={person} sx={{width:'60px',height:'60px'}}/>
          <Stack spacing={1}>
            <Typography variant='h6'>{person}</Typography>
            <Typography sx={{color:'#7d248f'}}>{designation}</Typography>
          </Stack>
        </Stack>
        <Typography sx={{color:'#6d6c6c'}} mt={2.5}>{text}</Typography>
        <FormatQuoteIcon sx={{fontSize:'60px',color:'#9087b9'}}/>
      </CardContent>
    </Card>
  )
}
