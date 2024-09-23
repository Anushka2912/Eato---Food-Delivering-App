import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/about",
                element: <AboutComponent />,
            },
            {
                path: "/contact",
                element: <ContactComponent />,
            },
        ],
        errorElement: <ErrorComponent />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);