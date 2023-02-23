import {
  GET_COURS_SUCCESS,
  GET_COURS,
  GET_COURS_FAIL,
  ADD_COURS,
  DELETE_COURS,
  EDIT_COURS,
} from "../Constantes/Cours";

const initialState = {
  coursList: [],
  errors: null,
  status: "",
};
console.log(initialState);
const coursReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COURS:
      return { ...state, status: "request send" };
    case GET_COURS_SUCCESS:
      return { ...state, status: "success", coursList: payload };
    case GET_COURS_FAIL:
      return { ...state, status: "fail", errors: payload };

    case ADD_COURS:
      return { ...state, status: payload };
      case EDIT_COURS:
        return { ...state, status: payload };
    case DELETE_COURS:
      return { ...state, status: payload };

    default:
      return state;
  }
};
export default coursReducer;
