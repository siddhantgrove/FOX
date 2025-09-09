import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef([]);
  const testimonialsRef = useRef([]);
  const ctaRef = useRef(null);

  const features = [
    { title: "⚡ Speed", desc: "Lightning-fast apps with cutting-edge tech." },
    { title: "🎨 Design", desc: "UI that hits hard, sleek, and modern." },
    { title: "🚀 Scalability", desc: "From 10 to 10M users — smooth AF." },
    { title: "🔒 Security", desc: "Your data locked harder than Fort Knox." },
  ];

  const testimonials = [
    { name: "Sarah J.", quote: "Fox transformed our business. Simply 🔥!" },
    { name: "David K.", quote: "Fast, reliable, and beautiful — just wow." },
    { name: "Lena P.", quote: "Best team we’ve ever worked with. Period." },
  ];
  // const Getstarted = [
  //   {label : "Getstarted", path:"/get-started"},
  // ];

  useEffect(() => {
    // Hero animation
    const text = headlineRef.current.innerText;
    headlineRef.current.innerHTML = text
      .split("")
      .map((char) => `<span class="inline-block opacity-0">${char}</span>`)
      .join("");

    anime({
      targets: headlineRef.current.querySelectorAll("span"),
      opacity: [0, 1],
      translateY: [80, 0],
      delay: anime.stagger(60),
      duration: 800,
      easing: "easeOutBack",
    });

    anime({
      targets: subtextRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 1500,
      duration: 800,
      easing: "easeOutExpo",
    });

    // About section
    anime({
      targets: aboutRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      delay: 2000,
      duration: 800,
      easing: "easeOutExpo",
    });

    // Features
    anime({
      targets: featuresRef.current,
      translateX: (el, i) => (i % 2 === 0 ? [-100, 0] : [100, 0]),
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 2500 }),
      duration: 900,
      easing: "easeOutExpo",
    });

    // Testimonials
    anime({
      targets: testimonialsRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(300, { start: 3500 }),
      duration: 900,
      easing: "easeOutExpo",
    });

    // CTA
    anime({
      targets: ctaRef.current,
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: 5000,
      duration: 800,
      easing: "easeOutBack",
    });
  }, []);

  return (
  
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1
          ref={headlineRef}
          className="text-6xl md:text-7xl font-extrabold tracking-tight text-indigo-400"
          
        >

          FOX
        </h1>
        <p
          ref={subtextRef}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Fox builds digital products that are sleek, powerful, and unforgettable.
        </p>
        <div className="mt-8 flex gap-6">
          
        

          <button 
          onClick={()=>navigate("/services")}
          className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 text-lg font-semibold transition transform hover:scale-105">
            Get Started
          </button>


          <button
          onClick={()=>navigate("/content")}
           className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-400 shadow-lg hover:shadow-pink-500/50 text-lg font-semibold transition transform hover:scale-105">
            Explore
          </button>
        </div>
      </section>

      {/* About */}
      <section
        ref={aboutRef}
        className="px-8 py-20 bg-gray-950 flex flex-col items-center text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">Who We Are</h2>
        <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
          At Fox, we’re more than developers — we’re creators. Our mission is to
          craft apps, platforms, and digital experiences that feel alive. Fast,
          reliable, sexy, and built to scale.
        </p>
      </section>

      {/* Features */}
      <section className="px-8 py-20 bg-gradient-to-br from-indigo-900 to-indigo-700 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10 text-white">🔥 Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
          {features.map((f, idx) => (
            <div
              key={idx}
              ref={(el) => (featuresRef.current[idx] = el)}
              className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform"
            >
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-200">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-20 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">
          What People Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              ref={(el) => (testimonialsRef.current[idx] = el)}
              className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              <p className="italic text-lg mb-4">“{t.quote}”</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={ctaRef}
        className="px-8 py-20 bg-gradient-to-r from-yellow-400 to-pink-500 text-center"
      >
        <h2 className="text-5xl font-bold mb-6">Ready for a fox move ?🦊 </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let’s build something unforgettable together. Don’t wait. Be bold.
        </p>
        <button 
        onClick={()=>navigate("services")}
        className="px-8 py-4 rounded-xl bg-black text-yellow-400 text-xl font-bold hover:bg-gray-900 shadow-lg hover:shadow-yellow-500/50 transition transform hover:scale-110">
          Start Now
        </button>
      </section>

      {/* Footer */} 
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Fox — Built with 🔥
      </footer>
    </div>
  
    
  );
}


          //  onClick={() => navigate("/login")}