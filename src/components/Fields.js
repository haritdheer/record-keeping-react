import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
const Fields = ({name,email,index}) => {
  return (
   
    <div className='data_val'>
       
    <h4>{name}</h4>
    <h4>{email}</h4>
    <Stack direction="row" spacing={2}>
    <Button variant="contained" color="error">
  <PersonRemoveIcon/>
</Button>
</Stack>
  </div>
  )
}

export default Fields