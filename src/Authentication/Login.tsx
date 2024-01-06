import TopHeader2 from "../Navigations/TopHeader2";
import "./Login.css";
function Login() {
  return (
    <>  
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
          By continuing, I agree to the{" "}
          <a
            style={{
              color: "#f54e77",
              textDecoration: "none",
              fontWeight: "700",
            }}
            href="#"
          >
            Terms & Use
          </a>{" "}
          &{" "}
          <a
            style={{
              color: "#f54e77",
              textDecoration: "none",
              fontWeight: "700",
            }}
            href="#"
          >
            Privacy Policy
          </a>
        </span>
        <button className="login_button">Continue</button>
        <span className="login_help">
          Have trouble logging in?
          <a
            style={{
              color: "#f54e77",
              textDecoration: "none",
              fontWeight: "700",
            }}
            href="#"
          >
            Get help
          </a>          
        </span>
      </div>
    </div>
    </>
  );
}

export default Login;
