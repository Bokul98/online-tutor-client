import React, { useState, useContext } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import Lottie from 'lottie-react';
import LottieLogin from '../../assets/Lotties/Login/Login.json';
import SocialLogin from '../Shared/SocialLogin';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import Swal from 'sweetalert2';

const Login = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signInWithGoogle } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setFormData({ email: '', password: '' });
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      });
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      setFormData({ email: '', password: '' });
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in with Google!',
      });
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-[calc(100vh-100px)] py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isDark ? 'theme-bg-secondary' : 'bg-gray-50'
      }`}>
      <div className={`max-w-4xl w-full flex flex-col md:flex-row items-center justify-center p-6 rounded-xl shadow-lg border gap-8 transition-all duration-300 ${isDark ? 'theme-card-bg theme-border theme-shadow' : 'bg-white border-gray-200'
        }`}>
        {/* Lottie Animation (Left Side) */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <Lottie animationData={LottieLogin} loop={true} className="max-h-80 w-full" />
        </div>

        {/* Login Form (Right Side) */}
        <div className="max-w-md w-full space-y-8 p-6 md:p-10">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
              Login to Your Online Tutor Account
            </h2>
            <p className={`mt-2 text-center text-sm transition-colors duration-300 ${isDark ? 'theme-text-secondary' : 'text-gray-600'
              }`}>
              Don't have an account? {' '}
              <NavLink to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                Register now
              </NavLink>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300 ${isDark
                    ? 'theme-card-bg theme-border theme-text-primary placeholder-gray-400'
                    : 'border-gray-300 placeholder-gray-500 text-gray-900'
                    }`}
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300 ${isDark
                    ? 'theme-card-bg theme-border theme-text-primary placeholder-gray-400'
                    : 'border-gray-300 placeholder-gray-500 text-gray-900'
                    }`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className={`ml-2 block text-sm transition-colors duration-300 ${isDark ? 'theme-text-primary' : 'text-gray-900'
                  }`}>
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center font-semibold mt-4">
                {error}
              </p>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#00C6FF] to-[#0072FF] hover:from-[#0072FF] hover:to-[#00C6FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* Heroicon name: solid/lock-closed */}
                  <svg className="h-5 w-5 text-blue-300 group-hover:text-blue-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2V7a3 3 0 10-6 0v2h6z" clipRule="evenodd" />
                  </svg>
                </span>
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
            <SocialLogin onGoogleLogin={handleGoogleLogin} loading={loading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;