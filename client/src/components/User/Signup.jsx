import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../redux/action/userAction';



const Register = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();

        if (user.password === user.password2) {

            dispatch(registerUser(user));
        } else {
            console.log("password not match")
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div className="register-form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={onChange}
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={onChange}
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={onChange}
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="password2">Confirm Password:</label>
                    <input
                        type="password"
                        name="password2"
                        value={user.password2}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" value="Register" />
                <Link to={"/login"}>Login</Link>
            </form>
        </div>
    );
};

export default Register;
