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

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionMatchTypes.load,
                payload: [matchMock],
            };
            state = [matchMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionMatchTypes.load,
                payload: [matchMock],
            };
            state = [matchMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionMatchTypes.load,
                payload: [matchMock],
            };
            state = [matchMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual([matchMock]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionMatchTypes.load,
                payload: [matchMock],
            };
            state = [matchMock];
        });
        test('Then the returned state should should be the original state', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: actionMatchTypes.load,
                payload: [matchMock],
            };
            state = [matchMock];
        });
        test('Then the returned state should be ...', () => {
            const result = MatchReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
