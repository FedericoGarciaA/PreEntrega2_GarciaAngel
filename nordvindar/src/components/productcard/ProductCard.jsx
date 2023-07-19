import React from "react"
import { Link } from "react-router-dom"
import './productCard.css'


export const ProductCard = ({product}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6" >
            <img className="object-contain w-full h-40-contain" src={product.img} alt={product.name} />
            <h4 className="text-5xl mt-2">{product.name}</h4>
            <p className="text-4xl">${product.price}</p>
            <div className="flex container mx-auto space-x-10">
            <button className="bg-black text-white text-3xl px-4 py-2 mt-4">Añadir al carrito</button>
            <Link to={`/producto/${product.id}`}>
  <button className="bg-black text-white text-3xl px-4 py-2 mt-4">Ver más</button>
</Link>
            </div>
        </div>
    )
}