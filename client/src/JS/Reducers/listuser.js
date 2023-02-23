import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} from "../Constantes/listuser";

const initialState = {
  userList: [],
  errors: null,
  status: "",
};
console.log(initialState);
const userlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state, status: "request send" };
    case GET_USER_SUCCESS:
      return { ...state, status: "success", userList: payload };
    case GET_USER_FAIL:
      return { ...state, status: "fail", errors: payload };

    case ADD_USER:
      return { ...state, status: payload };
      case EDIT_USER:
      return { ...state, loadUser: false, errors: payload };
    case DELETE_USER:
      return { ...state, status: payload };

    default:
      return state;
  }
};
export default userlistReducer;
