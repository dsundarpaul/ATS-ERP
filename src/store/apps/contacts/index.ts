 import { Dispatch } from "react";
 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 import axios from 'axios'

 interface DataParams {}

// interface Redux {
//   getState: any
//   dispatch: Dispatch<any>
// }

export const fetchData = createAsyncThunk('/fetchData',async () => {
  console.log('in here')
  const response = await axios.get('/contacts/customers')
  console.log('res', response)
  
return response.data
})


export const contactsSlice = createSlice({
  name: 'contactCustomers',
  initialState: {
    data: [],
    customers: [],
    total: 1,
  },
  reducers: {},
})

export default contactsSlice.reducer
