import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";





const useAllUser = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const { isLoading, data: allUser, refetch , } = useQuery(['allUsers', user], () => fetch('http://localhost:5000/users')

  .then(res => {
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