import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { RegisterPage } from './register.page';

describe('Given the fav page component', () => {
    describe('When we render it', () => {
        beforeEach(() => {
            render(
                <Router>
                    <RegisterPage />
                </Router>
            );
        });
        test('Then it should appear the "Register" header', () => {
            expect(
                screen.getByRole('heading', { name: /Register/i })
            ).toBeInTheDocument();
        });
    });
});
