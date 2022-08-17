import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import PaginationComponent from '../../Common/Pagination/Pagination';
import s from './Users.module.css';


const Users = (props) => {

    return (
        <div>
            <PaginationComponent {...props}/>                        
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small === null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'
                                    : u.photos.small} alt="" className={s.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <Button disabled={props.followingInProgress.some(id => id === u.id)} 
                                        onClick={() => {props.unfollow(u.id)}}>unfollow</Button> :
                                <Button disabled={props.followingInProgress.some(id => id === u.id)} 
                                        onClick={() => {props.follow(u.id)}}>follow</Button>}
                        </div>
                    </div>
                    <div className={s.info}>
                        <div>
                            {u.name}
                            <span className={s.status}>{u.status}</span>
                        </div>
                        <div>
                            <div>{''}</div>
                            <div>{''}</div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users;