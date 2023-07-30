import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Importa los módulos necesarios
import { dataLoaderByCat } from '../../helpers/DataLoader';
import { useEffect } from 'react';


export const NavCategories = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      // Llama a la función para cargar los productos por categoría
      const productsData = await dataLoaderByCat(category);
      setProducts(productsData);
      console.log(productsData); // Verifica los productos en la consola

    };

    fetchProductsByCategory();
  }, [category]); // Ejecutar el efecto cuando la categoría cambie

  return (
    <div>
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

      <div>
        <h2>Productos de la categoría: {category}</h2>
        <ul>
          {/* Renderiza los productos en una lista */}
          {products.map((product) => (
            <li key={product.id}>
              <p>Nombre: {product.name}</p>
              <p>Precio: {product.price}</p>
              {/* Aquí puedes mostrar más detalles del producto */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



// import React from "react";
// import { useState } from "react";
// import { Link, useParams } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { dataLoaderByCat } from "../../helpers/DataLoader";

// export const NavCategories = () =>{
//   const { category } = useParams();
//   return (
//     <ul className="navbar_categories">
//       <li>
//         <Link to="/productos/sillones">SILLONES</Link>
//       </li>
//       <li>
//         <Link to="/productos/camas">CAMAS</Link>
//       </li>
//       <li>
//         <Link to="/productos/mesas_de_luz">MESAS DE LUZ</Link>
//       </li>
//       <li>
//         <Link to="/productos/bibliotecas">BIBLIOTECAS</Link>
//       </li>
//     </ul>
// );
// }

