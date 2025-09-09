import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
export default function ContentSection() {
  //adding navigation to land on the another pages//
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const pointsRef = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    // Animate heading
    anime({
      targets: headingRef.current,
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });

    // Animate paragraph
    anime({
      targets: textRef.current,
      translateY: [40, 0],
      opacity: [0, 1],
      delay: 300,
      duration: 1000,
      easing: "easeOutExpo",
    });

    // Animate points list
    anime({
      targets: pointsRef.current,
      translateX: [-50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 600 }),
      duration: 800,
      easing: "easeOutExpo",
    });

    // Animate image
    anime({
      targets: imgRef.current,
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: 1200,
      duration: 1000,
      easing: "easeOutBack",
    });
  }, []);

  const points = [
    "⚡ Built with the latest technologies",
    "🎨 Designed to look stunning and modern",
    "🚀 Optimized for performance & scalability",
    "💎 Crafted to deliver real business value",
  ];

  return (
    <>
    <section className="w-full bg-gray-950 text-white py-20 px-8 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-indigo-400 mb-6"
          >
            Why Choose <span className="text-pink-500">Fox?</span>
          </h2>

          <p
            ref={textRef}
            className="text-gray-300 text-lg mb-8 leading-relaxed"
          >
            At Fox, we don’t just build apps — we create digital experiences
            that are bold, sleek, and unforgettable. Every product we craft is
            designed to impress, perform, and scale effortlessly.
          </p>

          <ul className="space-y-4">
            {points.map((point, idx) => (
              <li
                key={idx}
                ref={(el) => (pointsRef.current[idx] = el)}
                className="flex items-center gap-3 text-gray-200 text-lg"
              >
                <span className="text-yellow-400 text-xl">✔</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-6">
            <button
            onClick={() => navigate ("/learn-More")}
             className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 text-lg font-semibold transition transform hover:scale-105">
              Learn More
            </button>
            <button 
            onClick={()=>navigate("/services")}
            className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-400 shadow-lg hover:shadow-pink-500/50 text-lg font-semibold transition transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          className="relative flex justify-center items-center"
        >
          {/* <img
          //src="https://static.vecteezy.com/system/resources/previews/000/546/910/original/fox-face-logo-vector-icon.jpg"
            alt="Fox Digital Product"
            className="rounded-2xl shadow-2xl border-4 border-indigo-600 h-32 absolute inset-10.0"
          /> */}

          <div className="absolute -bottom-6 -right-6 bg-pink-500 p-4 rounded-xl text-black font-bold text-lg shadow-lg">
            😀Let's goo...
          </div>
        </div>
      </div>

    </section>
  
</>

  );
}
