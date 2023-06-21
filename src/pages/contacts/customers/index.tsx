import React, { useCallback, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { COLUMNS, DATA } from './consts'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from 'src/store'
import { Fab, Grid, useMediaQuery } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import TableHeader from 'src/components/TableHeader/TableHeader'
import { fetchData } from 'src/store/apps/contacts'

const ContactsCustomers = () => {

  // ** State
  const [value, setValue] = useState<string>('')

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state)

  console.log('store', store)
  
  useEffect(() => {
    dispatch(
      fetchData()
    )
  }, [dispatch])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <Grid container>
      <Grid item xs={12}>
        <TableHeader title='Customers' value={value} handleFilter={handleFilter} path='/contacts/customers/add-edit-customer' actionItemLabel='Customer' />
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          autoHeight
          checkboxSelection
          rows={DATA}
          columns={COLUMNS}
        />
      </Grid>

      {isSmall && 
        <Fab color='primary'><AddIcon /></Fab>
      }
    </Grid>
  )
}

export default ContactsCustomers