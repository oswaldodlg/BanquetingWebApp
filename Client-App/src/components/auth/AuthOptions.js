import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function AuthOptions(isDesktop) {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const experiencias = () => history.push("/experiencias");
    const informacion = () => history.push("/contacto")
    const inicio = () => history.push('/');
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "")
    }

    return (
        <Nav className="mr-auto">
            {
            userData.user ?
            <Nav>
                {isDesktop && (
                <>
                    <Nav.Link onClick={inicio}>Inicio</Nav.Link> 
                    <Nav.Link onClick={experiencias}>Experiencias</Nav.Link>
                </>
                )} 
                <Nav.Link onClick={logout} >Log out</Nav.Link>
            </Nav>: (

            <Nav>   {isDesktop && (
                    <>
                        <Nav.Link onClick={inicio}>Inicio</Nav.Link> 
                        <Nav.Link onClick={experiencias}>Experiencias</Nav.Link>
                       
                        <Nav.Link onClick={register} >Register</Nav.Link>
                        <Nav.Link onClick={login}>Login</Nav.Link>
                    </>
                    )} 
                    {!isDesktop && (
                    <>
                        <Nav.Link onClick={register} >Register</Nav.Link>
                        <Nav.Link onClick={login}>Login</Nav.Link>
                    </>
                    )} 
            </Nav>
            )}
        </Nav>
    )
}
