import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmedPassword: "",
    gender: ""
  })

  const { loading, signup } = useSignup();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(passwordVisibility === false ? true : false);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(confirmPasswordVisibility === false ? true : false);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 adjust-login-and-signup-size">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor='fullname-input' className='label p-2 pb-1 cursor-pointer'>
            <span className='text-base label-text text-white'>Full Name</span>
          </label>
          <div>
            <input type="text" id='fullname-input' placeholder="Enter full name" className="input input-bordered w-full h-10" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
          </div>

          <label htmlFor='username-input' className='label p-2 pb-1 cursor-pointer'>
            <span className='text-base label-text text-white'>Username</span>
          </label>
          <div>
            <input type="text" id='username-input' placeholder="Enter username" className="input input-bordered w-full h-10" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
          </div>

          <label htmlFor='password-input' className='label p-2 pb-1 cursor-pointer'>
            <span className='text-base label-text text-white'>Password</span>
          </label>
          <div className='relative'>
            <input type={!passwordVisibility ? "password" : "text"} id='password-input' placeholder="Enter password" className="input input-bordered w-full h-10" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
            <div className='eye-icon' onClick={() => togglePasswordVisibility()}>
              {!passwordVisibility ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <label htmlFor='confirm-password-input' className='label p-2 pb-1 cursor-pointer'>
            <span className='text-base label-text text-white'>Confirm Password</span>
          </label>
          <div className='relative'>
            <input type={!confirmPasswordVisibility ? "password" : "text"} id='confirm-password-input' placeholder="Confirm password" className="input input-bordered w-full h-10" value={inputs.confirmedPassword} onChange={(e) => setInputs({ ...inputs, confirmedPassword: e.target.value })} />
            <div className='eye-icon' onClick={() => toggleConfirmPasswordVisibility()}>
              {!confirmPasswordVisibility ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <span className='text-sm label-text text-white'>
            Already have an account? <Link to="/login" className='text-md hover:underline font-bold text-blue-600 mt-2 inline-block'>
              Login
            </Link>
          </span>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp