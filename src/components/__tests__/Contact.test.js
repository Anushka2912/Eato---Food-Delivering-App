import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact Component", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("heading");

    expect(heading).toBeInTheDocument();
});