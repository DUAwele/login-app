import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"

function Layout({children}) 
{
    return (
         <div className="container mt-4">
            <h3 className="text-center mb-4 bg-danger bg-gradient fst-italic text-light">Mechanic quiz</h3>
            <nav>
                <Link className="btn btn-warning me-2 fst-italic reg" to="/"> Register </Link>
                <Link className="btn btn-warning me-2 fst-italic reg" to="/add"> Login </Link>
            </nav>
            {children}
         </div>   
    )
}

export default Layout;