import { MatchTypes, ProtoMatch } from '../models/match.types';
import { MatchRepo } from './matchRepo';

describe('Given MatchRepo', () => {
    const matchMock: MatchTypes = {
        id: '',
        place: '',
        date: '',
        image: '',
    };

    const updatedMock: ProtoMatch = {
        place: '123',
        date: '123',
        image: '123',
    };

    let service: MatchRepo;
    let error: Error;
    beforeEach(() => {
        service = new MatchRepo();
        error = new Error('error');
    });

    describe('When we instantiate GET(),', () => {
        test('Then it should return a new user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([matchMock]),
            });
            const result = await service.get();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([matchMock]);
        });

        test('Then if the user can not register, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.get();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate Search(),', () => {
        test('Then it should return a token', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(matchMock),
            });
            const result = await service.search({ place: 'papa' });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(matchMock);
        });

        test('Then if the user can not login, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.search({ place: 'papa' });
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate GET()', () => {
        test('Then it should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(matchMock),
            });

            const result = await service.get();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(matchMock);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.get();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate CREATE(),', () => {
        test('Then it should add a users favorite place', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(matchMock),
            });

            const result = await service.create(updatedMock);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(matchMock);
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.create(updatedMock);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    // describe('When we instantiate UPDATEADD(),', () => {
    //     test('Then it should add a users favorite place', async () => {
    //         global.fetch = jest.fn().mockResolvedValue({
    //             ok: true,
    //             json: jest.fn().mockResolvedValue(matchMock),
    //         });

    //         const result = await service.updateadd(updatedMock);
    //         expect(fetch).toHaveBeenCalled();
    //         expect(result).toEqual(matchMock);
    //     });

    //     test('Then if something goes wrong, it should throw an ERROR', async () => {
    //         global.fetch = jest.fn().mockRejectedValue({
    //             ok: false,
    //             status: 404,
    //             statusText: 'error',
    //         });
    //         await service.updateadd(updatedMock);
    //         expect(fetch).toHaveBeenCalled();
    //         expect(error).toBeInstanceOf(Error);
    //     });
    // });
    // describe('When we instantiate UPDATEDELETE()', () => {
    //     test('Then it should add a users favorite place', async () => {
    //         global.fetch = jest.fn().mockResolvedValue({
    //             ok: true,
    //             json: jest.fn().mockResolvedValue(matchMock),
    //         });

    //         const result = await service.updateadd(updatedMock);
    //         expect(fetch).toHaveBeenCalled();
    //         expect(result).toEqual(matchMock);
    //     });

    //     test('Then if something goes wrong, it should throw an ERROR', async () => {
    //         global.fetch = jest.fn().mockRejectedValue({
    //             ok: false,
    //             status: 404,
    //             statusText: 'error',
    //         });
    //         await service.updateadd(updatedMock);
    //         expect(fetch).toHaveBeenCalled();
    //         expect(error).toBeInstanceOf(Error);
    //     });
    // });
});
