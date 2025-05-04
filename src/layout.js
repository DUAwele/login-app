import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"

function Layout({children}) 
{
    return (
         <div className="container mt-4 ">
            <h3 className="text-center mb-4 bg-dark bg-gradient fst-italic text-light">Sign up and log in</h3>
            <nav className='bg-gradient d-flex justify-content-center align-items-center' >
                <Link className="btn btn-light btn btn-outline-dark me-2 fst-italic reg" to="/"> Register </Link>
                <Link className="btn btn-light btn btn-outline-dark me-2 fst-italic reg" to="/Login"> Login </Link>
            </nav>
            {children}
         </div>   
    )
}

export default Layout;