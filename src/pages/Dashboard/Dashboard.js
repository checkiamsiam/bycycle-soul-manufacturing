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

  const currentUser = allUser?.find(u => u?.email === user?.email)





  return (
    <div className=' pt-32'>

      <div className='container mx-auto lg:flex '>
      <div className="drawer-side  ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64  text-base-content lg:block hidden">
          {/* <!-- Sidebar content here --> */}
          {currentUser?.role === 'admin' ? <li className='font-semibold text-accent'><Link to='/dashboard'>Manage Orders</Link></li> : <li className='font-semibold text-accent'><Link to='/dashboard'>My Order</Link></li>}
          {currentUser?.role === 'member' && <li className='font-semibold text-accent'><Link to='/dashboard/addReview'>Add Reviews</Link></li>}
          {currentUser?.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/addProduct'>Add Product</Link></li>}
          {currentUser?.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/manageProduct'>Manage Product</Link></li>}
          {currentUser?.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/makeAdmin'>Add Admin</Link></li>}
        </ul>
      </div>
      <div className='w-full '>
        <h1 className='text-primary text-4xl font-bold text-center '>Dashboard</h1>
        <div className="text-center lg:hidden block px-5">
          {currentUser?.role === 'admin' ? <Link className="tab tab-bordered ml-2" to='/dashboard'>Manage Orders</Link> : <Link className="tab tab-bordered ml-2" to='/dashboard'>My Order</Link>}
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