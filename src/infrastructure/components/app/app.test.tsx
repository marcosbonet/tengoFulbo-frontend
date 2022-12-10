import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { App } from './app';

describe('Given App component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            render(
                <React.StrictMode>
                    <Provider store={appStore}>
                        <App />
                    </Provider>
                </React.StrictMode>
            );

            const element = screen.getByText('Login');
            expect(element).toBeInTheDocument();
        });
    });
});
