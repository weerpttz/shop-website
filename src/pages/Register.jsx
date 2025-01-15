import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let [birthDate, setBirthDate] = useState('')
    let [country, setCountry] = useState('')
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            let data = await axios.post(`https://aa48-1-4-251-226.ngrok-free.app/api/user/register`, {
                data: {
                    username, 
                    password, 
                    email, 
                    firstName, 
                    lastName, 
                    phoneNumber,
                    birthDate,
                    country
                }
            })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "สมัครสมาชิกสำเร็จ",
                showConfirmButton: false,
                timer: 1500
              });
            navigate("/login");
            console.log(data)
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "กรุณาลองอีกครั้งนะจ๊ะ"
              });
        }
    }

    return <>
        <div className="text-3xl w-3/6 my-12 mx-auto p-10 rounded-lg bg-red-500">
            <div className="text-center text-5xl font-bold p-2.5">Register</div>
            <div className="mt-5">Username</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your Username" onChange={event => {
                setUsername(event.target.value)
                }} value={username} />
            <div className="mt-5">Password</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your Password" onChange={event => {
                setPassword(event.target.value)
                }} value={password} />
            <div className="mt-5">E-mail</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your E-mail" onChange={event => {
                setEmail(event.target.value)
                }} value={email} />
            <div className="mt-5">Firstname</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your Firstname" onChange={event => {
                setFirstName(event.target.value)
                }} value={firstName} />
            <div className="mt-5">Lastname</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your Lastname" onChange={event => {
                setLastName(event.target.value)
                }} value={lastName} />
            <div className="mt-5">Phonenumber</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your Phonenumber" onChange={event => {
                setPhoneNumber(event.target.value)
                }} value={phoneNumber} />
            <div className="mt-5">Birthdate</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your Birthdate" onChange={event => {
                setBirthDate(event.target.value)
                }} value={birthDate} />
            <div className="mt-5">Country</div>
            <input className="w-full rounded mx-auto text-3xl caret-blue-500" type="text" placeholder="Enter your Country" onChange={event => {
                setCountry(event.target.value)
                }} value={country} />
            <div style={{color: "white"}}>{error}</div>
            <div className="flex justify-between my-8 mx-auto">
                <div className="bg-slate-900 py-2.5 px-5 text-2xl rounded cursor-pointer hover:opacity-80" onClick={handleRegister}>Submit</div>
            </div>
        </div>
    </>
}
export default Register