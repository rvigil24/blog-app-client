import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('jwt')
  ? {
      isLoggedIn: true,
      token: localStorage.getItem('jwt'),
    }
  : {
      isLoggedIn: false,
      token: null,
    };

console.log(initialState);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (_, { payload }) => {
      return {
        isLoggedIn: true,
        token: payload,
      };
    },
    register: (_, { payload }) => {
      return {
        isLoggedIn: true,
        token: payload,
      };
    },
    logout: (_state, _action) => {
      return {
        isLoggedIn: false,
        token: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, register, logout } = authSlice.actions;
