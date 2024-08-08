import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { requestGetCampers } from '../../services/camperApi';

const getCampers = createAsyncThunk('adverts/get', async (_, thunkAPI) => {
  try {
    const data = await requestGetCampers();
    return data;
  } catch (err) {
    toast.error(
      'Error fetching campers. Try reloading the page or come back later.'
    );
    return thunkAPI.rejectWithValue(err.message);
  }
});

export { getCampers };
