import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
            let data = await axios.get(`https://aa48-1-4-251-226.ngrok-free.app/api/user`)
            setUsers(data.data)
        }
        getUser()
    }, [])
    
    return <>
        <h1>H O M E P A G E !! !! !!</h1>
    </>
}
export default Home