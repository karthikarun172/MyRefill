import httpServices from "../Services/httpServices";
import { apiEndPoint } from "../config.json";
import ContextProvider from "./ContextProvider";
import { AsyncStorage } from "react-native";

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGN_UP_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGN_IN":
      return { ...state, token: action.payload };
    case "SIGN_OUT":
      return { token: null, errorMessage: "" };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    case "REGISTERED_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const locatSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGN_IN", payload: token });
  } else {
    return null;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

const Registerd_User = (dispatch) => async (_id) => {
  try {
    const response = await httpServices.get(apiEndPoint + `/user/${_id} `);
    dispatch({ type: "REGISTERED_USER", payload: response.data });
  } catch (er) {
    console.log(er);
  }
};

const Register = (dispatch) => async (
  fullname,
  email,
  password,
  phoneNumber,
  confirmPassword,
  callback
) => {
  try {
    const response = await httpServices.post(apiEndPoint + "/user", {
      fullname,
      email,
      password,
      phoneNumber,
      confirmPassword,
    });
    dispatch({ type: "SIGN_IN", payload: response.data });
    if (callback) {
      callback();
    }
  } catch (er) {
    dispatch({ type: "SIGN_UP_ERROR", payload: "error" });
  }
};

const Login = (dispatch) => async (email, password, callback) => {
  try {
    const response = await httpServices.post(apiEndPoint + "/auth/login", {
      email,
      password,
    });
    const responseState = JSON.stringify(response.data);
    await AsyncStorage.setItem("token", responseState);
    dispatch({ type: "SIGN_IN", payload: responseState });
  } catch (er) {
    dispatch({ type: "SIGN_IN_ERROR", payload: "Invalid Details" });

  }
  if (callback) {
    callback();
  }
};

const SignOut = (dispatch) => () => {
  AsyncStorage.removeItem("token");
  dispatch({ type: "SIGN_OUT" });
};

export const { Context, Provider } = ContextProvider(
  RegisterReducer,
  { Register, Login, locatSignIn, clearErrorMessage, SignOut, Registerd_User },
  { token: null, errorMessage: "", user: [] }
);
