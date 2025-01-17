import "../../assets/css/NavBar.css"
import React from "react";
import { Link } from "react-router-dom";

var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about' target="blank">About</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/useeffect'>Use Effect</Link></li>
                    <li><Link to='/useref'>Use Ref</Link></li>
                    <li><Link to='/usecontext'>Use Context</Link></li>
                    <li><Link to='/usememo'>Use Memo</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar