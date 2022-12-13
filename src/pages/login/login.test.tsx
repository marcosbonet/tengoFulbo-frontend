import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../mock/mockstore';
import userEvent from '@testing-library/user-event';
import { LoginPage } from './login.page';

describe('Given the Login page component', () => {
    describe('When we render it', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <LoginPage />
                    </Provider>
                </Router>
            );
        });
        test('Then it should appear the "login pages" header', () => {
            expect(
                screen.getByRole('heading', { name: /Login/i })
            ).toBeInTheDocument();
        });
        test('Then it should display form of login', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <LoginPage />
                    </Provider>
                </Router>
            );
            // const element = await screen.findByPlaceholderText(/Name/i);
            //expect(element).toBeInTheDocument();
            fireEvent.input(await screen.findByPlaceholderText('Login'));
        });
        test('Then it should display of welcome', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <LoginPage />
                    </Provider>
                </Router>
            );
            //  const element = await screen.findByText(/password/i);
            //  expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByRole('button'));
        });
    });
});
