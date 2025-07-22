import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Logo from "../assets/logo.png";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser(email);
    // Redirect or show success
  };
  const handleRegister = (email) => {
    setUser(email);
    // Redirect or show success
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-main)] dark:bg-gray-900 px-2 py-6">
      <div className="flex flex-col items-center mb-8">
        <a href="/" title="Trang chủ">
          <img src={Logo} alt="GeminiShop Logo" className="w-20 h-20 mb-2 duration-300 border-4 rounded-full shadow-lg cursor-pointer hover:scale-110 border-white/80" />
        </a>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text" style={{ color: "var(--primary)" }}>GeminiShop</h1>
      </div>
      <div className="flex flex-col w-full max-w-md gap-6 p-8 shadow-2xl bg-[var(--bg-card)] rounded-2xl dark:bg-gray-800/90 backdrop-blur-md">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-full font-bold text-lg shadow-md duration-200 transition-all whitespace-nowrap ${showLogin ? 'bg-[var(--primary)] text-white' : 'bg-white text-[var(--primary)] border border-[var(--primary)]'} hover:bg-[var(--secondary)] hover:text-white`}
            onClick={() => setShowLogin(true)}
          >
            Đăng nhập
          </button>
          <button
            className={`px-6 py-2 rounded-full font-bold text-lg shadow-md duration-200 transition-all whitespace-nowrap ${!showLogin ? 'bg-[var(--secondary)] text-white' : 'bg-white text-[var(--secondary)] border border-[var(--secondary)]'} hover:bg-[var(--primary)] hover:text-white`}
            onClick={() => setShowLogin(false)}
          >
            Đăng ký
          </button>
        </div>
        <div className="w-full min-h-[340px] flex items-center justify-center">
          {showLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Register onRegister={handleRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
