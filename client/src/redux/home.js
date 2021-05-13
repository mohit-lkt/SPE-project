import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
    token: null,
}

const {
  actions: { saveToken },
  reducer,
} = createSlice({
  name: 'home',
  initialState,
  reducers: {
    
    saveToken : (state, action) => ({
      ...state,
      token: action.payload
  })
  },
})

export default reducer
export {saveToken }