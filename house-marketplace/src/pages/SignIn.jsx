import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back!
          </p>
        </header>
        <form>
          <input type="email"
            className="emailInput"
            placeholder="email"
            id="email"
            value={email}
            onChange={handleChange}
          />

          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'}
              className="passwordInput"
              placeholder="Password"
              name="password"
              value={password}
              id='password'
              onChange={handleChange}
            />

            <img src={visibilityIcon} alt="show password" className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to='/forgotPassword' className="forgotPasswordLink">Forgot Password</Link>
          <div className="signInBar">
            <p className="signInText">
              Sign In
            </p>
            <button className="signInButton">
              <ArrowRightIcon fill="#FFF" width='34px' height='34px'/>
            </button>
          </div>
        </form>
        {/* Google OAuth component */}
        <Link to='/signup' className='registerLink'>Sign Up Instead</Link>
      </div>
    </>
  )
}

export default SignIn;
