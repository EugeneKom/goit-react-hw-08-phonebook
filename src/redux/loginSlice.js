import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const loginSlice = createSlice({
  name: 'Credentials',
  initialState,
  reducers: {
    setLoginCredentials: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { setLoginCredentials } = loginSlice.actions;

export const addLoginSlice = loginSlice.reducer;
