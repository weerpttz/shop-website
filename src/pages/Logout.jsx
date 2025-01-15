import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Logout = () => {
    const { token, setToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
          try {
              await axios.post(`https://aa48-1-4-251-226.ngrok-free.app/api/user/logout`)
              setToken()
          } catch (error) {
              console.log(error)
          }
        }
        handleLogout()
      }, [])

    useEffect(() => {
        setTimeout(() => {
            navigate("login");
        }, 100)
    }, [token])

    return <>
    </>
}
export default Logout