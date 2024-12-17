import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import Image from "../assets/main-img.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Mock API for login authentication
  const handleLogin = async (e) => {
    e.preventDefault();

    const mockApi = async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "pavan@gmail.com" && password === "pavan@123") {
            resolve({ success: true, token: "mock-token-123" });
          } else {
            reject(new Error("Invalid email or password"));
          }
        }, 1000); // Simulating network delay
      });
    };

    try {
      const response = await mockApi();

      if (response.success) {
        if (rememberMe) {
          // Save credentials to localStorage
          localStorage.setItem("user", JSON.stringify({ email, token: response.token }));
        }
        // Navigate to dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-5">
    <div className="min-h-screen bg-custom-color flex flex-col rounded-xl">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-0 px-4 md:px-10">
        <img src={Logo} alt="Logo" className="h-12 md:h-16 mb-4 md:mb-0" />
        <div className="text-center flex-grow">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mt-5">
            Lubricants reimagined
          </h1>
          <p className="text-sm text-gray-300">Since 190 years</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row flex-grow items-center justify-between px-4 md:px-10">
        {/* Left Section: Image */}
        <div className="flex-1 relative h-64 md:h-96 mb-6 md:mb-0 flex items-center justify-center">
          <img
            src={Image}
            alt="Machinery"
            className="rounded-lg object-contain w-full h-full"
            style={{ marginTop: "-10px" }}
          />
          <p className="absolute bottom-0 left-4 text-white text-lg md:text-xl font-bold text-center">
            The Future Of Sheet Metal Processing
          </p>
        </div>

        {/* Right Section: Login Form */}
        <div className="rounded-3xl w-full max-w-sm bg-gradient-to-br from-white/50 to-[#102d44] p-6 shadow-md">
          <h2 className="text-white text-2xl font-semibold mb-2 text-center md:text-left">
            Login
          </h2>
          <p className="text-gray-300 mb-6 text-center md:text-left">
            Welcome to Pavan LT
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email ID</label>
              <input
                type="email"
                placeholder="Enter your email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
                required
              />
            </div>
            {/* Remember Me and Forgot Password */}
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
              <label className="flex items-center space-x-2">
                <div className="relative ">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-slate-700 transition-all"></div>
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                </div>
                <span className="text-gray-300">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="hover:underline mt-2 md:mt-0 text-slate-200"
              >
                Forgot Password?
              </a>
            </div>
            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white font-bold py-2 rounded-md hover:bg-slate-200 transition mt-5"
            >
              LOGIN
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 rounded-b-lg w-full"
        style={{ background: "#23354b" }}
      >
        {/* Left Section: Button and Icons */}
        <div className="flex flex-col md:flex-row items-center bg-white px-6 pt-6 rounded-tr-lg w-full md:w-1/2">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-3xl font-semibold hover:bg-yellow-600 mb-4 md:mb-0 md:mr-4">
            About PAVAN
          </button>
          <div className="flex flex-grow justify-end space-x-4">
            <a href="#" className="text-black hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-black hover:text-red-500">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaTiktok size={20} />
            </a>
            <a href="#" className="text-black hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="text-xs text-gray-200 mt-4 md:mt-0 md:mr-6 text-center md:text-right">
          <p className="inline-block mr-16">&copy; 2024 All Rights Reserved</p>

          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="hover:underline mr-5">
            Terms & Conditions
          </a>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default LoginPage;
