import React, { useState } from "react";
import "./styles.css"; // Importar o estilo da página 'home'

const Home = () => {

    const [token, setToken] = useState(localStorage.getItem("accessToken"))

    return (
        <div className="home-container">
            <h1>Bem-vindo à Home!</h1>
            <p>Você fez login com sucesso.</p>
            <div className="quad">
                <p className="token">Seu Token {token}</p>
            </div>
        </div>
    );
};

export default Home;
