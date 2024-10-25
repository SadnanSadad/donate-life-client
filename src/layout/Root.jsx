import { Outlet, ScrollRestoration } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;