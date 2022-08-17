import React from "react";
import {NavLink} from 'react-router-dom';
import Friend from "../Friends/Friend/Friend";
import s from './Navbar.module.css';



const Navbar = (props) => {

    let state = props.store.getState().sidebar;

    const friendsElements = state.friends.map(f => <Friend key={f.id} name={f.name} avatar={f.avatar}/>)

    return (
        <nav className={s.nav}>
            <div ><NavLink to="/profile" className={({ isActive }) => isActive ? s.active : s.item}>Profile</NavLink></div>
            <div ><NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active : s.item}>Messages</NavLink></div>
            <div ><NavLink to="/news" className={({ isActive }) => isActive ? s.active : s.item}>News</NavLink></div>
            <div ><NavLink to="/music" className={({ isActive }) => isActive ? s.active : s.item}>Music</NavLink></div>
            <div ><NavLink to="/settings" className={({ isActive }) => isActive ? s.active : s.item}>Settings</NavLink></div>
            <div ><NavLink to="/users" className={({ isActive }) => isActive ? s.active : s.item}>Users</NavLink></div>
            <div className={s.friends_link}>
                <NavLink to="/friends" className={({ isActive }) => isActive ? s.active : s.item}>
                    Friends
                </NavLink>
                <div className={s.friends}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;