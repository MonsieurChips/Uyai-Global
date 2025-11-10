import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CartIcon, MenuIcon, CloseIcon } from "../assets/icons";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { cartItemCount } = useContext(CartContext);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", page: "/" },
    { name: "Contact Us", page: "contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/UYAI_GLOBAL_CONCEPT.jpg"
            alt="UYAI GLOBAL CONCEPT Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-orange-600 hidden sm:inline">
            UYAI GLOBAL CONCEPT
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(link.page);
              }}
              className="text-gray-600 hover:text-orange-600 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("cart")}
            className="relative text-gray-600 hover:text-orange-600"
          >
            <CartIcon />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(link.page);
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;