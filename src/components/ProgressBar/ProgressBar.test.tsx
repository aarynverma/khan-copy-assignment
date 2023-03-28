import React from "react";
import { render, screen } from "@testing-library/react";
import toHaveStyle from "@testing-library/jest-dom";
import ProgressBar from "./ProgressBar";

describe("ProgressBar Component", () => {
    const mockPercentage = 50;

    it("renders the progress bar component", () => {
        render(<ProgressBar progressPercentage={mockPercentage} />);
        const progressBarElement = screen.getByTestId("progress-bar");
        expect(progressBarElement).toBeTruthy();
    });

    it("renders the progress bar with the correct percentage width", () => {
        render(<ProgressBar progressPercentage={mockPercentage} />);
        const barElement = screen.getByTestId("bar");
        expect(barElement).toHaveStyle({ width: `${mockPercentage}%` });
    });
});
