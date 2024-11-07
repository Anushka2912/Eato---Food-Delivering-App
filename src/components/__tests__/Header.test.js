import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Should load header component", () => {
    test("Should load header component with a login button", () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );
    
        const loginButton = screen.getByRole("button");
    
        expect(loginButton).toBeInTheDocument();
    });
    test("Should load header component with Cart Items", () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );
    
        const cartImage = screen.getByAltText("cart-icon");
    
        expect(cartImage).toBeInTheDocument();
    });
});

describe("Should load header component with certain functionalities", () => {
    test("Should change login button to logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const button = screen.getByRole("button", {name: "Login"});

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Login");

        fireEvent.click(button);
        expect(button).toHaveTextContent("Logout");

        fireEvent.click(button);
        expect(button).toHaveTextContent("Login");
    });
});