import React, { useState } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";


import { NavLink, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Wypełnij wszystkie pola.');
            return;
        }
    }

    try {
        const response = await fetch('http://localhost:8080/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();

            // Zapisz token sesji (jeśli zwracany) w localStorage
            localStorage.setItem('authToken', data.token);

            setSuccessMessage('Zalogowano pomyślnie.');
            setErrorMessage('');

            // Przekierowanie na stronę główną
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } else {
            const errorText = await response.text();
            setErrorMessage(errorText || 'Błąd logowania.');
            setSuccessMessage('');
        }
    } catch (error) {
        setErrorMessage('Błąd połączenia.');
        setSuccessMessage('');
    }
};

return (
    <>
        <Navbar />
        <div className="form-container">
            <div className="form-wrapper">
                <h2 className="text-center mb-4">Logowanie</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form className="custom-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Adres Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Wprowadź email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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


export default Login;
