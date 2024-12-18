import { Link } from 'react-router';
import registerBg from '../assets/login.png'; // gunakan gambar yang sama seperti login, ubah jika ada gambar berbeda
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ActionButton from '../components/ActionButton';

function Register() {
  const [registerForm, setRegisterForm] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setErrorMsg('');
    setSuccessMsg('');

    // Basic validation
    if (
      !registerForm.fullname ||
      !registerForm.username ||
      !registerForm.email ||
      !registerForm.password
    ) {
      setErrorMsg('Mohon lengkapi semua kolom.');
      return;
    }

    try {
      // Make fetch API call to backend registration endpoint
      const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerForm),
      });

      // Parse the response
      const result = await response.json();

      // Handle response
      if (response.ok) {
        setSuccessMsg(
          'Registrasi berhasil! Anda akan diarahkan ke halaman login.'
        );

        // Redirect to login after 3 seconds
        setTimeout(() => navigate('/login'), 3000);
      } else {
        // Handle registration failure from backend
        setErrorMsg(result.message || 'Registrasi gagal. Silakan coba lagi.');
      }
    } catch (err) {
      // Handle network or server errors
      console.log(err);
      setErrorMsg('Terjadi kesalahan, coba lagi nanti.');
    }
  };

  return (
    <section className="flex w-full h-screen bg-white">
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div>
          <img className="w-[290px] mx-auto" src={logo} alt="logo" />

          <form className="flex flex-col mt-16 gap-y-5" onSubmit={handleSubmit}>
            {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
            {successMsg && (
              <p className="text-green-500 text-center">{successMsg}</p>
            )}

            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-gray-400"
              name="fullName"
              type="text"
              placeholder="Nama Lengkap"
              onChange={handleChange}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-gray-400"
              name="userName"
              type="text"
              placeholder="User Name"
              onChange={handleChange}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-gray-400"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-gray-400"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <ActionButton onClick={handleSubmit}>Daftar</ActionButton>
          </form>
          <div className="w-full mt-4 text-black">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-[#19918F] text-left">
              Login di sini
            </Link>
          </div>
        </div>
      </div>
      <img
        src={registerBg}
        alt="register background"
        className="w-1/2 object-cover"
      />
    </section>
  );
}

export default Register;
