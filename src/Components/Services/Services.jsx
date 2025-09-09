import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function Services() {
  const servicesRef = useRef([]);
  const pricingRef = useRef([]);

  const services = [
    {
      title: "⚡ Web Development",
      desc: "Modern, responsive, and lightning-fast websites tailored for your business.",
    },
    {
      title: "📱 Mobile Apps",
      desc: "Seamless mobile experiences for iOS and Android, built with love.",
    },
    {
      title: "🎨 UI/UX Design",
      desc: "Stunning and user-friendly designs that engage and convert.",
    },
    {
      title: "🚀 Scaling & Cloud",
      desc: "Robust and scalable cloud solutions to handle growth like a pro.",
    },
    {
      title: "🤖AI/Support",
      desc: "We use Generative AI and make a UserExperience more  smooth easy and fast",
    },


  ];

  const pricingPlans = [
    {
      name: "Beginner's Choice's",
      price: "$10/mo",
      features: ["✔ 1 Project", "✔ Basic Support", "✔ Access to Updates"],
      highlight: true,
    },
    {
      name: "Pro's Choice's",
      price: "$49/mo",
      features: [
        "✔ 5 Projects",
        "✔ Priority Support",
        "✔ Advanced Features",
      ],
      highlight: true,
    },
    {
        
      name: "Legends Choice's",
      price: "$200/mo",
      features: [
        "✔ 10 Projects",
        "✔ Dedicated Support",
        "✔ Tailored Solutions",
        "✔ AI Intelligence Support"
      ],
      highlight: true,
    },
  ];

  useEffect(() => {
    anime({
      targets: servicesRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 800,
      easing: "easeOutExpo",
    });

    anime({
      targets: pricingRef.current,
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 1000 }),
      duration: 900,
      easing: "easeOutBack",
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen py-20 px-8">
      {/* Services Section */}
      <section className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-5xl font-bold text-indigo-400 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => (servicesRef.current[idx] = el)}
              className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition transform"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-200">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-pink-400 mb-12">
          Subscription Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              ref={(el) => (pricingRef.current[idx] = el)}
              className={`rounded-2xl p-8 shadow-xl transition transform hover:scale-105 ${
                plan.highlight
                  ? "bg-gradient-to-br from-yellow-400 to-pink-500 text-black"
                  : "bg-gradient-to-br from-gray-800 to-gray-700"
              }`}
            >
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-lg">
                    {feature}
                      <span className="absolute -top-8 right-[35%] bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg animate-bounce">
            🎉 Save 20% join now
          </span>
                  </li>
                  
                ))}
              </ul>
              <button
              
                className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
                  plan.highlight
                    ? "bg-black text-yellow-400 hover:bg-gray-900"
                    : "bg-indigo-500 hover:bg-indigo-400"
                }`}
              >
                {plan.highlight ? "Get Pro" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
