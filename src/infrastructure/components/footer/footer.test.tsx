import { render, screen } from '@testing-library/react';
import styles from './footer.module.css';
import { MemoryRouter as Router } from 'react-router-dom';
import React from 'react';

describe('When using the footer component', () => {
    describe('When we render the component', () => {
        test('Then should render the h1 "test"', () => {
            render(
                <>
                    <React.StrictMode>
                        <Router>
                            <footer className={styles.footer}>
                                <address>Contact by Linkedin</address>
                            </footer>
                        </Router>
                    </React.StrictMode>
                </>
            );
            // expect(
            //     screen.getByAltText('Contact by Linkedin')
            // ).toBeInTheDocument();
        });
    });
});
