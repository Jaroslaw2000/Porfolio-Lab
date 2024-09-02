import React from 'react';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.png"


const Register = () => {
    return(
        <div>
            <Header />
            <div className="Register">
                <div className="Register-tittle">
                    <h1>Załóż konto</h1>
                    <img src={decoration} alt="devoration" />
                </div>
                <div className="Register-container">
                    <h2>Email</h2>
                    <input className="Register-container-input"/>
                    <h2>Hasło</h2>
                    <input className="Register-container-input"/>
                    <h2>Powtórz hasło</h2>
                    <input className="Register-container-input"/>
                </div>
                <div className="Register-footer">
                    <Link to="/Login" className="auth-button">Zaloguj się</Link>
                    <Link to="/Register" className="auth-button">Załóż konto</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
