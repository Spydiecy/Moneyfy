import React, { useState } from "react";
import { expensory_ic_backend } from "../../declarations/expensory_ic_backend";
import { useNavigate } from "react-router-dom";
import './RegisterLoginUser.css'; 
import logo from '../src/home/Assets/logo.png';
import login_pg from '../src/home/Assets/loginpage.jpg';
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

const RegisterLoginUser = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // New state variable for error
  const [success, setSuccess] = useState(""); // New state variable for success

  const handleClick = () => {
    setIsLoggingIn(!isLoggingIn);
    setError(""); // Reset error on switch
    setSuccess(""); // Reset success on switch
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error on each submit
    setSuccess(""); // Reset success on each submit

    if (!username || !password || (!isLoggingIn && !confirmPassword)) {
      setError("All fields must be filled");
      return;
    }

    if (isLoggingIn) {
      const loginRes = await expensory_ic_backend.verifyuser(
        username,
        password
      );
      if (loginRes == "Success") {
        setSuccess("Login Successful");
        setTimeout(() => navigate("/app"), 2000); // Wait 2 seconds before navigating
      } else {
        setError("Login Failed - Invalid Credentials");
      }
    } else {
      if (password === confirmPassword) {
        const signUpRes = await expensory_ic_backend.registerUser(
          username,
          password
        );
        if (signUpRes == true) {
          setSuccess("Signup Successful");
          setTimeout(() => handleClick(), 2000); // Wait 2 seconds before switching to login
        } else {
          setError("Username already exists");
        }
      } else {
        setError("Confirm Password does not match Password");
      }
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='h-100'>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src={login_pg} alt="Moneyfy" className='rounded-start w-100 h-80'/>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBCardImage src={logo} alt="Moneyfy" className='rounded-start w-15' style={{ width: '12%', height: 'auto' }}/>
                <span className="h1 fw-bold mb-0" style={{fontFamily: 'Felix Titling', margin: '10px'}}>MONEYFY</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px', fontFamily: 'Roboto'}}>Money simplified.</h5>
              {error && <div className="error">{error}</div>}
              {success && <div className="success">{success}</div>}
              <MDBInput wrapperClass='mb-4' id='formControlLg' type='text' placeholder="Username" size="lg" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
              {!isLoggingIn && (
                <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='formControlLg' type='password' size="lg" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              )}
              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>{isLoggingIn ? "Login" : "Sign Up"}</MDBBtn>
              {isLoggingIn ? (
                <p onClick={handleClick}>Don't have an account?</p>
              ) : (
                <p onClick={handleClick}>Already have an account?</p>
              )}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default RegisterLoginUser;