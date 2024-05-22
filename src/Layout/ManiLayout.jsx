import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const ManiLayout = () => {
    const location = useLocation();
    console.log('location', location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
   
    return (
        <div>
             { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default ManiLayout;