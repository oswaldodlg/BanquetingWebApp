import React, {useState, useContext} from 'react';
import {Form, FormGroup, Button} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import ReviewContext from '../../context/ReviewContext';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../../components/misc/ErrorNotice';
import Axios from 'axios';

export default function ResetPassword() {
    const [error, setError] = useState()
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();

    const {setUserData} = useContext(UserContext);
    const {updateInfo, setUpdateInfo} = useContext(ReviewContext);
    const history = useHistory(); 

    console.log(updateInfo)


    const submit = async (e) => {
        e.preventDefault();
        try {
            const id= updateInfo.id
            const checkUser = { id, password, passwordCheck };
            const updatePassword = await Axios.put(
            "/users/resetPassword",
            checkUser
            );
            history.push("/login");
        } catch (err){
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    
    return (
        <Form onSubmit={submit} className="justify-content-md-center">
            <FormGroup className='Register-form'>
            <h2 className="form-title">Type New Password</h2>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <Form.Label>{updateInfo.email}</Form.Label> <br />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <Form.Label>Verify New Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPasswordCheck(e.target.value)} />
                <Button type="submit" value="submit" className="button-submit">Reset Password</Button>
            </FormGroup>
    </Form>
    )
}
