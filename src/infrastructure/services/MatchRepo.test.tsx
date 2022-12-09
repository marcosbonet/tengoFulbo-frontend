import { MatchTypes, ProtoMatch } from '../models/match.types';
import { MatchRepo } from './matchRepo';
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
describe('Given MatchRepo', () => {
    let service: MatchRepo;
    const error = new Error('Error');
    beforeEach(() => {
        service = new MatchRepo();
    });

    describe('When we instantiate GET(),', () => {
        test('Then it should return a all the match', async () => {
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
                statusText: 'Error',
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
});
