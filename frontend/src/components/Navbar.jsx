
import { Link } from "react-router-dom";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { useUserStore } from "../store/useUserStore";
import {useCartStore} from "../store/useCartStore";

const Navbar = () => {
  const {user, logout} = useUserStore();
  const isAdmin = user?.role === "admin";
  const {cart}=useCartStore();

  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">E-Commerce</Link>

          <nav className="flex space-x-6 items-center">
            <Link to="/" className="hover:text-gray-300">Home</Link>

            {user && (
              <Link to="/cart" className="flex items-center space-x-1 hover:text-gray-300">
                <ShoppingCart />
                <span> Cart </span>
                {cart.length > 0 && (
                  <span>
                    {cart.length}
                  </span>
                )}
                <span 
                  className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                >
                    {cart.length}
                </span>
              </Link>
            )}

            {isAdmin && (
              <Link to="/secret-dashboard" className="flex items-center space-x-1 hover:text-gray-300">
                <Lock size={20}/>
                <span>Dashboard</span>
              </Link>
            )}

            {user ? (
              <button className="flex items-center space-x-1 bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600"
                      onClick = {logout}>
                <LogOut size={18} />
                <span>Log Out</span>
              </button>
            ) : (
              <>
                <Link to="/signup" className="flex items-center space-x-1 bg-green-500 px-3 py-2 rounded-lg hover:bg-green-600">
                  <UserPlus size={18} />
                  Sign Up
                </Link>
                <Link to="/login" className="flex items-center space-x-1 bg-blue-500 px-3 py-2 rounded-lg hover:bg-blue-700">
                  <LogIn size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>
      </div>
    </header>
  );
};

export default Navbar;


