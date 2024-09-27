import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TOrganizer, TUser } from "@/types";

type TIState = {
  user: TUser | null;
  organizer: TOrganizer | null;
  accessToken: string | null;
  isLoading: boolean;
};

const initialState: TIState = {
  user: null,
  organizer: null,
  accessToken: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isLoading = false;
      localStorage.setItem("accessToken", action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setOrganizer: (state, action) => {
      state.organizer = action.payload;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.organizer = null;
      state.user = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setOrganizer, logOut, setUser, setAccessToken } =
  authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentOrganizer = (state: RootState) =>
  state.auth.organizer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
