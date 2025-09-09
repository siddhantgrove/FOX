import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

export default function Header() {
  const { changeTheme, themes } = useTheme();
  const navItemsRef = useRef([]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Privacy Policy", path: "/Privacy-Policy" },
    { label: "Contact", path: "/contact" },
    
  ];

  useEffect(() => {
    anime({
      targets: navItemsRef.current,
      translateX: (el, i) => (i % 2 === 0 ? [-80, 0] : [80, 0]),
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 300 }),
      duration: 800,
      easing: "easeOutExpo",
    });
  }, []);

  return (
<header className="w-full bg-transparent shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-white font-bold text-2xl">🦊 Fox</h1>

      <nav className="flex gap-8 text-white font-semibold">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            ref={(el) => (navItemsRef.current[idx] = el)}
            className="cursor-pointer hover:text-yellow-300 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Theme Selector */}
      <select
        onChange={(e) => changeTheme(e.target.value)}
        className="ml-6 px-3 py-2 rounded-lg bg-yellow-400 text-indigo-800 font-semibold shadow-md hover:bg-yellow-300 transition-colors"
      >
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </header>
  );
}
