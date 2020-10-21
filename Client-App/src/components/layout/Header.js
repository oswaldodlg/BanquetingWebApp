import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import AuthOptions from '../auth/AuthOptions';
import { useHistory } from 'react-router-dom';



export default function Header(isDesktop) {
    const home = () => history.push("/")
    const history = useHistory();
    return (
        <Navbar expand="lg" className="Nav-bar">
            <Navbar.Brand onClick={home} className="brand-name">Banqueting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <AuthOptions isDesktop={isDesktop}/>
            </Navbar.Collapse>
        </Navbar>
    )
}
