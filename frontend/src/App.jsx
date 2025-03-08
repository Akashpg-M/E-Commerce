import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";

import Navbar from './components/Navbar.jsx';
import {Toaster} from "react-hot-toast";
import { useEffectStore } from "./stores/UserStore";

import { get } from 'express/lib/response.js';


function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const { getCartItems } = useCartStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  useEffect(()=>{
    if(!user) return;

    getCartItems();
  }, [getCartItems, user]);

  if(checkingAuth) return <LoadingSpinner/>;

  return (

    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element = {!user ? <SignUpPage/> : <Navigate to='/' />} />
        <Route path = '/login' element = {!user ? <LoginPage/> : <Navigate to='/'/>} />
        <Route  
          path='/secret-dashboard'
          element={user?.role === "admin" ? <AdminPage/> : <Navigate to='/login'/>}
        />
        
        {/* <Route path='/category/:category' element={<CategoryPage/>}/>
        <Route path='/cart' element={user ? <CartPage/> : <Navigate to='/login'/>} />
        <Route
          path='/purchase-success'
          element={user ? <PurchaseSuccessPage/> : <Navigate to='/login'/>}
        />
        <Route path='purchase-cancel' element={user ? <PurchaseCancelPage/>:<Navigate tp='/login'/>}/> */}
      </Routes>
    </div>
  );
}

export default App
