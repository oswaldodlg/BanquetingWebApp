import React, { useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Axios from 'axios';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserContext from './context/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';


import PhotoApp from './components/pages/Photo-app/PhotoApp';
import Informacion from './components/pages/Banqueting-Inicio/Informacion';
import Info from './components/pages/Info/Info';


export default function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 700);
    };

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token")
            if (token === null){
                localStorage.setItem("auth-token", "");
                token="";
            }
            const tokenRes = await Axios.post(
                "/users/tokenIsValid",
                null,
                { headers: { "x-auth-token": token } }
            )
            if (tokenRes.data){
                const userRes = await Axios.get("/users/", {
                    headers: { "x-auth-token": token }
                });
                setUserData({
                    token,
                    user: userRes.data,
                })
            }
        }
        checkLoggedIn();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Header isDesktop={isDesktop}/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Experiencias" component={PhotoApp} />
                    <Route path="/Info" component={Info} /> 
                </Switch>
                {!isDesktop && <BottomNav />}
            </UserContext.Provider>
        </BrowserRouter>
    )
}
