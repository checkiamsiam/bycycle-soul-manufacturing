import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAllUser from '../../hooks/UseAllUser';
import Loading from '../../shared&minifier/Loading/Loading';
const Users = () => {


  const [user, loading] = useAuthState(auth);

  const { isLoading, allUser, refetch } = useAllUser(user);


  const makeAdmin = (email) => {

    fetch(`http://localhost:5000/users/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => refetch())
  }


  if (loading || isLoading) {
    return <Loading></Loading>
  }

  const currentUser = allUser.find(u => u?.email === user?.email)


  return (
    <div className=' mt-5 '>
      <h1 className='text-center text-accent italic'>Admin Panel</h1>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="text-center  py-3">Serial</th>
                  <th className="text-center  py-3">User</th>
                  <th className="text-center  py-3">Current State</th>
                  <th className="text-center  py-3">Authorize</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {allUser?.map((u, index) => <tr key={index} className="text-gray-700">
                  <td className="text-center py-3 border">
                    {index + 1} {u.email === user.email && '(YOU)'}
                  </td>
                  <td className="text-center py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight rounded-md text-white bg-neutral "> {u.email} </span>
                  </td>
                  <td className="text-center py-3 text-ms font-semibold border"><span className="badge">{u.role}</span></td>
                  <td className="text-center py-3 text-sm border">{u.email !== user.email ? (u?.role === 'admin' ? <span className="badge bg-green-700"></span> : (currentUser.role === 'admin' ? <button onClick={() => makeAdmin(u.email)} className="btn btn-xs">Make Admin</button> : <span className="badge bg-red-700"></span>)) : <span className="badge bg-red-700"></span>}</td>
                </tr>)}

              </tbody>
            </table>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Users;