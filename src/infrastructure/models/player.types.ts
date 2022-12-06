import { MatchTypes } from './match.types';

export type PlayerTypes = {
    id: string;
    playerName: string;
    password: string;
    email: string;
    matches: Array<MatchTypes>;
};
export type ProtoPlayer = {
    playerName?: string;
    password?: string;
    email?: string;
};
