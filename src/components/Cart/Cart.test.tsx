import React from "react";
import { render, screen } from "@testing-library/react";
import { Cart, ChapterCardProps } from "./Cart";

describe("Cart Component", () => {
    const mockData: ChapterCardProps = {
        name: {
            id: "1",
            name: "John Doe",
        },
        data: {
            annotation: "Shopping cart",
            name: "My Shopping Cart",
            points_to_earn: 300,
            id: "1",
            topics: [
                {
                    annotation: "Clothing",
                    name: "Women's Clothing",
                    points_to_earn: 100,
                    id: "1",
                },
                {
                    annotation: "Electronics",
                    name: "Mobile phones",
                    points_to_earn: 200,
                    id: "2",
                },
            ],
        },
    };

    it("renders the cart component", () => {
        render(<Cart {...mockData} />);
        const cartElement = screen.getByTestId("cart");
        expect(cartElement).toBeTruthy();
    });

    it("renders the correct user name", () => {
        render(<Cart {...mockData} />);
        const usernameElement = screen.getByText("John Doe");
        expect(usernameElement).toBeTruthy();
    });

    it("displays the correct mastery points", () => {
        render(<Cart {...mockData} />);
        const masteryPointsElement = screen.getByText("800/1100 Mastery points");
        expect(masteryPointsElement).toBeTruthy();
    });

    it("renders the correct number of topic items", () => {
        render(<Cart {...mockData} />);
        const topicElements = screen.getAllByTestId("details-l1-data");
        expect(topicElements).toHaveLength(2);
    });
});
