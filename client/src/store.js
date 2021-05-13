import {
    
    configureStore,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit'

  
  import reducer from './redux'
  
  const middleware = [ ...getDefaultMiddleware({ thunk: false }) ]
  
  
  const store = configureStore({
    reducer,
    middleware,
  })
  
  export default store
  