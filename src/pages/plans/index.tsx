import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { DataGrid } from '@mui/x-data-grid'
import { Card } from '@mui/material'

import { AppDispatch } from 'src/store'
import { fetchPlans } from 'src/store/apps/plans'

import TableHeader from 'src/components/TableHeader/TableHeader'
import { PLANS_COLUMNS } from './const'

import usePlansRows from './hooks/usePlansRows'

const Plans = () => {

  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<string>('DESC')
  const [take, setTake] = useState<number>(10)

  // ** Hooks 
  const dispatch = useDispatch<AppDispatch>()
  const data = usePlansRows();

  useEffect(() =>  {
    dispatch(
      fetchPlans({
        page,
        order, 
        take
      })
    )
  }, [dispatch, page, order, take])

  const handleFilter = () => {}
  const value = ''

  return (
    <div>
      <TableHeader 
        title='plans' 
        value={value} 
        handleFilter={handleFilter} 
        path='/plans/manage-plan' 
        actionItemLabel='plan' 
      />
      <Card sx={{ height: 400, width: '100%' }}>

        <DataGrid
          columns={PLANS_COLUMNS}
          rows={data}
          getRowId={(row) => row?.id }
          checkboxSelection
        />
      </Card>
    </div>
  )
}

export default Plans