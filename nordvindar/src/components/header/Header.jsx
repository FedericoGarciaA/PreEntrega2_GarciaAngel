import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../cartwidget/Cartwidget';
import logoNordvindar from '../../assets/logo-nordvindar.png'
import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <Link to="/"><h1 className="header_tittle">
        NORDVINDAR{" "}
        <img className="logo" src={logoNordvindar} alt="" />{" "}
        FURNISHING
      </h1></Link>
      <ul className="navbar">
        <li>
          <Link to="/"> INICIO </Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link to="/nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
        <li>
          <Link to="/carrito"><CartWidget/>(0)</Link>
        </li>
      </ul>
    </header>
  );
};