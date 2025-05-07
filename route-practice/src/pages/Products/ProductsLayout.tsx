import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
    return (
        <div className="bg-red-500">
            <Outlet />
        </div>
    )
}

export default ProductsLayout