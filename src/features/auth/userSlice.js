import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-keys";
import { setToken } from "../../utils/jwt";

// export const register = createAsyncThunk('user/register', async (payload) => {
//   const data = await userApi.register(payload);

//   // save data to local storage
//   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
//   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

//   return data.user;
// });

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.accessToken);
  setToken(data.accessToken);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.currentUser = {};
    },
    updateUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.current = action.payload;
    // },

    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout, updateUser } = actions;
export default reducer;
