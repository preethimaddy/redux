import React from 'react'
import { useDispatch } from "react-redux";
import  {login, logout} from "../features/user"

const Login = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <button type = "button"onClick={()=>{
            dispatch(login({name:"Pree", age:27, email:"preethi@gmail.com"})
            )}}>Login</button>
            <button type = "button"onClick={()=>{
            dispatch(logout()
            )}}>Logout</button>
        </div>
  )
}

export default Login