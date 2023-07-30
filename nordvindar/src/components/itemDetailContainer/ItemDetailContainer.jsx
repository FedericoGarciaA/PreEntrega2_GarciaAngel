import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataLoader } from '../../helpers/DataLoader';


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        const data = await dataLoader();
        const product = data.find((prod) => prod.id === parseInt(id));
        setProduct(product);
      };
      fetchProduct();
    }, [id]);
  
    // Verificar si se encontró el producto o si el id es inválido
    if (!product) {
      return <div>Producto no encontrado</div>;
    }
  
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6" >
            <img className="object-contain w-full h-40-contain" src={product.img} alt={product.name} />
            <h4 className="text-5xl mt-2">{product.name}</h4>
            <p className= "product_description">{product.description}</p>
            <p className="text-4xl">${product.price}</p>
            <div className="flex container mx-auto space-x-10">
            <button className="bg-black text-white text-3xl px-4 py-2 mt-4">Añadir al carrito</button>
            </div>
        </div>
        </div>
    );
  };