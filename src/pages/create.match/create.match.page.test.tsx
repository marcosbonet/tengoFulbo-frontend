import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';
import { CreateMatchPage } from './create.match.page';
import { mockStore } from '../../mock/mockstore';

describe('Given create match component', () => {
    describe('When we render the component cartPage', () => {
        test('Then it should display', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <CreateMatchPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Futbol/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByPlaceholderText(/Places/i));
        });
    });
});
