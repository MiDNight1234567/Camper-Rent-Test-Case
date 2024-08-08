import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetCampers } from '../services/camperApi';

const getCampers = createAsyncThunk('adverts/get', async (_, thunkAPI) => {
  try {
    const data = await requestGetCampers();
    return data;
  } catch (err) {
    console.error('Error fetching campers:', err);
    return thunkAPI.rejectWithValue(err.message);
  }
});

export { getCampers };
