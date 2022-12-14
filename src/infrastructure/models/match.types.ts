import { PlayerTypes } from './player.types';

export type MatchType = {
    id: string;
    places: string;
    date: string;
    image: string;
    players?: Array<PlayerTypes>;
};
export type ProtoMatch = {
    id?: string;
    places?: string;
    date?: string;
    image?: string;
    players?: Array<PlayerTypes>;
};
