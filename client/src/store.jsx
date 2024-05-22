import {configureStore} from '@reduxjs/toolkit'
import packageReducer from './reducers/packageSlice'
const store = configureStore({
   reducer:{
     package:packageReducer
   }
})

export default store
