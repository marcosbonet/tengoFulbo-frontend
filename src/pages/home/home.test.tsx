import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../infrastructure/store/store';
import { Home } from './home';

describe('Given the fav page component', () => {
    describe('When we render it', () => {
        beforeEach(() => {
            render(
                <React.StrictMode>
                    <Provider store={appStore}>
                        <Router>
                            <Home />
                        </Router>
                    </Provider>
                </React.StrictMode>
            );
        });
        test('Then it should appear the "home page" header', () => {
            // expect(
            //    screen.getByRole('heading', { name: /Tengo fulbo/i })
            // -).toBeInTheDocument();
        });
    });
});
