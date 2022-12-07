import { PlayerTypes } from '../models/player.types';

const URL = 'http://localhost:7700/';

export class PlayerRepo {
    #createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
    register(data: { [key: string]: string }): Promise<PlayerTypes> {
        const url = URL + 'players/register';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    login(data: { [key: string]: string }): Promise<string> {
        const url = URL + 'players/login';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((resjson) => resjson.token);
    }
    delete(id: number): Promise<void> {
        const url = URL + `players/${id}`;

        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (response.ok) throw this.#createError(response);
        });
    }
}
