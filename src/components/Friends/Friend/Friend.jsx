import React from "react";
import s from './../Friends.module.css';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div>
                <img src={props.avatar} alt="" />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;
