import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MatchType } from '../../models/match.types';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';

import { ItemMatch } from './match';
import userEvent from '@testing-library/user-event';
import { mockStore } from '../../../mock/mockstore';
import React from 'react';

describe('Given matchList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Gifs List', async () => {
            const mockMatchList: MatchType = {
                places: 'test',
                id: ``,
                date: '',
                image: '',
            };

            render(
                <>
                    <React.StrictMode>
                        <Router>
                            <Provider store={mockStore}>
                                <ItemMatch item={mockMatchList} />
                            </Provider>
                        </Router>
                    </React.StrictMode>
                </>
            );
            const element = await screen.findByText(/test/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByText(/test/i));
        });
    });
});
