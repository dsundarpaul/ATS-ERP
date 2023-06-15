// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import contacts from './contacts'

export const store = configureStore({
  reducer: {
    contacts
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
