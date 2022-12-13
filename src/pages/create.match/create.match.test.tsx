import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import userEvent from '@testing-library/user-event';

import { CreateMatch } from './create.match';
import { mockStore } from '../../mock/mockstore';

describe('Given Createdmatch component', () => {
    describe('When we render the component', () => {
        test('Then it should display the created match list', () => {
            render(
                <>
                    <Provider store={mockStore}>
                        <Router>
                            <CreateMatch></CreateMatch>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getAllByText(/Create Match/i);
            expect(element).toBeInTheDocument();
        });

        test('Then if the user clicks on the create button, it should delete place', async () => {
            render(
                <>
                    <Provider store={mockStore}>
                        <Router>
                            <CreateMatch></CreateMatch>
                        </Router>
                    </Provider>
                </>
            );
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/Create Match/i));
        });
    });
});
