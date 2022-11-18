import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  }); 

  const {name, email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timeStamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back!
          </p>
        </header>
        <form onSubmit={handleSubmit}>
        <input type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={handleChange}
          />

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
          <div className="signUpBar">
            <p className="signUpText">
              Sign Up
            </p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#FFF" width='34px' height='34px'/>
            </button>
          </div>
        </form>
        {/* Google OAuth component */}
        <Link to='/signin' className='registerLink'>Sign In Instead</Link>
      </div>
    </>
  )
}

export default SignUp;
