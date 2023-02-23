import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "../../../JS/Actions/User";
import "./Forme.css";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../images/logo.png";
function Sign() {
  const [inptype, setinptype] = useState("password");

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const conta = document.getElementById("conta");

    signUpButton.addEventListener("click", () => {
      conta.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      conta.classList.remove("right-panel-active");
    });
  }, []);
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer/>
      <div className="head">
        <div>
          <img src={logo} className="logo" />
        </div>
        <div>
          <Link to="/">
            {" "}
            <ion-icon name="close-outline"></ion-icon>
          </Link>
        </div>
      </div>
      <div className="conta" id="conta">
        <div className="form-conta sign-up-conta">
          <form action="#">
            <h1>Create Account</h1>

            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="pass">
              <input
                type={inptype}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <ion-icon
                name={inptype == "password" ? "eye-outline" : "eye-off-outline"}
                onClick={() =>
                  inptype == "password"
                    ? setinptype("text")
                    : setinptype("password")
                }
              ></ion-icon>
            </div>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  registerUser({ name, lastname, email, password }, navigate)
                );
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-conta sign-in-conta">
          <form action="#">
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="pass">
              <input
                type={inptype}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <ion-icon
                name={inptype == "password" ? "eye-outline" : "eye-off-outline"}
                onClick={() =>
                  inptype == "password"
                    ? setinptype("text")
                    : setinptype("password")
                }
              ></ion-icon>
            </div>

            <a href="#">Forgot your password?</a>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(loginUser({ email, password }, navigate));
              }}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overl-conta">
          <div className="overl">
            <div className="overl-panel overl-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className=" button ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overl-panel overl-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className=" button ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;

