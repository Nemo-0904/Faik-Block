import { useState } from "react";
import "./Navbar.css";
import { FcMenu } from "react-icons/fc";
import LoginSignUp from "./LoginSignUp";
import JoinUs from "./Joinus";
import { ConnectKitButton } from "connectkit";

const Nav = () => {
  const [othervalues, setothervalues] = useState(false);
  const [showlogin, setshowlogin] = useState(false);
  const [showjoinus, setshowjoinus] = useState(false);

  return (
    <>
      <nav>
        <div className="main-nav">
          <div className="nav-container">
            <div className="website-name">
              <div className="website-logo"></div>
            </div>
            <div
              className={othervalues ? "other othernew" : "other"}
              id="list-example"
            >
              <ul
                
              >
                <li>
                  <a href="#list-item-1" className="home">
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a href="#list-item-2" className="aboutus">
                    {" "}
                    AboutUs{" "}
                  </a>
                </li>
                <li>
                  <a href="#list-item-3" className="statistic">
                    {" "}
                    Statistic
                  </a>
                </li>
                <li>
                  <ConnectKitButton/>
                  {/* <button
                    onClick={() => {
                      setshowlogin(true);
                    }}
                    className="login"
                  >
                    Login
                  </button> */}
                </li>
                <li>
                  <button
                    onClick={() => {
                      setshowjoinus(true);
                    }}
                    className="joinus"
                  >
                    {" "}
                    Join us{" "}
                  </button>
                </li>
              </ul>
            </div>
            <div className="hambuger">
              <FcMenu
                className="fcmenu"
                onClick={() => setothervalues(!othervalues)}
              />
            </div>
          </div>
        </div>
        {showlogin && <LoginSignUp onClose={() => setshowlogin(false)} />}
        {showjoinus && (
          <JoinUs
            onClose={() => {
              setshowjoinus(false);
            }}
          />
        )}
      </nav>
    </>
  );
};

export default Nav;
