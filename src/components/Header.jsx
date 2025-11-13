import { useContext, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CartIcon, MenuIcon, CloseIcon } from "../assets/icons";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { cartItemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  const navLinks = [
    { name: "Home", page: "/" },
    { name: "Contact Us", page: "/contact" },
  ];

  // Close mobile menu on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen, setIsMenuOpen]);

  // When menu opens, optionally move focus to first link
  useEffect(() => {
    if (isMenuOpen) {
      // small delay to ensure DOM ready
      setTimeout(() => firstMobileLinkRef.current?.focus(), 50);
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img
              src="/images/UYAI_GLOBAL_CONCEPT.jpg"
              alt="UYAI GLOBAL CONCEPT Logo"
              className="h-10 w-10 object-contain"
              loading="lazy"
            />
            <span className="ml-3 text-xl md:text-2xl font-bold text-orange-600 hidden sm:inline truncate">
              UYAI GLOBAL CONCEPT
            </span>
          </div>

          {/* Center: nav (centered on md+) */}
          <nav className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-center space-x-8 flex-wrap">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.page}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-orange-600 font-medium ${isActive ? "text-orange-600" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Right: actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/cart")}
              aria-label={`Open cart (${cartItemCount} items)`}
              className="relative text-gray-600 hover:text-orange-600 focus:outline-none"
            >
              <CartIcon />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="text-gray-600 focus:outline-none"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-max-h duration-200 ease-in-out overflow-hidden ${isMenuOpen ? "block" : "hidden"} bg-white`}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 pt-4 pb-3 space-y-1 sm:px-6 flex flex-col items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.page}
              onClick={() => setIsMenuOpen(false)}
              ref={idx === 0 ? firstMobileLinkRef : null}
              role="menuitem"
              className="text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;