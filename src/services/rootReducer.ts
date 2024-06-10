import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsSlice } from './slices/ingredientsSlice';
import { feedsSlice } from './slices/feedsSlice';
import { newOrderSlice } from './slices/newOrderSlice';
import { constructorSlice } from './slices/constructorSlice';
import { userSlice } from './slices/userSlice';
import { userOrdersSlice } from './slices/userOrdersSlice';

export const rootReducer = combineReducers({
  [ingredientsSlice.name]: ingredientsSlice.reducer,
  [constructorSlice.name]: constructorSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [feedsSlice.name]: feedsSlice.reducer,
  [newOrderSlice.name]: newOrderSlice.reducer,
  [userOrdersSlice.name]: userOrdersSlice.reducer
});