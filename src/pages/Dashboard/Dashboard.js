import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAllUser from '../../hooks/UseAllUser';
import Loading from '../../shared&minifier/Loading/Loading';
// import '../Login/login.css'
;

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  const { isLoading, allUser, refetch } = useAllUser(user);


  if (loading || isLoading) {
    return <Loading></Loading>
  }

  const currentUser = allUser.find(u => u?.email === user?.email)





  return (
    <div className=' pt-32'>

      <div className='container mx-auto lg:flex '>
      <div className="drawer-side  z-50">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64  text-base-content lg:block hidden">
          {/* <!-- Sidebar content here --> */}
          <li className='font-semibold text-accent'><Link to='/dashboard'>My Profile</Link></li>
          {currentUser?.role === 'admin' ? <li className='font-semibold text-accent'><Link to='/dashboard/manageOrder'>Manage Orders</Link></li> : <li className='font-semibold text-accent'><Link to='/dashboard/myOrder'>My Order</Link></li>}
          {currentUser?.role === 'member' && <li className='font-semibold text-accent'><Link to='/dashboard/addReview'>Add Reviews</Link></li>}
          {currentUser?.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/addProduct'>Add Product</Link></li>}
          {currentUser?.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/manageProduct'>Manage Product</Link></li>}
          {currentUser?.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/makeAdmin'>Add Admin</Link></li>}
        </ul>
      </div>
      <div className='w-full z-20'>
        <h1 className='text-primary text-4xl font-bold text-center '>Dashboard</h1>
        <div className="text-center lg:hidden block px-5">
          <Link to='/dashboard' className="tab tab-bordered" >My Profile</Link>
          {currentUser?.role === 'admin' ? <Link className="tab tab-bordered ml-2" to='/dashboard/manageOrder'>Manage Orders</Link> : <Link className="tab tab-bordered ml-2" to='/dashboard/myOrder'>My Order</Link>}
          {currentUser?.role === 'member' && <Link className="tab tab-bordered ml-2" to='/dashboard/addReview'>Add Reviews</Link>}
          {currentUser?.role === 'admin' && <Link className="tab tab-bordered ml-2" to='/dashboard/addProduct'>Add Product</Link>}
          {currentUser?.role === 'admin' && <Link className="tab tab-bordered ml-2" to='/dashboard/manageProduct'>Manage Product</Link>}
          {currentUser?.role === 'admin' && <Link className="tab tab-bordered ml-2" to='/dashboard/makeAdmin'>Add Admin</Link>}
        </div>
        <Outlet/>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;