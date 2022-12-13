import { MatchType } from '../models/match.types';
import {
    PlayerTypes,
    PlayerWithToken,
    ProtoPlayer,
} from '../models/player.types';

const URL = 'http://localhost:7700/';

export class PlayerRepo {
    register(player: ProtoPlayer): Promise<PlayerTypes> {
        const url = URL + 'players/register';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    login(player: ProtoPlayer): Promise<string> {
        const url = URL + 'players/login';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                localStorage.setItem('token', res.token);
                return res.token;
            })
            .catch((error) => {
                return error;
            });
    }
    delete(): Promise<void> {
        const url = URL + 'players/delete';

        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }

    updateadd(id: string): Promise<MatchType> {
        console.log('3');
        const url = URL + `players/update/${id}`;
        const token = localStorage.getItem('token');
        console.log(token, 'mostrar token');

        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    getOne(): Promise<PlayerTypes> {
        console.log('3');
        const url = URL + `players/getOne`;
        const token = localStorage.getItem('token');
        console.log(token, 'mostrar token');

        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }

    updatedelete(id: string): Promise<void> {
        const url = URL + `players/delete/${id}`;

        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.removeItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
}
