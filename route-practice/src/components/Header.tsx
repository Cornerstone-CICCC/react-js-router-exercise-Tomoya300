import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-2 mb-5">
      <div className="text-blue-500">LOGO</div>
      <nav>
        <menu className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/products">Products</Link></li>
        </menu>
      </nav>
    </header>
  )
}

export default Header