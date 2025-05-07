import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import ProductsLayout from "./pages/Products/ProductsLayout"
import ProductsList from "./pages/Products/ProductsList"
import ProductDetail from "./pages/Products/ProductDetail"
import NotFound from "./pages/NotFound"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="products" element={<ProductsLayout />}>
              <Route index element={<ProductsList />}/>
              <Route path=":id" element={<ProductDetail />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App