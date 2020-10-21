import React from 'react';
import {Alert} from 'react-bootstrap';

export default function ErrorNotice(props) {
        return (
            <Alert variant="danger" onClick={props.clearError} dismissible>
                <p>{props.message}</p>
            </Alert>
            )
    }
