import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useNavigate } from 'react-router-dom';


function RegisterComplete(){

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    }

    return(
        <>
        <Navbar/>
        <div style={{ height: "180px" }}></div>
            <div className="form-container">
                <div className="form-wrapper">
                    <h2 className="text-center mb-4">Konto zostało pomyślnie utworzone</h2>
                    <button onClick={handleGoHome} className="btn btn-primary btn-block">
                        Powrót na stronę główną
                    </button>
                </div>
            </div>
            <div style={{ height: "180px" }}></div>
        
        <Footer/>
        </>
    );
}

export default RegisterComplete;