import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

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
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full h-10" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <span className='text-sm label-text text-white'>
            Don't have an account? <Link to="/signup" className='text-md hover:underline font-bold text-blue-600 mt-2 inline-block'>
              Sign Up
            </Link>
          </span>

          {/* <Link to="/signup" className='text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block'>
            Don't have an account? Sign Up
          </Link> */}

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



// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="input input-bordered w-full h-10" />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type="text" placeholder="Enter password" className="input input-bordered w-full h-10" />
//           </div>

//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Don't have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login