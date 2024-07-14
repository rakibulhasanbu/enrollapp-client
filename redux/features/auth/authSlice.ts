import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TOrganizer, TUser } from "@/types";

type TIState = {
  user: TUser | null;
  organizer: TOrganizer | null;
  accessToken: string | null;
};

const initialState: TIState = {
  user: null,
  organizer: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, accessToken } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
    },
    setOrganizer: (state, action) => {
      const { organizer, accessToken } = action.payload;

      state.organizer = organizer;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.organizer = null;
      state.user = null;
    },
  },
});

export const { setOrganizer, logOut, setUser } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentOrganizer = (state: RootState) =>
  state.auth.organizer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
