import React, {useState, useContext} from 'react';
import {Form, FormGroup, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../../components/misc/ErrorNotice';
import Axios from 'axios';

export default function Login() {
    const [email, setEmail]= useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory(); 

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = {email, password};
            const loginRes = await Axios.post(
            "http://localhost:5000/users/login",
            loginUser
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err){
            err.response.data.msg && setError(err.response.data.msg);
        }
        
    };

    return (
        <Form onSubmit={submit} className="justify-content-md-center">
            <FormGroup className='Register-form'>
                <h2 className="form-title">Log in</h2>
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <Button onTouchStart={submit} type="submit" value="submit" className="button-submit">Log in</Button>
            </FormGroup>
        </Form>
    )
}
