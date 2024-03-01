import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./LoginSignUpJoinUs.css";

const LoginSignUp = ({ onClose }) => {
  const [action, setAction] = useState("Sign Up");
  const [WalletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [allEntries, setAllEntries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newEntry = {
      name: name,
      WalletAddress: WalletAddress,
      password: password,
    };

    setAllEntries([...allEntries, newEntry]);

    console.log(newEntry);
    setName("");
    setWalletAddress("");
    setPassword("");
  };

  useEffect(() => {
    const SignUpButton = document.getElementById("signup");
    const LoginButton = document.getElementById("login");
    const main = document.getElementById("main");

    SignUpButton.addEventListener("click", () => {
      main.classList.add("right-panel-active");
    });

    LoginButton.addEventListener("click", () => {
      main.classList.remove("right-panel-active");
    });

    return () => {
      SignUpButton.removeEventListener("click", () => {
        main.classList.add("right-panel-active");
      });
      LoginButton.removeEventListener("click", () => {
        main.classList.remove("right-panel-active");
      });
    };
  }, []);

  return (
    <>
      <div className="container-wrapper" onClick={onClose}></div>
      <div className="main-login-container">
        <IoCloseCircle className="icon-close" onClick={onClose} />
        <div className="login-container" id="main">
          <div className="loginarea">
            <div className="sign-up-div">
              <form onSubmit={onSubmitForm}>
                <h1>Sign Up</h1>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="User Name"
                  autoComplete="off"
                  required={true}
                />
                <input
                  type="text"
                  name="WalletAddress"
                  placeholder="Metamask Wallet Address"
                  value={WalletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  autoComplete="off"
                  required={true}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required={true}
                />
                <button className="btn">Sign Up</button>
              </form>
            </div>
            <div className="login-div">
              <form onSubmit={onSubmitForm}>
                <h1>Login</h1>
                <input
                  type="text"
                  name="WalletAddress"
                  placeholder="Metamask Wallet Address"
                  value={WalletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  autoComplete="off"
                  required={true}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required={true}
                />
                <p className="forgot-password">
                  Forgot Password? <a href="/">Click Here!</a>
                </p>
                <button className="btn">Login</button>
              </form>
            </div>
          </div>

          <div className="overlay-container">
            <div className="design">
              <div className="pill-1 rotate-45"></div>
              <div className="pill-2 rotate-45"></div>
              <div className="pill-3 rotate-45"></div>
              {/* <div className="pill-4 rotate-45"></div> */}
            </div>

            <div className="overlay">
              <div className="overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your metamask
                  Wallet address
                </p>
                <button id="login">Login</button>
              </div>
              <div className="overlay-right">
                <h1>New Here?</h1>
                <p>Enter your metamask wallet address deatails and Start</p>
                <button id="signup">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-container-mobile">
        <IoCloseCircle className="icon-close" onClick={onClose} />
        <form onSubmit={onSubmitForm}>
          <h1>{action} </h1>
          {action === "Login" ? (
            <div></div>
          ) : (
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              id="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          )}
          <input
            type="text"
            placeholder="Enter Your Wallet Address"
            name="WalletAddress"
            id="WalletAddress"
            autoComplete="off"
            value={WalletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required={true}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <p className="forgot-password">
              Forgot Password? <a href="/">Click Here!</a>
            </p>
          )}
          {action === "Sign Up" ? (
            <p>
              Not yet a member?{" "}
              <b
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login Here!
              </b>
            </p>
          ) : (
            <p>
              Already a member?{" "}
              <b
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Signup now
              </b>
            </p>
          )}
          <button className="btn"> {action} </button>
        </form>
      </div>
    </>
  );
};

export default LoginSignUp;
