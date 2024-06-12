import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TOrganizer } from "@/types";

type TIState = {
  organizer: TOrganizer | null;
  accessToken: string | null;
};

const initialState: TIState = {
  organizer: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { organizer, accessToken } = action.payload;

      state.organizer = organizer;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.organizer = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentUser = (state: RootState) => state.auth.organizer;
