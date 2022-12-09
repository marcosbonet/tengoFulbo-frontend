import { MatchTypes } from '../models/match.types';
import { actionMatchTypes } from './actionTypesMatch';
import { MatchReducer } from './reducerMatch';

describe('Given the function MatchReducer', () => {
    const matchMock: MatchTypes = {
        id: '',
        place: '',
        date: '',
        image: '',
    };

    let action: { type: string; payload: unknown };
    let state: Array<MatchTypes>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionMatchTypes.load,
                payload: [matchMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is Create', () => {
        beforeEach(() => {
            action = {
                type: actionMatchTypes.load,
                payload: [matchMock],
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
});
