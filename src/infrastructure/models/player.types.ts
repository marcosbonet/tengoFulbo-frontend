import { MatchTypes } from './match.types';

export type PlayerTypes = {
    id: string;
    playerName: string;
    password: string;
    email: string;
    matches: Array<MatchTypes>;
};

export type PlayerWithToken = {
    player: PlayerTypes;
    token: string;
};

export type ProtoPlayer = {
    playerName?: string;
    password?: string;
    email?: string;
};
