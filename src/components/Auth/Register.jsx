import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy register logic
    if (name && email && password) {
      onRegister(email);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/10 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-secondary">Đăng ký GeminiShop</h2>
        <input
          type="text"
          placeholder="Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md border-secondary focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md border-secondary focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-md border-secondary focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white duration-200 rounded-md bg-secondary hover:bg-primary"
        >
          Đăng ký
        </button>
        <p className="mt-4 text-sm text-center">
          Đã có tài khoản? <a href="#" className="text-accent">Đăng nhập</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
