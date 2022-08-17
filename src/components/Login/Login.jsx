import React from "react";
import { useForm } from "react-hook-form"
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

let Login = (props) => {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({mode: 'onChange'});
    
    const onSubmit = data => {
        console.log(data)
        props.login(data.email, data.password, data.rememberMe);
        reset();
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>E-mail</label>
                    <input {...register('email', { required: "Required!", pattern: {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'invalid email!'} })}/>
                    <div>{errors.email && <span>{errors.email.message || 'Error!'}</span>}</div>
                </div>
                <div>
                    <label>Password</label>
                    <input {...register('password', { required: 'Required!', minLength: {value: 8, message: 'Minimum 8 symbols!'} })} type="password" />
                    <div>{errors.password && <span>{errors.password.message || 'Error!'}</span>}</div>
                </div>
                <div>
                    <input {...register('rememberMe')} type="checkbox" /> remember me
                </div>
                {props.postErrorText && <div>{props.postErrorText}</div>}
                <button variant="contained" type="submit" disabled={!isValid}>Login</button>
            </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        postErrorText: state.auth.postErrorText
    }
}

export default connect(mapStateToProps, {login})(Login);