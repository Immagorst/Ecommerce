import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/10 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Đăng nhập GeminiShop</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-md border border-primary focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-md border border-primary focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-secondary duration-200"
        >
          Đăng nhập
        </button>
        <p className="mt-4 text-center text-sm">
          Chưa có tài khoản? <a href="#" className="text-accent">Đăng ký</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
