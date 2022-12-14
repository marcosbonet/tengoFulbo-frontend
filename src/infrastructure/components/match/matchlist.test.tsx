import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom';

import { Provider } from 'react-redux';

import { MatchList } from './matchlist';
import { mockStore } from '../../../mock/mockstore';
import React from 'react';

describe('Given GifList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Gifs List', async () => {
            render(
                <>
                    <React.StrictMode>
                        <Router>
                            <Provider store={mockStore}>
                                <MatchList />
                            </Provider>
                        </Router>
                    </React.StrictMode>
                </>
            );
            const element = await screen.findByText(/river/i);
            expect(element).toBeInTheDocument();
        });
    });
});
