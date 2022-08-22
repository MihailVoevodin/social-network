import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import styles from './Header.module.css';
import logo from '../../assets/img/logo.png'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="" />

            <div>
                {props.auth.isAuth ? 
                <div className={styles.loginArea}>
                    <img className={styles.photo} src={props.profile ? props.profile.photos.small : null} alt=''/>
                    <span className={styles.login}>{props.auth.login}</span>
                    <Tooltip className={styles.logout} title='Log Out'>
                        <Button className={styles.logoutBtn} onClick={props.logout}><LogoutOutlined /></Button>
                    </Tooltip>
                </div>
                : <NavLink to="/login">LogIn</NavLink>}
            </div>
        </header>
    )
}

export default Header;