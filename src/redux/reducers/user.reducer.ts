import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { HTTPService } from '../../services/HTTPService';
import { PostUserArg, RejectValue, UserData, UserState } from '../../types/user';

// Thunk
export const createUser = createAsyncThunk<UserData, PostUserArg, { rejectValue: RejectValue }>(
  'user/createUser',
  async ({ params, body }: PostUserArg, { rejectWithValue }) => {
    try {
      const res: AxiosResponse<UserData> = await HTTPService.post(params, body);
      return res.data;
    } catch (error) {
      // Handle Axios errors
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Handle server error response
          return rejectWithValue({
            message: `There's something wrong with the request, Please check your fields`,
          });
        } else if (error.request) {
          // Handle no response from server
          return rejectWithValue({
            message: 'Server is not responding, Try again later',
          });
        } else {
          // Handle all other errors from axios
          return rejectWithValue({
            message: error?.message || 'Something went wrong, Try again later',
          });
        }
      }
      // Handle non-Axios errors
      else {
        return rejectWithValue({ message: 'Unknown error occurred' });
      }
    }
  }
);

// Initial state
const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

//  Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus(state) {
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
      state.error = null;
    });
    builder.addCase(createUser.pending, state => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = 'failed';
      if (action.payload) state.error = action.payload.message;
      else if (action.error.message) state.error = action.error.message;
      else state.error = 'Unknown error occurred';
    });
  },
});

export const { resetStatus } = userSlice.actions;

export default userSlice.reducer;
