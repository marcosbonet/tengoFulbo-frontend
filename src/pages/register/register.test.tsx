import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { PlayerRepo } from '../../infrastructure/services/playerRepo';

import { RegisterPage } from './register.page';
jest.mock('../../infrastructure/services/playerRepo');
describe('Given the Register component', () => {
    describe('When we render it', () => {
        let formElm: Array<{ role: string; name: string }>;
        beforeEach(() => {
            formElm = [
                { role: 'textbox', name: '' },
                { role: 'textbox', name: '' },
                { role: 'combobox', name: '' },
            ];
            render(
                <>
                    <Router>
                        <RegisterPage />
                    </Router>
                </>
            );
        });
        test('Then it should appear the "Register" header', () => {
            expect(
                screen.getByRole('heading', { name: /Register/i })
            ).toBeInTheDocument();
        });

        test('the handleinput must be called..', () => {
            const input = screen.getAllByRole(formElm[0].role, {
                name: formElm[0].name,
            });
            userEvent.type(input[0], 'messi');
            expect(input[0]).toHaveValue('messi');
        });
        test('the handleSubmit must be called..', () => {
            const submit = screen.getByRole('button');
            userEvent.click(submit);
            const result = PlayerRepo.prototype.register;
            expect(result).toHaveBeenCalled();
        });
    });
});
