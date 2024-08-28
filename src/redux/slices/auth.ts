import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IAuthResponse } from "../../types/response";
import { IUser } from "../../types/user";

export interface IAuthState {
  token: string | null;
  user: IUser | null;
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
}

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
} satisfies IAuthState as IAuthState;

const loginThunk = createAsyncThunk<
  { token: string; user: IUser }, // Success payload type
  { email: string; password: string }, // Argument type
  { rejectValue: { error: Error; status?: number } } // Rejected payload type
>("auth/login", async (form, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/login`;
    const result: AxiosResponse<IAuthResponse> = await axios.post(url, form);
    return {
      token: result.data.data.token,
      user: result.data.data.user,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue({ error: error, status: error.response?.status });
    }
    return rejectWithValue({ error: new Error(String(error)) });
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string | null>) => {
      state.token = payload;
    },
    setUser: (state, { payload }: PayloadAction<IUser | null>) => {
      state.user = payload;
    },
    removeToken: (state) => {
      state.token = initialState.token;
      state.user = initialState.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.isFulfilled = false;
        state.isRejected = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.isRejected = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoading = false;
        state.isFulfilled = true;
      });
  },
});

export const { setToken, setUser, removeToken, logout } = authSlice.actions;

export const authAction = {
  ...authSlice.actions,
  loginThunk,
};
export type AuthState = ReturnType<typeof authSlice.reducer>;
export default authSlice.reducer;
