import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";




const useAllUser = (user) => {
  const navigate = useNavigate();
  const { isLoading, data: allUser, refetch } = useQuery(['allusers', user], () => fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => {
    if (res.status === 403) {
      signOut(auth)
      localStorage.removeItem('accessToken')
      navigate('/')
      return
    }
    return res.json()
  }))
  return { isLoading, allUser, refetch }
}
export default useAllUser;