import React from 'react';
import { render, screen } from '@testing-library/react';
import MainSection, { cartProps } from './MainSection';

describe('MainSection', () => {
    const mockProps: cartProps = {
        loading: false,
        data: {
            class: 'Class 10',
            subject: 'Mathematics',
            chapters: [
                {
                    annotation: '',
                    name: 'Chapter 1',
                    points_to_earn: 100,
                    id: 'ch1',
                    topics: [
                        {
                            annotation: '',
                            name: 'Topic 1',
                            points_to_earn: 50,
                            id: 't1',
                        },
                    ],
                },
            ],
        },
    };

    it('renders a spinner when loading', () => {
        const props: cartProps = {
            ...mockProps,
            loading: true,
        };
        render(<MainSection {...props} />);
        const spinner = screen.getByTestId('loader-container');
        expect(spinner).toBeTruthy();
    });

    it('renders Cart components when not loading', () => {
        render(<MainSection {...mockProps} />);
        const carts = screen.getAllByTestId('cart-container');
        expect(carts).toHaveLength(mockProps.data.chapters.length);
    });
});
