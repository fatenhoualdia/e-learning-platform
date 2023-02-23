
import axios from "axios";
import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  DELETE_USER_FAIL,
} from "../Constantes/listuser";
import { LOAD_USER } from "../Constantes/User";
import { toast } from "react-toastify";
export const getuser = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    let result = await axios.get("http://localhost:5000/user/all");
    console.log(result.data.result);
    dispatch({ type: GET_USER_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.data });
    console.log(error);
  }
};

export const edituser =
  ({ id, user }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_USER });
    console.log(user);
    try {
      const result = await axios.put(`http://localhost:5000/user/${id}`, user);
      dispatch({ type: LOAD_USER, payload: result });
      toast.success("updated succefully !");
    } catch (error) {
      const { errors } = error.response.data;
      console.log(errors);
      // dispatch({type:FAIL_USER,payload:error.response.data});
    }
  };

export const deleteuser =
  ({ id }) =>
  async (dispatch) => {
    try {
      let result = await axios.delete(`http://localhost:5000/user/${id}`);
      dispatch({ type: DELETE_USER });
      dispatch(getuser());
    } catch (error) {
      dispatch({ type: DELETE_USER_FAIL, payload: error.data });
      toast.error("user deleted! ");
    }
  };
