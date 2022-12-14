import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useMatch } from '../../infrastructure/hooks/useMatch';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import { CreateMatch } from './create.match';
import { mockStore, preloadedState } from '../../mock/mockstore';
import { PlayerReducer } from '../../infrastructure/reducer/reducerPlayer';
import { MatchReducer } from '../../infrastructure/reducer/reducerMatch';
jest.mock('../../infrastructure/hooks/useMatch');
describe('Given Createdmatch component, and ew render it', () => {
    let formElm: Array<{ role: string; name: string }>;

    beforeEach(() => {
        const mockAppStore = configureStore({
            reducer: {
                player: PlayerReducer,
                match: MatchReducer,
            },
            preloadedState: preloadedState,
        });
        formElm = [
            { role: 'textbox', name: '' },
            { role: 'textbox', name: '' },
            { role: 'textbox', name: '' },
        ];

        (useMatch as jest.Mock).mockReturnValue({
            handleCreateMatch: jest.fn(),
        });

        render(
            <>
                <Provider store={mockAppStore}>
                    <Router>
                        <CreateMatch></CreateMatch>
                    </Router>
                </Provider>
            </>
        );
    });

    test('the handleinput must be called..', () => {
        const input = screen.getAllByRole(formElm[0].role, {
            name: formElm[0].name,
        });
        userEvent.type(input[0], 'depaul');
        expect(input[0]).toHaveValue('depaul');
    });
    test('the handleSubmit must be called..', () => {
        const submit = screen.getByRole('button');
        userEvent.click(submit);
        const result = useMatch().handleCreateMatch;
        expect(result).toHaveBeenCalled();
    });
});
