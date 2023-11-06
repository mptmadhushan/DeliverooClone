// slices/foodSlice.js
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import { fetchMockFoodData } from '../../mockData/mockData';

export const fetchFoodData = createAsyncThunk('food/fetchData', async () => {
  return fetchMockFoodData();
});

const foodSlice = createSlice({
  name: 'food',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFoodData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFoodData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectFoodData = (state) => state.food.data;

export default foodSlice.reducer;
