
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGE,
  GET_MESSAGE_FAIL,
  GET_MESSAGE_SUCCESS,
} from "../Constantes/message";

const initialState = {
  messageList: [],
  errors: null,
  status: "",
};
console.log(initialState);
const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MESSAGE:
      return { ...state, status: "request send" };
    case GET_MESSAGE_SUCCESS:
      return { ...state, status: "success", messageList: payload };
    case GET_MESSAGE_FAIL:
      return { ...state, status: "fail", errors: payload };
    case ADD_MESSAGE:
      return { ...state, status: payload };
    case DELETE_MESSAGE:
      return { ...state, status: payload };

    default:
      return state;
  }
};
export default messageReducer;
