import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(passwordVisibility === false ? true : false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 adjust-login-and-signup-size">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor='username-input' className='label p-2 pb-1 cursor-pointer'>
            <span className='text-base label-text text-white'>Username</span>
          </label>
          <div>
            <input type="text" id='username-input' placeholder="Enter username" className="input input-bordered w-full h-10" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <label htmlFor='password-input' className='label p-2 pb-1 cursor-pointer'>
            <span className='text-base label-text text-white'>Password</span>
          </label>
          <div className='relative'>
            <input type={!passwordVisibility ? "password" : "text"} id='password-input' placeholder="Enter password" className="input input-bordered w-full h-10" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='eye-icon' onClick={() => togglePasswordVisibility()}>
              {!passwordVisibility ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <span className='text-sm label-text text-white'>
            Don't have an account? <Link to="/signup" className='text-md hover:underline font-bold text-blue-600 mt-2 inline-block'>
              Sign Up
            </Link>
          </span>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login