import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth"
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function Profile() {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    (async() => {
      const data =await axiosSecure.get(`/user/${user.email}`);
      setCurrentUser(data.data);
})()
  }, [user?.email, axiosSecure]);
  console.log(currentUser);
  return (
    <div>Profile</div>
  )
}

export default Profile