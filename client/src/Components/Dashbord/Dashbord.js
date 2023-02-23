import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../JS/Actions/User';



function Dashboard() {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  return (
    <div>
    <h1 style={{color:"white"}}>  Dashboard  </h1>   
        <button onClick={()=>{dispatch(logout)
        navigate("/")
        }}>logout</button>
    </div>
  )
}

