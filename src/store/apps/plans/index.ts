// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// enum order {
//   ASD = 'ASD',
//   DESC = 'DESC'
// }

interface PlansPrams {
  page: number,
  order: string,
  take: number
}

interface PlanData {
  name: string
  description: string | null
  allowedBranches: number
  priceIntervalType: string
  priceIntervalNumber: number
  trialPeriod: boolean
  trialDaysCount: number
  price: number
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

interface PlanStateType {
  data: any
  selectedPlan: {
    id: string
    name: string
    description: string | null
    allowedBranches: number
    priceIntervalType: string
    priceIntervalNumber: number
    trialPeriod: boolean
    trialDaysCount: number
    price: number
  },
  meta: {
    hasNextPage: boolean
    hasPreviousPage: boolean
    itemCount: number
    page: number
    pageCount: number
    take: number
  }
}

// ** Fetch Plans
export const fetchPlans = createAsyncThunk(`plans/fetchPlans`, async (params: PlansPrams) => {
  const response = await  axios.get(`https://erp-api.amoghnya.com/api/v1/plans`, {
    params
  })

  return response
})

// ** Add Plan
export const addPlan = createAsyncThunk('plans/createPlan', async (data: PlanData, { getState, dispatch }: Redux) => {
  const response = await axios.post('https://erp-api.amoghnya.com/api/v1/plans', {
    ...data
  })
  dispatch(fetchPlans(getState().plan.params))

  return response
})

// ** Fetch Plan By Id
export const fetchPlanById = createAsyncThunk('plans/getPlan',async (id: string | string[]) => {
  const response = await axios.get(`https://erp-api.amoghnya.com/api/v1/plans/${id}`)
  console.log(response)

  return response
})

// ** Update Plan by Id
export const updatePlan = createAsyncThunk('plans/updatePlan',async (id: number | string, { getState, dispatch }: Redux) => {
  const response = await axios.put(`https://erp-api.amoghnya.com/api/v1/plans/${id}`)
  dispatch(fetchPlans(getState().plans.params))

  return response
})

// ** Delete Plan by Id
export const deletePlan = createAsyncThunk('plans/deletePlan', async (id: string | string[], { getState, dispatch }: Redux) => {
  console.log(getState())

  // const response = await axios.delete(`https://erp-api.amoghnya.com/api/v1/plans/${id}`)
  dispatch(fetchPlans(getState().plans.params))

  // return response
})

export const appPlansSlice = createSlice({
  name: 'plans',
  initialState: {
    data: [],
    selectedPlan: {
      id: '',
      name: '',
      description: '',
      allowedBranches: 0,
      priceIntervalType: '',
      priceIntervalNumber: 0,
      trialPeriod: false,
      trialDaysCount: 0,
      price: 0
    },
    meta: {
      hasNextPage: false,
      hasPreviousPage: false,
      itemCount: 0,
      page: 1,
      pageCount: 1,
      take: 0,
    }
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPlans.fulfilled , (state: PlanStateType, action) => {
      state.data = action.payload.data.data
      state.meta = action.payload.data.meta
    }),
    builder.addCase(fetchPlanById.fulfilled, (state: PlanStateType, action) => {
      state.selectedPlan = action.payload.data
    })
  }
})

export default appPlansSlice.reducer