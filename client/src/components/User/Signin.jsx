import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/action/userAction';
const Signin = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({

        email: '',
        password: '',

    });

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();



        dispatch(loginUser(user));

    };

    return (
        <div className="sign-in">
            <h2 className="sign-in__heading">Sign In</h2>
            <form className="sign-in__form" onSubmit={onSubmit}>
                <label className="sign-in__label" htmlFor="email">Email:</label>
                <input className="sign-in__input" type="email" id="email" name="email" onChange={onChange} value={user.email} />
                <label className="sign-in__label" htmlFor="password">Password:</label>
                <input className="sign-in__input" type="password" id="password" name="password" onChange={onChange} value={user.password} />
                <button className="sign-in__button" type="submit" >Sign In</button>
                <Link to={"/register"}>Register</Link>
            </form>
        </div>
    )
}

export default Signin