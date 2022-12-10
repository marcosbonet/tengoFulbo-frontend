import { MatchType } from '../models/match.types';
import { PlayerTypes } from '../models/player.types';

import { PlayerRepo } from './playerRepo';

const mockPlayer: PlayerTypes = {
    playerName: 'pepito',
    password: 'altacontra',
    email: 'dondepepito@live.com',
    id: '5432',
    matches: [],
};
const matchMock: MatchType = {
    id: '',
    place: '',
    date: '',
    image: '',
    players: [],
};

const updatedMock: MatchType = {
    id: 'test',
    place: '123',
    date: '123',
    image: '123',
    players: [],
};
describe('given de PlayerRepo', () => {
    let service: PlayerRepo;

    const error = new Error('Error');
    beforeEach(() => {
        service = new PlayerRepo();
    });
    describe('When we intantiate Register', () => {
        test('then it should return a new player', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlayer),
            });
            const result = await service.register(mockPlayer);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockPlayer);
        });
    });
    test('Then id the user can not register, it should throw a ERROR', async () => {
        global.fetch = jest
            .fn()
            .mockResolvedValue({ ok: false, status: 404, statusText: 'Error' });
        await service.register({});
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
    });
    describe('When we intantiate login', () => {
        test('then it should return a player loged', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlayer),
            });
            const result = await service.login(mockPlayer);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockPlayer);
        });
    });
    test('Then id the user can not login, it should throw a ERROR', async () => {
        global.fetch = jest
            .fn()
            .mockResolvedValue({ ok: false, status: 404, statusText: 'Error' });
        await service.login({});
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
    });
    describe('When we intantiate delete', () => {
        test('then it should return a player loged', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockPlayer),
            });
            const result = await service.delete(mockPlayer.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockPlayer);
        });
    });
    test('Then id the user press delete botton, it should throw a ERROR', async () => {
        global.fetch = jest
            .fn()
            .mockResolvedValue({ ok: false, status: 404, statusText: 'Error' });
        await service.delete(mockPlayer.id);
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
    });
    describe('When we instantiate UPDATEDELETE()', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(matchMock),
            });

            const result = await service.updatedelete(updatedMock.toString());
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(matchMock);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.updatedelete(updatedMock.toString());
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When we instantiate UPDATEADD(),', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(matchMock),
            });

            const result = await service.updateadd(updatedMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(matchMock);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.updateadd(updatedMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
});
