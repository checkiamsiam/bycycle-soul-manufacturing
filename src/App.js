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
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import AddReview from './pages/Dashboard/AddReview';
import RequireAdmin from './shared&minifier/RequireAuth/RequireAdmin';
import Users from './pages/Dashboard/Users';
import AllParts from './pages/AllParts/AllParts';
import Contact from './pages/Contact/Contact';
import Settings from './pages/Settings/Settings';
import ManageOrder from './pages/Dashboard/ManageOrder';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProduct from './pages/Dashboard/ManageProduct';
import MyOrder from './pages/Dashboard/MyOrder';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>
        <Route path='/settings' element={<Settings></Settings>}></Route>
        <Route path='/allParts' element={<AllParts></AllParts>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/dashboard' element={<RequireAuth> <Dashboard /> </RequireAuth>}>
          <Route index element={<Profile />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='myOrder' element={<MyOrder />} />
          <Route path='manageOrder' element={<RequireAdmin><ManageOrder /></RequireAdmin>} />
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
          <Route path='makeAdmin' element={<RequireAdmin><Users /></RequireAdmin>} />
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ScrollToTop component={<BsArrowBarUp />} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.53)', zIndex: '50', }} smooth />
      <ToastContainer />
    </div>
  );
}

export default App;
