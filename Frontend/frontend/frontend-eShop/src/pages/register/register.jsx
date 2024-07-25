import React, { useState } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    userSurname: '',
    dob: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.userName || !formData.userSurname || !formData.dob || !formData.email || !formData.password) {
      setErrorMessage('Wypełnij wszystkie pola.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const queryParams = new URLSearchParams({
      userName: formData.userName,
      userSurname: formData.userSurname,
      dob: formData.dob,
      email: formData.email,
      password: formData.password
    }).toString();

    try {
      const response = await fetch(`http://localhost:8080/api/v1/user/register?${queryParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Rejestracja zakończona sukcesem');
        setErrorMessage('');
        setFormData({
          userName: '',
          userSurname: '',
          dob: '',
          email: '',
          password: '',
        });
        setTimeout(() => {
          navigate('/registerComplete');
        }, 2000);
      } else {
        const errorText = await response.text();
        setErrorMessage(errorText || 'Błąd rejestracji');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Błąd połączenia');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "180px" }}></div>
      <div className="form-container">
        <div className="form-wrapper">
          <h2 className="text-center mb-4">Rejestracja</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">Imię</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                placeholder="Wprowadź imię"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userSurname">Nazwisko</label>
              <input
                type="text"
                className="form-control"
                id="userSurname"
                name="userSurname"
                placeholder="Wprowadź nazwisko"
                value={formData.userSurname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Data urodzenia</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                placeholder="Wprowadź datę urodzenia"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adres Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Wprowadź email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Wprowadź hasło"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Zarejestruj się
            </button>
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

export default Register;
