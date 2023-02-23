import {
  GET_COURS_SUCCESS,
  GET_COURS,
  GET_COURS_FAIL,
  ADD_COURS,
  DELETE_COURS,
  EDIT_COURS,
  EDIT_COURS_FAIL,
  DELETE_COURS_FAIL,
} from "../Constantes/Cours";
import axios from "axios";

export const getcours = () => async (dispatch) => {
  dispatch({ type: GET_COURS });
  try {
    let result = await axios.get("http://localhost:5000/cours/all");
    console.log(result.data.result);
    dispatch({ type: GET_COURS_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_COURS_FAIL, payload: error.data });
    console.log(error);
  }
};
export const addcours = (newcours) => async (dispatch) => {
  try {
    let result = axios.post("http://localhost:5000/cours/add", newcours);
    dispatch({ type: ADD_COURS, payload: "cours added" });
    dispatch(getcours());
  } catch (error) {
    dispatch({ type: GET_COURS_FAIL, payload: error.data });
    console.log(error);
  }
};

export const editcours =
  ({ id, participant }) =>
  async (dispatch) => {
    try {
      let result = axios.put(
        `http://localhost:5000/cours/nbr/${id}`,
        participant
      );
      console.log(id);
      dispatch({ type: EDIT_COURS, payload: "cours update" });
      dispatch(getcours());
    } catch (error) {
      dispatch({ type: EDIT_COURS_FAIL, payload: error.data });
      console.log(error);
    }
  };

export const ratecours =
  ({ id, index }) =>
  async (dispatch) => {
    try {
      console.log(id, index);
      let result = axios.put(`http://localhost:5000/cours/rate/${id}`, {
        rate: index,
      });
      console.log(id);
      dispatch({ type: EDIT_COURS, payload: "cours update" });
      dispatch(getcours());
    } catch (error) {
      dispatch({ type: EDIT_COURS_FAIL, payload: error.data });
      console.log(error);
    }
  };

export const deletecours =
  ({ id }) =>
  async (dispatch) => {
    try {
      let result = await axios.delete(`http://localhost:5000/cours/${id}`);
      dispatch({ type: DELETE_COURS });
      dispatch(getcours());
    } catch (error) {
      dispatch({ type: DELETE_COURS_FAIL, payload: error.data });
    }
  };

