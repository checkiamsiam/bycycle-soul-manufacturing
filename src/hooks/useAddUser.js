import { useEffect, useState } from "react"


const useAddUser = user => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (user?.user?.email) {

      fetch('http://localhost:5000/users', {
        method: 'POST',
        body: JSON.stringify({ 'email': user?.user?.email }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('accessToken', data.accessToken)
          setToken(data?.accessToken)
        })
    }
  }, [user])
  return [token]
}

export default useAddUser;

  //   fetch(`http://localhost:5000/users/${user?.user?.email}`, {
      //   method: 'PUT',
      //   body: JSON.stringify({ 'email': user?.user?.email }),
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      // })
      //   .then(res => res.json())
      //   .then(data => { })