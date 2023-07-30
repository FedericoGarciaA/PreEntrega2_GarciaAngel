

import React from "react";
import { useParams } from "react-router-dom";
import { dataLoader } from "../../helpers/DataLoader";
import ProductList from "../productlist/ProductList";
import { useState, useEffect } from "react";
import "./itemlistcontainer.css";
import { NavCategories } from "../navCategories/NavCategories"


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    const { category } = useParams()
    
  useEffect(() => {
      dataLoader()
      .then(r => {
          if (category) {
              setProducts( r.filter(prod => prod.category === category) )
            } else {
                setProducts(r)
            }
          })
      }, [category])
      
      return (
          <div>
        < NavCategories/>
          { 
                  <ProductList products={products}/>
                }
      </div>
  )
}


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { dataLoaderByCat } from "../../helpers/DataLoader";
// import ProductList from "../productlist/ProductList";
// import { NavCategories } from "../navCategoryes/NavCategories";

// export const ItemListContainer = () => {
//   const [products, setProducts] = useState([]);
//   const { category } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const filteredProducts = await dataLoaderByCat(category);
//         setProducts(filteredProducts);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [category]);

//   return (
//     <div>
//       <NavCategories />
//       {products.length > 0 ? (
//         <ProductList products={products} />
//       ) : (
//         <p>No se encontraron productos.</p>
//       )}
//     </div>
//   );
// };