import { render, screen } from "@testing-library/react";
import RestaurantCard from "../ResataurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCard Component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Olio - The Wood Fired Pizzeria");

    expect(name).toBeInTheDocument();
});