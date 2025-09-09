import React, { useEffect, useRef } from "react";
import anime from "animejs";
export default function PrivacyPolicy() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const sectionsRef = useRef([]);
  

  const sections = [
   
    {
      title: "Introduction",
      text: "At Fox, we value your trust. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our services.",
    },
    {
      title: "Information We Collect",
      text: "We may collect information such as your name, email address, and usage data to improve our products and services. We only collect data that is relevant and necessary.",
    },
    {
      title: "How We Use Information",
      text: "Your information helps us personalize your experience, provide customer support, improve our platform, and communicate important updates.",
    },
    {
      title: "Data Security",
      text: "We use strong security measures and encryption to protect your data. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "Your Rights",
      text: "You have the right to access, update, or delete your personal data. You can also opt out of communications at any time.",
    },
    {
      title: "Contact Us",
      text: "If you have any questions about this Privacy Policy, please contact us at privacy@fox.com.",
    
    },
  ];

  useEffect(() => {
    // Animate heading
    anime({
      targets: headingRef.current,
      translateY: [-40, 0],
      opacity: [0, 1],
      duration: 2500,
      easing: "easeOutExpo",
    });

    // Animate paragraph
    anime({
      targets: paraRef.current,
      opacity: [0, 1],
      delay: 400,
      duration: 800,
      easing: "easeOutExpo",
    });

    // Animate sections with stagger
    anime({
      targets: sectionsRef.current,
      translateX: (el, i) => (i % 2 === 0 ? [-80, 0] : [-80, 0]),
      opacity: [0, 1],
      delay: anime.stagger(250, { start: 600 }),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
     <>
    <div className="w-screen min-h-screen flex flex-col items-center justify-start bg-gradient-to-b  to-gray-100 bg-gray-950 px-6 py-12">
      {/* Heading */}
      <h1
      onClick={()=>navigate("/Privacy-Policy")} 
      ref={headingRef} className="text-5xl font-bold mb-8 text-white">
        Privacy Policy
      </h1>

      {/* Intro paragraph */}
      <p
        ref={paraRef}
        className="text-lg text-gray-200 mb-12 max-w-2xl text-center"
      >
        Your privacy is important to us. Below we explain how Fox handles your data.
      </p>

      {/* Sections */}
      <div className="max-w-3xl space-y-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="bg-gray-300 shadow-lg rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <details className="group">
              <summary className="cursor-pointer text-2xl font-semibold text-indigo-600 mb-2 list-none">
                {section.title}
                <span className="float-right transform transition-transform group-open:rotate-90">
                  ➤
                  
                </span>
               
             
              </summary>
              <p className="text-gray-700 leading-relaxed mt-2">
                {section.text}
              </p>  
            </details>
          </div>
       ))}
      </div>
    </div>
    
    </>
  );
}

