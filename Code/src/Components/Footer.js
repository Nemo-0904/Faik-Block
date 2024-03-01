import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <div className="footer__logo"></div>

          <h2>
            <b>
              {" "}
              <FaLocationDot />
              Find us
            </b>
          </h2>

          <address>
            VJTI, Matunga-Mumbai 400019
            <br />
            {/* <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a> */}
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">
              <b>Social</b>
            </h2>

            <ul className="nav__ul">
              <li>
                <a href="/">LinkdeIn</a>
              </li>

              <li>
                <a href="https://github.com/NaikVedhas/Fake-Product-Identification-System">
                  Github
                </a>
              </li>

              <li>
                <a href="/">Twitter</a>
              </li>

              <li>
                <a href="/">Instagram</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">
              <b>Useful Links</b>
            </h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#list-item-1">Home</a>
              </li>

              <li>
                <a href="/">Our Service</a>
              </li>

              <li>
                <a href="/LoginSignUp">Login</a>
              </li>

              <li>
                <a href="/JoinUs">Join Us</a>
              </li>

              <li>
                <a href="/#list-item-2">About us</a>
              </li>

              <li>
                <a href="#list-item-3">Statistic</a>
              </li>

              <li>
                <a href="/Team">Team</a>
              </li>

              <li>
                <a href="/Team">Contact Us</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">
              <b>Legal</b>
            </h2>

            <ul className="nav__ul">
              <li>
                <a href="/">Privacy Policy</a>
              </li>

              <li>
                <a href="/">Terms of Use</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p> Copyright &copy; 2024 Something. All rights reserved.</p>

          <div className="legal__links">
            <span>
              <b>
                Made with <span className="heart">♥</span> by{" "}
                <span style={{ color: "#8860D0" }}>Ethereal Elites</span>
              </b>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
