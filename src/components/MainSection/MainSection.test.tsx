import React from 'react';
import { render } from "@testing-library/react";
import MainSection from './MainSection';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

describe("MainSection component", () => {
    const initialState = {
        Subject: {
            chapters: [
                {
                    annotation: "Chapter1",
                    name: "Set",
                    points_to_earn: 1000,
                    id: "klmansfkj",
                    topics: [
                        {
                            annotation: "",
                            name: "Introduction to Set",
                            points_to_earn: 100,
                            id: "xyz"
                        },
                        {
                            annotation: "",
                            name: "Application of Set",
                            points_to_earn: 150,
                            id: "abc"
                        },
                        {
                            annotation: "",
                            name: "basic of Set",
                            points_to_earn: 100,
                            id: "pqr"
                        },
                        {
                            annotation: "",
                            name: "theory of Set",
                            points_to_earn: 150,
                            id: "lmn"
                        }
                    ]
                }
            ]
        }, // initial state for testing
    };
    const mockStore = configureMockStore()(initialState);

    it("renders cart container when loading is false", () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={mockStore}>
                <MainSection loading={false} />
            </Provider>
        );

        expect(getAllByTestId("cart-container")).toHaveLength(1);
    });

    it("renders loader container when loading is true", () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <MainSection loading={true} />
            </Provider>
        );

        expect(getByTestId("loader-container")).toBeTruthy();
    });
});
