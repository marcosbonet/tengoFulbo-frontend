import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { MyMatchesPage } from './my.match.page';

describe('Given the fav page component', () => {
    describe('When we render it', () => {
        beforeEach(() => {
            render(
                <Router>
                    <MyMatchesPage />
                </Router>
            );
        });
        test('Then it should appear the "My matches" header', () => {
            expect(
                screen.getByRole('heading', { name: /My matches/i })
            ).toBeInTheDocument();
        });
    });
});
