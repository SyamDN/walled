import { Link } from 'react-router';
import loginBg from '../assets/login.png';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ActionButton from '../components/ActionButton';
import useFetch from '../hooks/useFetch';

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
  const response = useFetch('http://localhost:8080/auth/login');

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (response) {
        const user = response[0]?.find(
          (each) =>
            each.email === loginForm.email &&
            each.password === loginForm.password
        );
        if (user) {
          localStorage.setItem('login', JSON.stringify(user));
          navigate('/dashboard');
        } else {
          setErrorMsg('Invalid email or password');
        }
      }
    } catch (err) {
      console.log(err);
      setErrorMsg('Something went wrong');
    }
  };

  return (
    <section className="flex w-full h-screen bg-white">
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div>
          <img className="w-[290px] mx-auto" src={logo} alt="logo" />

          <form className="flex flex-col mt-24 gap-y-5">
            {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <ActionButton
              disabled={!loginForm.email || !loginForm.password}
              onClick={handleSubmit}
            >
              Login
            </ActionButton>
          </form>
          <div className="w-full mt-4 text-black">
            Belum punya akun?{' '}
            <Link to="/register" className="text-[#19918F] text-left">
              Daftar di sini
            </Link>
          </div>
        </div>
      </div>
      <img
        src={loginBg}
        alt="login background"
        className="w-1/2 object-cover"
      />
    </section>
  );
}

export default Login;
