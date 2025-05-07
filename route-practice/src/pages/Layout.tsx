import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="bg-purple-300 p-2 h-full min-h-screen flex flex-col ">
            <Header />
            <main className="w-full p-4 flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout