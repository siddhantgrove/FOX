import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth"; 

export default function Signup() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,// thr input name attributes
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.createAccount({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      
      console.log("account created:", user);
      navigate("/login"); // redirect after signup
    } catch (error) {
      console.error("Signup failed:", error);
      alert(error.message);
    }
  };

  useEffect(() => {
    // Animate form elements on mount
    anime.timeline({ easing: "easeOutExpo", duration: 750 })
      .add({
        targets: ".signup-title",
        translateY: [-50, 0],
        opacity: [0, 1],
        delay: 100,
      })
      .add({
        targets: ".signup-input",
        translateX: [200, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      }, "-=500")
      .add({
        targets: ".signup-btn",
        scale: [0.5, 1],
        opacity: [0, 1],
      }, "-=400");
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <form
        onSubmit={handleSignup}
        ref={formRef}
        className="bg-white rounded-3xl p-10 shadow-2xl w-full max-w-md"
      >
        <h2 className="signup-title text-4xl font-bold text-center mb-8 text-gray-800">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="signup-input w-full p-4 mb-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="signup-input w-full p-4 mb-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="signup-input w-full p-4 mb-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
        //onClick={()=>navigate("/services")}
          type="submit"
          className="signup-btn w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Sign Up
        </button>

        <p className="mt-5 text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")} // ✅ lowercase path
            className="text-indigo-600 font-semibold cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
