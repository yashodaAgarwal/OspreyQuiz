import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useTheme } from "../../context";
import { useAuth } from "../../context/AuthContext";
import "../Login/login.css";
import "./signup.css"


export default function Signup() {
  const {theme} = useTheme()
  const { handleSignupData } = useAuth();
  const [isError, setIsError] = useState("");
  const [message, showMessage] = useState("");
  const [User, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const { firstName, lastName, email, password } = User;

  const handleChange = (name) => (event) => {
    setUser({ ...User, error: false, [name]: event.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      if (password.length > 8) {
        handleSignupData(firstName, lastName, email, password);
        showMessage("Account register successfully!!");
        setIsError("")
      } else {
        setIsError("password should be greater than 6 character");
      }
    } else {
      setIsError("please fill all the field");
    }
  };
  return (
    <div>
    <Navbar />
   <div
     className={
       theme === "dark"
         ? "homepage-container  dark"
         : "homepage-container light"
     }
   >
      <div className="center">
        <div className="Signin-container login-container">
          <div className="login-heading">Sign Up</div>
          {isError && (
            <div className="alert-items alert-danger ">
              <i className="fas fa-exclamation-triangle alert-icon"></i>
              {isError}
            </div>
          )}
          {message && (
            <div className="alert-items alert-success ">
              <i className="fas fa-exclamation-triangle alert-icon"></i>
              {message}
            </div>
          )}
          <form action="#" onSubmit={handleSignup}>
            <div className="data">
              <label className="label-class" >
                First Name
              </label>
              <input
                onChange={handleChange("firstName")}
                type="text"
                value={firstName}
                required
              />
            </div>
            <div className="data">
              <label className="label-class" >
                Last Name
              </label>
              <input
                onChange={handleChange("lastName")}
                type="text"
                value={lastName}
                required
              />
            </div>
            <div className="data">
              <label className="label-class" >
                Email Address
              </label>
              <input
                onChange={handleChange("email")}
                type="email"
                value={email}
                required
              />
            </div>
            <div className="data">
              <label className="label-class" >
                Password
              </label>
              <input
                onChange={handleChange("password")}
                type="password"
                value={password}
                placeholder="***********"
                required
              />
            </div>

            <div>
              <input type="checkbox"  required />
              <span className="terms">I accept all terms and conditions</span>
            </div>
            <div>
              <button className="btn login-btn" type="submit">
                Create New Account
              </button>
            </div>
            <div className="create-new-account">
              <Link to="/Login">
                Already have an account
                <i className="fas fa-angle-right create-icon"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
      </div>
</div>

  );
}