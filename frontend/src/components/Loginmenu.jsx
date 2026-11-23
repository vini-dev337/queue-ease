import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";

// The roles live in a list, so adding a new role later = adding one item here
const roles = [
  { label: "Patient", value: "patient" },
  { label: "Staff", value: "staff" },
  { label: "Doctor", value: "doctor" },
];

export default function Loginmenu() {

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-11 rounded-lg bg-primary px-5 text-sm font-medium text-white hover:bg-[#1d4ed8]"
      >
        Login
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-2 w-60 rounded-xl border border-line bg-white p-4 shadow-md">
          {roles.map((role) => (
            <div
              key={role.value}
              className="flex items-center justify-between py-2"
            >
              <span className="text-base font-medium text-ink">
                {role.label}
              </span>
              <Link
                to={`/login?role=${role.value}`}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-paleblue"
              >
                Log in
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}