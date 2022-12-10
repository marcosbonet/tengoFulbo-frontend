import { MatchType } from '../models/match.types';
import {
    PlayerTypes,
    PlayerWithToken,
    ProtoPlayer,
} from '../models/player.types';

const URL = 'http://localhost:7700/';

export class PlayerRepo {
    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
    register(player: ProtoPlayer): Promise<PlayerTypes> {
        const url = URL + 'players/register';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    login(player: ProtoPlayer): Promise<PlayerWithToken> {
        const url = URL + 'players/login';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())

            .catch((error) => {
                return `${error}`;
            });
    }
    delete(id: string): Promise<{ id: string }> {
        const url = URL + `players/${id}`;

        return fetch(url, {
            method: 'DELETE',
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
    updateadd(id: string): Promise<MatchType> {
        const url = URL + `matches/update/${id}`;

        return fetch(url, {
            method: 'PATCH',
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

    updatedelete(id: string): Promise<void> {
        const url = URL + `matches/delete/${id}`;

        return fetch(url, {
            method: 'PATCH',
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
