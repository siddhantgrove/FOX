import { useTheme } from "../../ThemeContext";
import { useState } from "react";

export default function BackgroundColors() {
  const { setBgColor } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = [
    { color: "white", label: "Day 🌞", text: "text-black" },
    { color: "black", label: "Night 🌑", text: "text-white" },
    { color: "#fdf6e3", label: "EyeComfort 👁", text: "text-black" },
    { color: "#2c3e50", label: "Afternoon 🌤", text: "text-white" },
    { color: "#e0f7fa", label: "Chill 😎", text: "text-black" },
  ];

  const handleThemeChange = (color) => {
    setBgColor(color);
    setOpen(false); // close menu after selecting
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2">
      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-5 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        🎨Themes
      </button>

      {/* Theme List (shows only when open) */}
      {open && (
        <div className="flex flex-col gap-2 mt-2 p-3 bg-white shadow-xl rounded-xl animate-fadeIn">
          {themes.map((theme, idx) => (
            <button
              key={idx}
              onClick={() => handleThemeChange(theme.color)}
              className={`px-4 py-2 rounded-lg shadow transition-all duration-300 ${theme.text}`}
              style={{ backgroundColor: theme.color }}
            >
              {theme.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
