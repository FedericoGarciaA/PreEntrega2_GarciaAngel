import React from "react";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { dataLoaderByCat } from "../../helpers/DataLoader";

export const NavCategories = () =>{
  const { category } = useParams();
  return (
    <ul className="navbar_categories">
      <li>
        <Link to="/productos/sillones">SILLONES</Link>
      </li>
      <li>
        <Link to="/productos/camas">CAMAS</Link>
      </li>
      <li>
        <Link to="/productos/mesas_de_luz">MESAS DE LUZ</Link>
      </li>
      <li>
        <Link to="/productos/bibliotecas">BIBLIOTECAS</Link>
      </li>
    </ul>
);
}

// export const NavCategories = () => {
//     return (
//         <ul className="navbar_categories">
//         <li>
//           <Link to="/productos"> SILLONES </Link>
//         </li>
//         <li>
//           <Link to="/productos">CAMAS</Link>
//         </li>
//         <li>
//           <Link to="/productos">MESAS DE LUZ</Link>
//         </li>
//         <li>
//           <Link to="/productos">BIBLIOTECAS</Link>
//         </li>
//         <li>
//           <Link to="/productos">SILLAS</Link>
//         </li>
//         <li>
//           <Link to="/productos">MESAS DE CAFE</Link>
//         </li>
//         <li>
//           <Link to="/productos">ESCRITORIOS</Link>
//         </li>
//         <li>
//           <Link to="/productos">MESAS</Link>
//         </li>
//         <li>
//           <Link to="/productos">SOFAS</Link>
//         </li>
//         <li>
//           <Link to="/productos">GUARDARROPAS</Link>
//         </li>
//       </ul>
//     )
// }