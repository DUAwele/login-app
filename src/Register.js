import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register(){
    const {userReg, setUserReg} = useState('')
    const {passwordReg, setPasswordReg} = useState('')
    return(
        <div>
            <form>
                <div>
                <label id="User" >Username</label>
                <input type="text" placeholder="" onChange={(e) => {setUserReg(e.target.value)}}/>
                </div>
                <div>
                <label id="password" >Password</label>
                <input type="text" placeholder="" onChange={(e) => {setPasswordReg(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-warning">Register</button>

            </form>
        </div>

    );
}