import { getFeedsApi, getIngredientsApi } from '@api';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

type TConstructorState = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

const initialState: TConstructorState = {
  bun: null,
  ingredients: []
};

export const constructorSlice = createSlice({
  name: 'constructorIngredient',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TConstructorIngredient) => {
        const id = uuidv4();
        return { payload: { ...ingredient, id } };
      }
    },
    deleteItem: (state, action: PayloadAction<TConstructorIngredient>) => {
      state.ingredients.filter((item) => item.id !== action.payload.id);
    },
    clearAll: (state) => (state = initialState)
  },
  selectors: {
    selectItems: (state: TConstructorState) => state
  }
});

export const { addItem, deleteItem, clearAll } = constructorSlice.actions;
export const constructorSelector = constructorSlice.selectors;
