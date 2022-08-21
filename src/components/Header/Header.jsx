import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from '../../assets/img/logo.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="" />

            <div>
                {props.auth.isAuth ? 
                <div>
                    <span>{props.auth.login}</span>
                    <button onClick={props.logout}>Logout</button>
                </div>
                : <NavLink to="/login">LogIn</NavLink>}
            </div>
        </header>
    )
}

export default Header;