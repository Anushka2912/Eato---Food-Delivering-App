import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorComponent from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartComponent from "./components/Cart";

const AppLayout = () => {

    const [userName, setUserName] = useState();

    //Dummy Authentication Logic
    useEffect(() => {
        //Make an API call and send username and password
        const data = {
            name: "Anushka Sharma",
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className="app">
                    <HeaderComponent />
                    <Outlet />
                    <FooterComponent />
                </div>
            </UserContext.Provider>
        </Provider>
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
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <CartComponent />,
            }
        ],
        errorElement: <ErrorComponent />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);