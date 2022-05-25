import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './pages/Blogs/Blogs';
import ScrollToTop from "react-scroll-to-top";
import { BsArrowBarUp } from 'react-icons/bs';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './shared&minifier/Footer/Footer';
import Header from './shared&minifier/Header/Header';
import NotFound from './shared&minifier/NotFound/NotFound';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import RequireAuth from './shared&minifier/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ScrollToTop component={<BsArrowBarUp />} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.53)' ,  zIndex: '50' , }} smooth />
      <ToastContainer/>
    </div>
  );
}

export default App;
