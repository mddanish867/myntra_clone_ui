import { Link } from "react-router-dom";
import TopHeader2 from "../Navigations/TopHeader2";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="header">
        <TopHeader2 />
      </div>
      <div className="manin_container">
        <div className="login_container">
          <img
            className="login_image"
            src="https://as1.ftcdn.net/v2/jpg/01/99/04/90/1000_F_199049065_qQujFa3FnAcomYDDQrD3gLVBdxtYugeb.jpg"
            alt="not found"
          ></img>
        </div>
        <div className="login_header">
          <span className="login_signup">
            <b>Login</b> or <b>Signup</b>
          </span>
        </div>
        <div className="login_control">
          <input
            className="login_text_input"
            placeholder="+91 | Mobile number"
            required
          />
          <span className="tems_of_use">
            By continuing, I agree to the
            <Link
              style={{
                color: "#f54e77",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to='/terms'
            >
              Terms & Use
            </Link>
            &
            <Link
              style={{
                color: "#f54e77",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to='/privacy'
            >
              Privacy Policy
            </Link>
          </span>
          <button className="login_button">Continue</button>
          <span className="login_help">
            Have trouble logging in?
            <Link
              style={{
                color: "#f54e77",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to='/help'
            >
              {" "}
              Get help
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
