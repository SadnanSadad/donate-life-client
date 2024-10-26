import { Outlet, ScrollRestoration } from "react-router-dom";
import Heading from "../pages/shared/Heading/Heading";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Heading></Heading>

            <Outlet></Outlet>

            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;