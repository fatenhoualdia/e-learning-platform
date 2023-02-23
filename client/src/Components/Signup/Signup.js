import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../JS/Actions/User";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { ToastContainer } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="txt"
              placeholder="Lastname"
              onChange={(e) => setlastName(e.target.value)}
            />
            <input
              type="text"
              name="txt"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  registerUser({ name, lastname, email, password }, navigate)
                );
              }}
            >
              Sign up
            </button>
          </form>
        </div>

        <div class="login">
          <form>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(loginUser({ email, password }, navigate));
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Signup;

