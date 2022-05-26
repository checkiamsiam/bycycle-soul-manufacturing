import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAllUser from '../../hooks/UseAllUser';
import Loading from '../../shared&minifier/Loading/Loading';
;

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  const { isLoading, allUser, refetch } = useAllUser(user);


  if (loading || isLoading) {
    return <Loading></Loading>
  }

  const currentUser = allUser.find(u => u?.email === user?.email)





  return (
    <div className='container mx-auto pt-32 lg:flex'>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content lg:block hidden">
          {/* <!-- Sidebar content here --> */}
          <li className='font-semibold text-accent'><Link to='/dashboard'>My Profile</Link></li>
          {currentUser?.role === 'admin' ? <li className='font-semibold text-accent'><Link to='/dashboard/users'>Manage Orders</Link></li> :  <li className='font-semibold text-accent'><Link to='/dashboard'>My Order</Link></li>}
          {currentUser.role === 'member' && <li className='font-semibold text-accent'><Link to='/dashboard/myreview'>Add Reviews</Link></li>}
          {currentUser.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/users'>Add Product</Link></li>}
          {currentUser.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/users'>Manage Product</Link></li>}
          {currentUser.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/users'>Add Admin</Link></li>}
        </ul>
      </div>
      <div className='w-full'>
        <h1 className='text-primary text-4xl font-bold text-center '>Dashboard</h1>
        <div className="text-center lg:hidden block px-5">
        <li className='font-semibold text-accent'><Link to='/dashboard' className="tab tab-bordered" >My Profile</Link></li>
          {currentUser?.role === 'admin' ? <li className='font-semibold text-accent'><Link className="tab tab-bordered ml-2" to='/dashboard/users'>Manage Orders</Link></li> :  <li className='font-semibold text-accent'><Link className="tab tab-bordered ml-2" to='/dashboard'>My Order</Link></li>}
          {currentUser.role === 'member' && <li className='font-semibold text-accent'><Link className="tab tab-bordered ml-2" to='/dashboard/myreview'>Add Reviews</Link></li>}
          {currentUser.role === 'admin' && <li className='font-semibold text-accent'><Link className="tab tab-bordered ml-2" to='/dashboard/users'>Add Product</Link></li>}
          {currentUser.role === 'admin' && <li className='font-semibold text-accent'><Link className="tab tab-bordered ml-2" to='/dashboard/users'>Manage Product</Link></li>}
          {currentUser.role === 'admin' && <li className='font-semibold text-accent'><Link className="tab tab-bordered ml-2" to='/dashboard/users'>Add Admin</Link></li>}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;