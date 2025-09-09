import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function LearnMore() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Hero text animation
    anime({
      targets: heroRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    // Section animations stagger
    anime({
      targets: sectionsRef.current,
      opacity: [0, 1],
      translateY: [80, 0],
      delay: anime.stagger(300, { start: 500 }),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  const sections = [
    {
      title: "⚡ High Performance",
      desc: "We craft blazing-fast applications that scale effortlessly to millions of users.",
      img: "https://images.hdqwalls.com/wallpapers/the-flash-running-artwork-5k-hd.jpg",
    },
    {
      title: "🎨 Stunning Design",
      desc: "Every project we build is designed to look modern, clean, and professional.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "🔒 Rock-Solid Security",
      desc: "Security is built into everything we do, keeping your data safe and trusted.",
      img: "https://tse2.mm.bing.net/th/id/OIP.9m4X5k22CgYsSTmdd1VjggHaFW?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center text-center h-[60vh] px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400 mb-4">
          Learn More About Us
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl">
          We’re not just another dev team — we’re your partner in building
          powerful, beautiful, and unforgettable digital experiences.
        </p>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-20 py-16 space-y-32 max-w-6xl mx-auto">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            ref={(el) => (sectionsRef.current[idx] = el)}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                {sec.title}
              </h2>
              <p className="text-lg text-gray-300">{sec.desc}</p>
            </div>

            {/* Image */}
            <div>
              <img
                src={sec.img}
                alt={sec.title}
                className="rounded-2xl shadow-lg border-2 border-indigo-500"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-center py-16 px-8">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-100 mb-8">
          Don’t just learn about us — experience the Fox way.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-4 rounded-xl bg-yellow-400 text-black text-xl font-bold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
        >
          Join Us Today
        </button>
      </section>

      {/* Footer */} 
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Fox — Built with 🔥
      </footer>
    </div>
  );
}
