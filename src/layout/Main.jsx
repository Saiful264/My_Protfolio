import { Outlet } from "react-router-dom";
import Footer from "../page/Footer/Footer";
import Navbar from "../page/Navdar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="md:min-h-[calc(100vh-341px)]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;