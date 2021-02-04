import React, {useState, useContext} from 'react';
import {Form, FormGroup, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import ReviewContext from '../../context/ReviewContext';
import ErrorNotice from '../../components/misc/ErrorNotice';
import Axios from 'axios';

export default function UpdatePassword() {
    const [email, setEmail]= useState();
    const [error, setError] = useState();

    const {updateInfo, setUpdateInfo} = useContext(ReviewContext);
    const history = useHistory(); 

    const submit = async (e) => {
        e.preventDefault();
        try {
            const checkUser = { email };
            const checkRes = await Axios.post(
            "/users/update",
            checkUser
            );
            setUpdateInfo({
                id: checkRes.data.id, 
                email: checkRes.data.email
            })
            history.push("/resetPassword");
        } catch (err){
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (
        <Form onSubmit={submit} className="justify-content-md-center">
        <FormGroup className='Register-form'>
            <h2 className="form-title">Type Email</h2>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            <Button type="submit" value="submit" className="button-submit">Next</Button>
        </FormGroup>
    </Form>
    )
}
