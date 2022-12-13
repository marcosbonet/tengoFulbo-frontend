import { MatchType } from '../models/match.types';
import { actionMatchType } from './actionTypesMatch';
import { MatchReducer } from './reducerMatch';

describe('Given the function MatchReducer', () => {
    const matchMock = {
        id: '6389bb90ed3e6a5b94faa5a9',
        places: '',
        date: '',
        image: '',
    };

    let action: { type: string; payload: unknown };
    let state: Array<MatchType>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionMatchType.load,
                payload: [matchMock],
            };
            state = [];
        });
        test.skip('Then the returned state should be the action payload', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is Create', () => {
        beforeEach(() => {
            action = {
                type: actionMatchType.load,
                payload: [matchMock],
            };
            state = [];
        });
        test.skip('Then the returned state should include the action payload', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is UPDATE', () => {
        test.skip('if the id is valid, then the returned state should include the action payload', () => {
            action = {
                type: actionMatchType.updateAdd,
                payload: { ...matchMock, places: '' },
            };
            state = [matchMock];
            const result = MatchReducer(state, action);
            expect(result).toEqual([action.payload]);
        });

        test.skip('if the id is NOT valid, then the returned state should be the action payload', () => {
            action = {
                type: actionMatchType.updateAdd,
                payload: { ...matchMock, id: '9', places: 'Updated Place' },
            };
            state = [matchMock];
            const result = MatchReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is DELETE', () => {
        test.skip('if the id is valid, then the return state should include the action payload', () => {
            action = {
                type: actionMatchType.updateDelete,
                payload: matchMock,
            };
            state = [matchMock];
            const result = MatchReducer(state, action);
            expect(result).toStrictEqual([matchMock]);
        });

        test.skip('if the id is NOT valid, then the returned state should not include the action payload', () => {
            action = {
                type: actionMatchType.updateDelete,
                payload: { ...matchMock, id: '9' },
            };
            state = [matchMock];
            const result = MatchReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action type is any other', () => {
        test.skip('Then the returned state should not include the action payload', () => {
            action = {
                type: '',
                payload: null,
            };
            state = [matchMock];
            const result = MatchReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
