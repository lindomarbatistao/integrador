import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; 

// Importando as imagens
import temperaturaImg from "../../images/temperatura.jpg";
import umidadeImg from "../../images/umidade.png";
import contadorImg from "../../images/contador.jpg";
import luminosidadeImg from "../../images/luminosidade.jpg";


const Home = () => {
    const [token, setToken] = useState(localStorage.getItem("accessToken"));

    return (
        <div className="home-container">
            {/* Menu de Navegação */}
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/temperatura">Temperatura</Link></li>
                    <li><Link to="/umidade">Umidade</Link></li>
                    <li><Link to="/contador">Contador</Link></li>
                    <li><Link to="/luminosidade">Luminosidade</Link></li>
                </ul>
                <div className="login-icon">
                    <Link to="/pages/login/index.js">Login</Link>
                </div>
            </nav>

            <h1>Bem-vindo à Home!</h1>
            <p>Você fez login com sucesso.</p>
            <div className="quad">
                <p className="token">Seu Token: {token}</p>
            </div>

            {/* Informações dos sensores com layout alternado */}
            <div className="sensor-info">
                <div className="sensor-section left">
                    <img src={temperaturaImg} alt="Sensor de Temperatura" />
                    <p>O sensor de temperatura monitora e registra as variações de temperatura em tempo real.</p>
                </div>
                <div className="sensor-section right">
                    <p>O sensor de umidade mede a quantidade de umidade presente no ambiente.</p>
                    <img src={umidadeImg} alt="Sensor de Umidade" />
                </div>
                <div className="sensor-section left">
                    <img src={contadorImg} alt="Sensor Contador" />
                    <p>O contador monitora e registra a frequência de eventos ou pessoas em uma área específica.</p>
                </div>
                <div className="sensor-section right">
                    <p>O sensor de luminosidade mede a intensidade da luz no ambiente.</p>
                    <img src={luminosidadeImg} alt="Sensor de Luminosidade" />
                </div>
            </div>
        </div>
    );
};

export default Home;
