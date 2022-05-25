import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const PurchasePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth)
  const { isLoading, error, data } = useQuery(['partsData' ], () => axios.get('http://localhost:5000/parts')
  )
  const thisParts = data?.data?.find(p => p?._id === id);
  const [quantity, setQuantity] = useState(thisParts?.minOrdQnt)
  const [adress, setAdress] = useState('')
  const [phone, setphone] = useState(0)
  const [com, setCom] = useState('')

  const handleQnt = (e) => {
    setQuantity(e.target.value)
    if ((quantity < thisParts?.minOrdQnt)) {
      toast.warning(`Min order quantity is ${thisParts?.minOrdQnt}`)
    }
    if ((quantity > thisParts?.available)) {
      toast.warning(`We have only ${thisParts?.available}`)
    }
  }

  const addOrder =  () => {
    const postItem = { name: thisParts?.name, qnt: quantity, bill: thisParts?.price * quantity, buyerEmail: user?.email, buyerName: user?.displayName, adress: adress, phone: phone, company: com };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postItem)
    };
    fetch('http://localhost:5000/orders', requestOptions)
    .then(response => response.json())
    .then(data => toast(data.message));
  }



  return (
    <div className='lg:py-32 py-20 container mx-auto px-5'>
      <div className='md:flex  gap-10'>
        <div className='md:w-1/3 overflow-hidden'><img src={thisParts?.img} alt="" className='w-full h-full rounded-md' /></div>
        <div className='md:w-2/3 flex flex-col items-center'>
          <div>
            <h1 className='text-xl text-primary'>Order Information</h1>
            <h1 className='md:text-4xl text-2xl flex mb-5'><p className='w-1/3 font-bold'>Name:</p> <p className='w-full text-primary'>{thisParts?.name}</p></h1>
            <h1 className='text-xl flex my-1'><p className='w-1/3  font-bold '>Details:</p> <p className='w-full'>{thisParts?.dis}</p></h1>
            <h1 className='text-xl flex my-1'><p className='w-1/3  font-bold'>Price:</p> <p className='w-full'><span className='font-bold'>${thisParts?.price}(per unit)</span></p></h1>
            <h1 className='text-xl flex items-center my-1'><p className='w-1/3  font-bold'>Quantity:</p>
              <input type="number" onChange={handleQnt} defaultValue={quantity} class="input input-bordered w-full text-center mx-3 text-xl font-semibold" /></h1>
            <h1 className='text-xl flex my-1'><p className='w-1/3  font-bold'>Total Price:</p> <p className='w-full'><span className='font-bold'>${thisParts?.price * quantity}</span></p></h1>
            <h1 className='text-xl flex my-1'><p className='w-1/3  font-bold '>Buyer:</p> <p className='w-full'>{user?.displayName}</p></h1>
            <h1 className='text-xl flex my-2'><p className='w-1/3  font-bold '>Buyer Email:</p> <p className='w-full  '>{user?.email}</p></h1>
            <h1 className='text-xl flex items-center my-1'><p className='w-1/3 font-bold'>Adress:</p>
              <input type="text" onChange={(e) => setAdress(e.target.value)} placeholder='Adress' class="input input-bordered mx-3 text-xl font-semibold w-full" /></h1>
            <h1 className='text-xl flex items-center my-1'><p className='w-1/3 font-bold' >Phone:</p>
              <input type="number" onChange={(e) => setphone(e.target.value)} placeholder='Phone' class="input input-bordered mx-3 text-xl font-semibold w-full" /></h1>
            <h1 className='text-xl flex items-center my-1'><p className='w-1/3 font-bold'>Company or Organization:</p>
              <input type="text" onChange={(e) => setCom(e.target.value)} placeholder='Company' class="input input-bordered mx-3 text-xl font-semibold w-full" /></h1>
            <button onClick={addOrder} disabled={(quantity < thisParts?.minOrdQnt) || (quantity > thisParts?.available)} className='btn  rounded-md btn-sm md:btn bg-gradient-to-r from-primary to-secondary w-full my-3'>Place Order</button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PurchasePage;