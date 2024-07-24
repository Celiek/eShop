import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";


import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Login() {
    return (
        <>
            <Navbar />
            <div className="form-container">
                <div className="form-wrapper">
                    <h2 className="text-center mb-4">Logowanie</h2>
                    <form className="custom-form">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Adres Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Wprowadź email"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                Nigdy nie udostępnimy Twojego emaila nikomu innemu.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Hasło</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Hasło"
                            />
                        </div>
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Zapamiętaj mnie
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Zaloguj się
                        </button>
                        <div className="mt-3">
                            <a href="#" className="text-reset">
                                Zapomniałeś hasła?
                            </a>
                        </div>
                        <div className="mt-3"> 
                                <NavLink to="/register" className="text-reset">
                                    Nie masz konta? Zarejestruj się!
                                </NavLink>
                        </div>
                    </form>
                    <div className="additional-info mt-4">
                        <p className="text-muted">
                            Jeśli masz jakiekolwiek pytania lub potrzebujesz pomocy, skontaktuj się z naszym działem wsparcia.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ height: "180px" }}></div>
            <Footer />
        </>
    );
}

export default Login;
