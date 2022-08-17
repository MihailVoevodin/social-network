import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06ac0lN__d5B_U6sz-AGjU-Ttuy3pyxNTmgGSBz04-K-QP1WCi-8IjQpsQgXZFGj7EMs&usqp=CAU" alt="Avatar" />
            {props.message}
            <div>like {props.like}</div>
        </div>
    )
}

export default Post;