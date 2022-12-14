import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../infrastructure/store/store';
import { mockStore } from '../../mock/mockstore';
import { MyMatchList } from './my.matchlist';

describe('Given the my matchlist component', () => {
    describe('When we render it', () => {
        render(
            <>
                <Router>
                    <Provider store={mockStore}>
                        <MyMatchList />
                    </Provider>
                </Router>
            </>
        );

        test('Then it should appear the "My matches" header', async () => {
            const element = screen.getByText(/river/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should appear the "My matches empty" header', async () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <MyMatchList />
                        </Provider>
                    </Router>
                </>
            );

            const element = screen.getByText(/loading/i);
            expect(element).toBeInTheDocument();
        });
    });
});
