import { Link } from "react-router-dom";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock} from "lucide-react";
import {useUserStore} from "../store/useUserStore";
import {useCartStore} from "../store/useCartStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const {cart} = useCartStore();

  return (
    <header>
      <div>
        <div>
          <Link to='/'>
            E-Commerce
          </Link>

          <nav>
            <Link 
              to={"/"}
            >
              Home
            </Link>
            {user && (
              <Link
                to={"/cart"}
              >
                <ShoppingCart />
                <span> Cart </span>
                {cart.length > 0 && (
                  <span>
                    {cart.length}
                  </span>
                )}
              </Link>
            )}
            {isAdmin && (
              <Link to={"/secret-dashboard"}>
                <Lock/>
                <span>Dashboard</span>
              </Link>
            )}
            {user ? (
              <button onClick={logout}>
                <LogOut size={18} />
                <span>Log Out</span>
              </button>
            ) : (
              <>
                <Link to={"/signup"}>
                  <UserPlus size={18}/>
                  Sign Up
                </Link>
                <Link to={"/login"}>
                  <LogIn size={18}/>
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar;