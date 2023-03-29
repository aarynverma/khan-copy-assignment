import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './App';
import { fetchArticleDetails, fetchProgressDetails } from './Api/APIServices';
import { setSubject } from './Redux/SubjectDetail/SubjectDetail';
import { progressResults } from './Redux/ProgressBarDetails/ProgressBarDetails';

jest.mock('./Api/APIServices');

const mockStore = configureStore([thunk]);

describe('App component', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            Subject: [],
            ProgressBarData: {},
        });
    });

    it('renders without crashing', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(getByTestId('app')).toBeInTheDocument();
    });

    it('renders all necessary components', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(getByTestId('navbar')).toBeInTheDocument();
        expect(getByTestId('header')).toBeInTheDocument();
        expect(getByTestId('sidebar')).toBeInTheDocument();
        expect(getByTestId('main-section')).toBeInTheDocument();
    });

    it('calls fetchPatientSets when component mounts', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(fetchArticleDetails).toHaveBeenCalled();
        expect(fetchProgressDetails).toHaveBeenCalled();
    });

    it('sets loading state to true initially, and then turns false after 2000ms', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(getByTestId('loading-spinner')).toBeInTheDocument();

        await waitFor(() => {
            expect(getByTestId('loading-spinner')).not.toBeInTheDocument();
        });
    });

    it('dispatches setSubject and progressResults actions with correct values', async () => {
        const mockSubjectData = {
            class: "11",
            subject: "maths",
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
        };
        const mockProgressData = {

            progress:
            {
                id: "abc",
                progress: 100
            }

        };
        const setLoading = jest.fn();

        (fetchArticleDetails as jest.MockedFunction<typeof fetchArticleDetails>).mockResolvedValueOnce(mockSubjectData);
        (fetchProgressDetails as jest.MockedFunction<typeof fetchProgressDetails>).mockResolvedValueOnce(mockProgressData);

        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        await waitFor(() => {
            expect(store.getActions()).toEqual([setSubject(mockSubjectData)]);
            expect(setLoading).toHaveBeenCalledWith(true);
        });
    });
});
