import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { onConfirm } from 'react-confirm-pro';
import auth from '../../firebase.init';
import Loading from '../../shared&minifier/Loading/Loading';

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, data, refetch } = useQuery('ordersData', () => axios.get('http://localhost:5000/orders')
  )
  if (loading || isLoading) {
    return <Loading></Loading>
  }
  const yourOrder = data?.data?.filter(o => o?.buyerEmail === user?.email);

  const onClick = (id) => {
    onConfirm({
      title: (
        <h3>
          Are you sure?
        </h3>
      ),
      description: (
        <p>Requesting for canceling the order?</p>
      ),
      onSubmit: () => {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => refetch())
      },
      onCancel: () => {

      },
    })
  };

  console.log(data);
  console.log(yourOrder);
  return (
    <div>
      <div className='rounded my-5 '>
        <h1 className='text-center text-accent italic'>My Order</h1>
        <div className=' text-center'>
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="text-center  py-3">Serial</th>
                <th className="text-center  py-3">Product Name</th>
                <th className="text-center  py-3">Bill</th>
                <th className="text-center  py-3">Payment Status</th>
                <th className="text-center  py-3">Cancel</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {yourOrder?.map((u, index) => <tr key={index} className="text-gray-700">
                <td className="text-center py-3 border">
                  {index + 1}
                </td>

                <td className="text-center py-3 text-sm border">{u?.name}</td>
                <td className="text-center py-3 text-sm border">${u?.bill}</td>
                <td className="text-center py-3 text-xs border"><span className=' text-ms font-semibold border btn btn-xs'>Payment</span></td>
                <td className="text-center py-3 text-xs border"><span onClick={() => onClick(u?._id)} className=' text-ms font-semibold border btn btn-xs'>Cancel</span></td>
              </tr>)}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;