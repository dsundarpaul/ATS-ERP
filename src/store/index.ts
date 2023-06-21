// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import contacts from './apps/contacts'
import plans from './apps/plans'

export const store = configureStore({
  reducer: {
    contacts,
    plans
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
