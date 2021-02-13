import React, {useEffect} from 'react';
import {Spinner, Button} from 'react-bootstrap';
import {useHistory, useParams} from 'react-router-dom';
import Axios from 'axios';


export default function EmailVerif() {

    let id = useParams();
    
    const history = useHistory();
    const verifResponse = async () => {
        try {
            await Axios.put(
                `/confirmation/${id}`,
            )
        } catch(err){
            console.log(err)
        } 
    }

    useEffect(() => {
        verifResponse().then(history.push('/login'))
      }, []);

    

    return (
        <div>
            <h4>Validating your email</h4> 
            {/* <Button onClick={() => {verifResponse()}}>Verify</Button> */}
            <Spinner  animation="border"/>
        </div>
    )
}
