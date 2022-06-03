import auth from "../firebase.init";
import useAllUser from "./UseAllUser";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../shared&minifier/Loading/Loading';

const useAdmin = () => {
  const [user, loading] = useAuthState(auth);

  const { isLoading, allUser, refetch } = useAllUser(user);

  if (loading || isLoading) {
    return <Loading></Loading>
  }


  const currentUser = allUser?.find(u => u?.email === user?.email)

  return currentUser?.role ;
}

export default useAdmin ;