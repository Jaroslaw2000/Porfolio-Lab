import React from "react";
import Header from "../components/Header";
import decoration from "../assets/Decoration.png"
import {Link} from "react-router-dom";

const LoginPage = () => {



    return (
        <div>
            <Header />
            <div className="Login">
                <div className="Login-tittle">
                    <h1>Zaloguj się</h1>
                    <img src={decoration} alt="decoration"/>
                </div>
                <div className="Login-container">
                    <h2>Email</h2>
                    <input className="Login-container-input" />
                    <h2>Hasło</h2>
                    <input className="Login-container-input"/>
                </div>
                <div className="Login-footer">
                    <Link to="/Register" className="auth-button">Załóż konto</Link>
                    <Link to="/Login" className="auth-button">Zaloguj się </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
