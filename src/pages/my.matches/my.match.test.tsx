import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { mockMatch, mockStore } from '../../mock/mockstore';
import { MyMatches } from './my.match';

import { MyMatchesPage } from './my.match.page';

describe('Given the my match page component', () => {
    describe('When we render it', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <MyMatches match={mockMatch} />
                    </Provider>
                </Router>
            );
        });
        test('Then it should appear the "My matches" header', async () => {
            const element = screen.getByText(/river/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByPlaceholderText(/basura/i));
        });
    });
});
