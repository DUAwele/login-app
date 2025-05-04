import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Login.css'


function Login(){
        const [Username , setUsername] = useState('')
        const [Password , setPassword] = useState('')

        const [loginStatus, setLoginstatus] = useState('')

        function login(){
            axios.post("http://localhost:3000/api/login", {User: Username, password: Password
            }).then((response) => {
                if (response.data.message){
                    setLoginstatus(response.data.message)
                } else {
                    setLoginstatus(response.data[0].Username)
                }
                
            })

            alert('Welcome '+ Username)


        }
    


    return(
        <div className='bg-gradient d-flex justify-content-center align-items-center mt-3'>
            <div className='p-3 bg-dark w-25'>
        <form id="Login" onSubmit={(e) => e.preventDefault()} >
            <div>
            <label id="" className='text-light' >Username</label>
            <input className='form-control' type="text" name=""  placeholder="" onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div>
            <label id="" className='text-light' >Password</label>
            <input className='form-control' type="password" name="" placeholder="" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button onClick={login} className="btn btn-light text-dark mt-2">Login</button>

        </form>
        </div>
    </div>

    )
}

export default Login;