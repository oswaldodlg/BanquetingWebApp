import React, {useState, useContext} from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import UserContext from '../../context/UserContext';
import ErrorNotice from '../../components/misc/ErrorNotice';
import Axios from 'axios';

import './styles.css'

export default function Register() {
    const [email, setEmail]= useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory(); 

    const submit = async (e) => {
        e.preventDefault();
        try {
            const newUser = {email, password, passwordCheck, displayName};
            const RegisterRes= await Axios.post(
                "/users/register", 
                newUser
            );
            let user = RegisterRes.data
            console.log(user.email)
            console.log(RegisterRes.data._id)
            const EmailRes= await Axios.post(
                '/confirmation', 
                {email: user.email, id: user._id});
            // const loginRes = await Axios.post(
            //     "/users/login",
            //     {
            //         email,
            //         password,
            //     });
            // setUserData({
            //     token: loginRes.data.token,
            //     user: loginRes.data.user,
            // });
            // localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/login");
        } catch (err){
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <Form onSubmit={submit} className="justify-content-md-center">
            <FormGroup className='Register-form'>
                <h2 className="form-title">Register</h2>
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <Form.Label>Verify Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPasswordCheck(e.target.value)} />
                <Button type="submit" value="submit" className="button-submit">Register</Button>
            </FormGroup>
        </Form>
    )
}
