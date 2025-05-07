import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { Link } from "react-router-dom"

const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            setProducts(data.products)
        }
        getProduct()
    }, [])
    
    return (
        <div>
            <h2>Products List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="mb-2">
                        <p>{product.title}</p>
                        <Link to={`/products/${product.id}`}>View Product Detail</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsList