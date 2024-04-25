import {LOGO_URL} from "../assets/contents";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

const Header = () => {

    const [btnReact , setbtnReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <NavLink className="routelink" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="routelink" to="/about">About Us</NavLink>
                        </li>
                    <li>
                        <NavLink className="routelink" to="/contact">Contact Us</NavLink>
                    </li>
                    <button className="login" onClick={()=>{
                        btnReact === "Login" ? setbtnReact("Logout") : setbtnReact("Login")
                    }}>
                        {btnReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

