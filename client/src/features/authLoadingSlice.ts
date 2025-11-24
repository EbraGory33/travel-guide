import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface SavedTrip {
  tripId: string;
}
export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  savedTrips: SavedTrip[];
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      if (state.user) state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setUser, removeUser, updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
