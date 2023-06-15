import { IconButton } from '@mui/material'
import React from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const RowOptions = ({ id }: { id: number | string }) => {

  console.log(id)

  return (
    <>
      <IconButton size='small' >
        <Icon icon='mdi:pencil-outline' fontSize={20} />
      </IconButton>
      <IconButton size='small' color='error'>
        <Icon icon='mdi:delete-outline' fontSize={20} />
      </IconButton>
    </>
  )
}

export default RowOptions