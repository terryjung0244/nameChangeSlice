import { configureStore } from '@reduxjs/toolkit';
import nameChangeSlice from '../../slice/nameChangeSlice';

export const createStore = () => 
  configureStore({
    reducer: {
      nameChange: nameChangeSlice
    }
  })

  export const store = createStore();