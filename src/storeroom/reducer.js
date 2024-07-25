import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loggedInUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { register } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
