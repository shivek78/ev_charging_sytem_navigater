"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await fetch("/api/auth/login", {
  method: "POST",
  body: JSON.stringify({ email, password }),
});

    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      window.location.href = "/";
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-teal-500 to-indigo-500 flex items-center justify-center p-4">

      {/* Animated floating shapes */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute w-72 h-72 rounded-full bg-white/10 blur-3xl -top-10 -left-10"
      />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute w-96 h-96 rounded-full bg-white/10 blur-3xl bottom-0 right-0"
      />

      {/* Login Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/10 border border-white/30 p-8 rounded-3xl shadow-2xl w-full max-w-md text-white"
      >
        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Welcome Back ⚡
        </h1>

        <p className="text-center text-sm text-white/80 mb-8">
          Log in to continue using <span className="font-medium">EV Finder</span>
        </p>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-300"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={login}
          className="w-full mt-6 py-3 bg-white/30 hover:bg-white/40 transition rounded-xl text-lg font-semibold backdrop-blur-md shadow-lg"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center mt-6 text-sm text-white/80">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium underline hover:text-white">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
