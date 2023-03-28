import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
    const mainData = [{ id: "lesson1", name: "Lesson 1" }];
    const progressData = {
        progress: [
            { id: '1', progress: 50 },
            { id: '2', progress: 80 },
            { id: '3', progress: 25 },
        ]
    };

    it("renders without crashing", () => {
        render(<Sidebar loading={false} data={progressData} />);
    });

    it("displays loader when loading prop is true", () => {
        render(<Sidebar loading={true} data={progressData} />);
        const loader = screen.getByTestId("loader-container");
        expect(loader).toBeTruthy();
    });

    it("displays course summary and progress bars when loading prop is false", () => {
        render(
            <Sidebar loading={false} data={progressData} />
        );
        const courseSummary = screen.getByText("Course summary");
        expect(courseSummary).toBeTruthy();
    });

    it("displays the correct number of mastery points", () => {
        const masteryPoints = 17400;
        render(<Sidebar loading={false} data={progressData} />);
        const spinner = screen.getByTestId('sidebar-section-heading')
        expect(spinner).toBeTruthy();
    });
});
