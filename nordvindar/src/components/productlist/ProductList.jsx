import { ProductCard } from "../productcard/ProductCard"
const ProductList = ({products}) => {
    return (
       <div className=" grid gap-10 grid-cols-6">
            {
            products.map ((product) => <ProductCard key={product.id} product={product}/>)
            }
       </div> 
    )
}

export default ProductList 