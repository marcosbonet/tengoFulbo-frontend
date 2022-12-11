import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Home } from './home';

describe('Given the fav page component', () => {
    describe('When we render it', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Home />
                </Router>
            );
        });
        test('Then it should appear the "home page" header', () => {
            expect(
                screen.getByRole('heading', { name: /Tengo fulbo/i })
            ).toBeInTheDocument();
        });
    });
});
