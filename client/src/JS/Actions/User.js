import { toast } from "react-toastify";
import {
  FAIL_USER,
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  CURRENT_USER,
} from "../Constantes/User";
import axios from "axios";
export const registerUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    //{newUser,msg,token}
    // localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_USER, payload: result.data });
    navigate("/profile/aboutme");
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("http://localhost:5000/user/login", user);
    //{User,msg,token}
    dispatch({ type: LOGIN_USER, payload: result.data });
    if (localStorage.getItem("isAdmin") == "true") {
      navigate("/admin");
      toast.success("welcome Admin");
    } else {
      navigate("/profile/aboutme");
      toast.success("welcome");
    }
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
    }
    if (msg) {
      toast.error(msg);
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("http://localhost:5000/user/current", options);
    //user
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
export const logout = () => {
  toast.warning("you have ben logged out");
  return {
    type: LOGOUT_USER,
  };
};
