import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../../mock/mockstore';
import { usePlayer } from '../../hooks/usePlayer';
import { DeletePlayer } from './button.delete';
jest.mock('../../hooks/usePlayer');

describe('Given login form...', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (usePlayer as jest.Mock).mockReturnValue({
                player: { player: { playerName: '' } },
            });
            render(
                <>
                    <Provider store={mockStore}>
                        <Router>
                            <DeletePlayer></DeletePlayer>
                        </Router>
                    </Provider>
                </>
            );
        });
        test('Then it should render the logIn form', () => {
            const logout = screen.getByText('Logout');
            userEvent.click(logout);
            expect(logout).toBeInTheDocument();
        });
        test('Then should delete the component', () => {
            const dele = screen.getByText(/Delete/i);
            userEvent.click(dele);
            expect(dele).toBeInTheDocument();
        });
    });
});
