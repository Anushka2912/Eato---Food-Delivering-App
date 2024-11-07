import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should load Contact Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});