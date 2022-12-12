import { useMatch } from '../../hooks/useMatch';
import { MatchType } from '../../models/match.types';
import { ItemMatch } from './match';

export const MatchList = () => {
    const { matches } = useMatch();

    return (
        <>
            <ul>
                {matches.map((match: MatchType) => (
                    <>
                        <ItemMatch key={match.id} item={match}></ItemMatch>
                    </>
                ))}
            </ul>
        </>
    );
};
