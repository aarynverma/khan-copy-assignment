import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

describe("Sidebar component", () => {
    const initialState = {
        ProgressBarData: {
            progress: [{ id: 'a', progress: 30 }],
        },
        Subject: {},
    };
    const mockStore = configureMockStore()(initialState);

    it("renders with correct data when loading is false", () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={mockStore}>
                <Sidebar loading={false} />
            </Provider>
        );

        expect(getByTestId("sidebar-section-heading")).toBeTruthy();
        expect(getAllByTestId("li-content-bar").length).toBeGreaterThan(0);
    });

    it("renders loader container when loading is true", () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Sidebar loading={true} />
            </Provider>
        );

        expect(getByTestId("loader-container")).toBeTruthy();
    });
});
