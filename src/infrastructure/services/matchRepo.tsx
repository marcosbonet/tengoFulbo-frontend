import { MatchType, ProtoMatch } from '../models/match.types';

const URL = 'http://localhost:7700/';

export class MatchRepo {
    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
    search(data: { [key: string]: string }): Promise<MatchType> {
        const url = URL + 'matches/:key/:value';
        return fetch(url, {
            method: 'SEARCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    get(): Promise<Array<MatchType>> {
        const url = URL + 'matches/';
        return fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((response) => response.matches)
            .catch((error) => {
                return `${error}`;
            });
    }
    create(item: Partial<ProtoMatch>): Promise<MatchType> {
        const url = URL + 'matches/';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
}
