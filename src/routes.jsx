import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact"; 
import CartPage from "./pages/Cart";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<div>Page not found!</div>} />
    </Route >)
);
