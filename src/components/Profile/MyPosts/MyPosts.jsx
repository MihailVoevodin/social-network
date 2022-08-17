import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { useForm } from "react-hook-form";


const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.post} like={p.likesCount}/>)

    const AddPostForm = () => {
        const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: 'onChange'});
        const onSubmit = data => {
            console.log(data);
            props.addPost(data.post);
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea {...register('post', { required: true, maxLength: {value: 300, message: 'Max 300 symbols!'} })} placeholder="Text post"/>
                    <div>{errors.post && <span>{errors.post.message || 'Error!'}</span>}</div>
                </div>
                <button type="submit" disabled={!isValid}>Post</button>
            </form>
        )
    }

    return (
        <div className={s.posts}>
            <div className={s.myPosts_title}>
                My posts
            </div>
            <div>
                <AddPostForm />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;