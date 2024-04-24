import { getFeedsApi, getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { useSelector } from 'react-redux';

export const getIngredientsList = createAsyncThunk(
  'ingredients/getIngredientsList',
  async () => {
    const response = await getIngredientsApi();
    return response;
  }
);

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  loading: boolean;
  error: string | null | undefined;
};

const initialState: TIngredientsState = {
  ingredients: [],
  loading: true,
  error: null
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    getIngredientsSelector: (state) => state
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredientsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getIngredientsList.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      });
  }
});

export const { getIngredientsSelector } = ingredientsSlice.selectors;
export default ingredientsSlice.reducer;
