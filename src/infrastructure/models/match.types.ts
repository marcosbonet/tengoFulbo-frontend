import { PlayerTypes } from './player.types';

export type MatchTypes = {
    id: string;
    place: string;
    date: string;
    image: string;
    players: Array<PlayerTypes>;
};
export type ProtoMatch = {
    place?: string;
    date?: string;
    image?: string;
    players?: Array<PlayerTypes>;
};
