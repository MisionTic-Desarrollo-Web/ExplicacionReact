import React from 'react'
import logoGato from 'media/logo-gatos.png';

const Header = () => {
    return (
        <header>               
        <ul className="navbar">
            <li><img src={logoGato} alt="imagen-gato" className="logo"/></li>
            <li><button className="button main-button">Nuevo Post</button></li>
            <li><button className="button main-button">Login</button></li>
            <li><button className="button secondary-button">Registro</button></li>
            <li>
                <div className="busqueda">
                    <input type="text" placeholder="Buscar una raza de gatos" className="enter"/>
                    <i className="fas fa-search lupa"></i>
                </div>
            </li>
        </ul>
    </header>
    )
}

export default Header
