import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const [product, setProduct] = useState<Product>()
    const { id } = useParams()
    useEffect(() => {
        const getProductById = async () => {
            const res = await fetch(`http://dummyjson.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
            console.log(data)
        }
        getProductById()
    }, [id])
    return (
        <div>
            <h2>Product ID: {id}</h2>
            <ul>
                <li>Product: {product?.title}</li>
                <li>Price: {product?.price}</li>
            </ul>
        </div>
    )
}

export default ProductDetail