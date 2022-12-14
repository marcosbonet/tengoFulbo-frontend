import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../mock/mockstore';
import userEvent from '@testing-library/user-event';

import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { LoginPage } from './login.page';

jest.mock('../../infrastructure/hooks/usePlayer');
describe('Given the Login page component', () => {
    describe('When we render it', () => {
        let Login: Array<{ role: string; name: string }>;
        beforeEach(() => {
            Login = [
                {
                    role: 'textbox',
                    name: '',
                },
            ];
            (usePlayer as jest.Mock).mockReturnValue({
                handleLogin: jest.fn(),
            });
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
        test('Should save the inputs names', () => {
            const input = screen.getByRole(Login[0].role, {
                name: Login[0].name,
            });
            userEvent.type(input, 'test');
            expect(input).toHaveValue('test');
        });
        test('Then it should render the logIn form..', () => {
            const element = screen.getByRole('button');
            userEvent.click(element);
            expect(usePlayer().handleLogin).toHaveBeenCalled();
        });
    });
});
