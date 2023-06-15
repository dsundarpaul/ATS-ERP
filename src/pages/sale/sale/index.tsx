import React, { useCallback, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from 'src/store'
import { fetchData } from 'src/store/contacts'
import { Card, Grid } from '@mui/material'
import TableHeader from 'src/views/pages/contacts/customers/TableHeader'
import { COLUMNS, DATA } from '../const'

const ContactsCustomers = () => {

  // ** State
  const [value, setValue] = useState<string>('')

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.contacts)
  
  useEffect(() => {
    dispatch(
      fetchData()
    )
  }, [dispatch])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddUserDrawer = () => console.log('hi');

  return (
    <Grid container>
      <Grid item xs={12}>
        <TableHeader 
          title='Sales' 
          value={value} 
          handleFilter={handleFilter} 
          toggle={toggleAddUserDrawer} 
          path='/sale/sale/add-edit-customer' 
        />
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          autoHeight
          checkboxSelection
          rows={DATA}
          columns={COLUMNS}
        />
      </Grid>
    </Grid>
  )
}

export default ContactsCustomers