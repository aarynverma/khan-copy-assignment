import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
    let screen: any;

    beforeEach(() => {
        screen = render(<Navbar />);
    });

    it("renders the search input", () => {
        const searchInput = screen.getByPlaceholderText("Search");
        expect(searchInput).toBeTruthy();
    });

    it('renders the Khan Academy logo', () => {
        const { container } = render(<Navbar />);

        const svgEl = container.querySelector("[data-icon='fire']") as HTMLImageElement;
        expect(svgEl.classList.toString()).toContain("svg-khan");
    });

    it("renders the user option", () => {
        const dropdown = screen.getByTestId('navbar-user-options');
        expect(dropdown).toBeTruthy();
    });
});


