import React, {useState, useContext} from 'react';
import {Spinner} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';


export default function EmailVerif() {
    const history = useHistory();
    const verifResponse = async () => {
        try {
            await Axios.put(
                "/confirmation/:id"
            )
            history.push("/login");
        } catch(err){
            console.log(err)
        } 
    }

    return (
        <div>
           Your email is being verified 
           {verifResponse()}
           {!verifResponse && <Spinner />}
        </div>
    )
}
