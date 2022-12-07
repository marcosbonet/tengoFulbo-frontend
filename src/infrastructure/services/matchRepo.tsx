import { MatchTypes, ProtoMatch } from '../models/match.types';

const URL = 'http://localhost:7700/';

export class MatchRepo {
    #createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
    search(data: { [key: string]: string }): Promise<MatchTypes> {
        const url = URL + 'matches/:key/:value';
        return fetch(url, {
            method: 'SEARCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    get(): Promise<Array<string>> {
        const url = URL + 'matches/';
        return fetch(url).then((response) => {
            if (response.ok) return response.json();
            throw this.#createError(response);
        });
    }
    create(item: Partial<ProtoMatch>): Promise<ProtoMatch> {
        const url = URL + 'matches/';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => response.json());
    }

    updatedelete(id: number): Promise<void> {
        const url = URL + `matches/delete/${id}`;

        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (response.ok) throw this.#createError(response);
        });
    }
    updateadd(id: number): Promise<void> {
        const url = URL + `matches/update/${id}`;

        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (response.ok) throw this.#createError(response);
        });
    }
}
