import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";

export default function About() {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const boxesRef = useRef([]);
  const [activeBox, setActiveBox] = useState(null);
  const colors = ["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-blue-500"];


  useEffect(() => {
    // Heading animation
    anime({
      targets: headingRef.current,
      translateY: [-30, 0],
      opacity: [0,1],
      duration: 500,
      easing: "easeOutExpo",
    });

    // Boxes stagger animation
    anime({
      targets: boxesRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 600,
      easing: "easeOutExpo",
    });
  }, []);

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  const boxes = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/000/546/910/original/fox-face-logo-vector-icon.jpg",
      heading: "Who we are ?",
      text: "At Fox, we believe in being clever, quick, and reliable—just like our name. We’re passionate about turning ideas into reality, creating solutions that are simple, effective, and built for everyone.",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/000/546/910/original/fox-face-logo-vector-icon.jpg",
      heading: "What we do ?",
      text: "We build scalable apps and digital products with modern technologies.",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/000/546/910/original/fox-face-logo-vector-icon.jpg",
      heading: "What we offer ?",
      text: "We offer web development, mobile solutions, and AI-powered tools.",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/000/546/910/original/fox-face-logo-vector-icon.jpg",
      heading: "Advantages ?",
      text: "Fast delivery, great design, and scalable architecture.",
    },
  ];

  return (

    <div   className="w-screen h-screen flex flex-col items-center justify-center bg-gray-950 px-6 py-12 relative">

      <button
      onClick={()=>navigate("/about")}
      ref={headingRef}
       className="text-5xl font-bold mb-8 text-gray-200">
        About Us
      </button>


      <p className="text-lg text-gray-200 mb-12 max-w-xl text-center">Tap the Card</p>

      <div className="flex gap-6 flex-wrap justify-center">
        {boxes.map((box, idx) => (
          <div
            key={idx}
            ref={(el) => (boxesRef.current[idx] = el)}
            onClick={() => handleBoxClick(idx)}
            className={`w-48 h-64 bg-indigo-500 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-500 relative ${
              activeBox === idx ? "p-4" : ""}
                ${colors[idx]}`} //bg change prop by using index 
          >
            {/* Image + Heading always visible */}
            <img
              src={box.img}
              alt={box.heading}
              className="w-16 h-16 object-cover rounded-md mb-2 "
            />
            <h2 className="text-white font-bold text-lg text-center">
              {box.heading}
            </h2>

            {/* Hidden text appears when active */}
            <div
              className={`text-white text-sm mt-2 text-center transition-all duration-500 overflow-hidden ${
                activeBox === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {box.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  
 

  );
}
