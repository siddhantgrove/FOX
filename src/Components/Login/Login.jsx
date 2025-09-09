import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../Contact/AuthSlice";
import { useForm } from "react-hook-form";
import anime from "animejs";
import authService from "../../appwrite/auth"; // adjust path

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const formRef = useRef(null);


  useEffect(() => {
    // Animate form elements on mount
    anime.timeline({ easing: "easeOutExpo", duration: 700 })
      .add({
        targets: ".login-title",
        translateY: [-50, 0],
        opacity: [0, 1],
      })
      .add({
        targets: ".login-input",
        translateX: [200, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
      }, "-=400")
      .add({
        targets: ".login-btn",
        scale: [0.5, 1],
        opacity: [0, 1],
      }, "-=400");
  }, []);

  const login = async (data) => {
    setError("");
    try {
      console.log("login from data",data);

      await authService.logout()
      const session = await authService.login(data);
      console.log("session",session);
      
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log("user data",userData);
        
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (err) {
      console.error("login failed",err)
      setError(err?.message||"login failed.please try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-300 font-sans">
      <div
        ref={formRef}
        className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
      >
        <h2
        onClick={()=>navigate("/")}
        className="login-title text-center text-4xl font-extrabold text-white drop-shadow-lg mb-4">
          Sign In
        </h2>
        <p className="text-center text-white/80 mb-6">
          Don’t have an account?&nbsp;
          <Link
            to="/Signup"
            className="font-semibold text-white underline hover:text-yellow-200 transition-all duration-300"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="space-y-5">
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="login-input bg-white/50 backdrop-blur-sm placeholder-white/60 text-black rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-purple-300 focus:outline-none"
          />

          <input
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="login-input bg-white/50 backdrop-blur-sm placeholder-white/60 text-black rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-purple-300 focus:outline-none"
          />

          <button
            type="submit"
            className="login-btn w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
