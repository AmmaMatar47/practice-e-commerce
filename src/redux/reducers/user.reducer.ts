import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { http } from '../../services/HTTPService';
import { LoginPostValues, PostUser, RejectValue, UserData, UserState } from '../../types/user';
import { API_ENDPOINTS } from '../../services/apiEndPoints';
import { authUser } from '../../services';

// Initial state
const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  status: 'idle',
  error: null,
};

// Thunk
export const createUser = createAsyncThunk<UserData, PostUser, { rejectValue: RejectValue }>(
  'user/createUser',
  async (body: PostUser) => {
    const UserData = await http.request<UserData>('post', API_ENDPOINTS.CREATE_USER, body);
    authUser({ email: UserData.email, password: UserData.password });
    return UserData;
  }
);

export const login = createAsyncThunk<
  UserData,
  LoginPostValues | undefined,
  { rejectValue: RejectValue }
>('user/login', async (body?: LoginPostValues | undefined) => {
  const isUserTokenAvailable = !!localStorage.getItem('credentials');
  if (body !== undefined && !isUserTokenAvailable) {
    await authUser({ email: body.email, password: body.password });
  }

  const UserData = await http.request<UserData>('get', API_ENDPOINTS.LOGIN);
  console.log({ UserData });
  return UserData;
});

//  Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.status = 'idle';
      state.error = null;
    },

    resetStatus(state) {
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.status = 'succeeded';
      state.error = null;
    });
    builder.addCase(createUser.pending, state => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = 'failed';
      if (action.error) state.error = action.error.message;
      else state.error = 'Unknown error occurred';
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.error = null;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(login.pending, state => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      if (action.error) state.error = action.error.message;
      else state.error = 'Unknown error occurred';
    });
  },
});

export const { resetStatus, logout } = userSlice.actions;

export default userSlice.reducer;
