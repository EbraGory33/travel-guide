import { apiFetch } from "../utils/apiClients.ts";
import { setUser, removeUser, updateUser } from "../features/userSlice.ts";
import type { AppDispatch } from "../app/store";

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}
export interface LogInData {
  email: string;
  password: string;
}

const signUp = async (signUpData: SignUpData) => {
  try {
    // setLoading(true)
    await apiFetch("auth/register", true, "POST", signUpData);
    console.log("Registered succesfully");
  } catch (error) {
    console.error("Error signing up", error);
  } finally {
    // setLoading(false);
  }
};

const logIn = async (logInData: LogInData) => {
  try {
    await apiFetch("auth/login", true, "POST", logInData);
    console.log("Logged In succesfully");
  } catch (error) {
    console.error("Error signing in", error);
  }
};

const logout = async (dispatch: AppDispatch) => {
  try {
    await apiFetch("auth/logout", true, "POST");
    dispatch(removeUser());
    console.log("Logged out succesfully");
  } catch (error) {
    console.error("Error logging out", error);
  }
};
const verify = async (dispatch: AppDispatch) => {
  try {
    // setLoading(true)
    const userData = await apiFetch("auth/authenticate", true);
    dispatch(setUser(userData));
    console.log("User has been verified");
  } catch (error) {
    await logout(dispatch);
  } finally {
    // setLoading(false);
  }
};
const update = async (dispatch: AppDispatch, id: string, data: any) => {
  try {
    const userData = await apiFetch(`auth/users/${id}`, true, "PATCH", data);
    dispatch(updateUser(userData));
  } catch (error) {
    console.error("Error logging out", error);
  }
};
const deleteUser = async (dispatch: AppDispatch, id: string) => {
  try {
    await apiFetch(`auth/users/${id}`, true, "DELETE");
    dispatch(removeUser());
  } catch (error) {
    console.error("Error logging out", error);
  }
};

export { signUp, logIn, logout, update, deleteUser, verify };
