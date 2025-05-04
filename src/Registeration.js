import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Registeration(){
    const [userReg , setUserReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')

    function register(){
        axios.post("https://37a38820-92f5-4e8c-a03a-b7c0d149d2bc-00-iwdajyn5aymx.spock.replit.dev/api/register", {User: userReg, password: passwordReg
        }).then((response) => {
            console.log(response);
        })

        alert('Thank you for signing up')

    }

    return(
        <div className=' bg-gradient d-flex justify-content-center align-items-center mt-3 '>
            <div className='p-3 bg-dark w-25'>
            <form id="register" onSubmit={(e) => e.preventDefault()} >
                <div>
                <label id="user" className='text-light' >Username</label>
                <input className='form-control' type="text" placeholder="" onChange={(e) => {setUserReg(e.target.value)}}/>
                </div>
                <div>
                <label id="password" className='text-light' >Password</label>
                <input className='form-control' type="password" placeholder="" onChange={(e) => {setPasswordReg(e.target.value)}} />
                </div>
                <button onClick={register} className="btn btn-light text-dark mt-2">Register</button>

            </form>
            </div>
        </div>
        

    );
}

export default Registeration;