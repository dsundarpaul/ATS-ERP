import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { AppDispatch } from 'src/store'
import { deletePlan, fetchPlanById } from 'src/store/apps/plans'

interface RowOptionsProps {
  id: string | string[]
  path: string
}

const RowOptions = ({ id, path }: RowOptionsProps) => {

  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const handleNavigation = () => {
    dispatch(fetchPlanById(id))
    router.push(path)
  }

  const handleDelete = () => {
    dispatch(deletePlan(id))
  }

  return (
    <>
      <IconButton size='small' onClick={handleNavigation} >
        <Icon icon='mdi:pencil-outline' fontSize={20} />
      </IconButton>
      <IconButton size='small' color='error' onClick={handleDelete}>
        <Icon icon='mdi:delete-outline' fontSize={20} />
      </IconButton>
    </>
  )
}

export default RowOptions