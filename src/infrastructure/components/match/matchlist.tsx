import { useMatch } from '../../hooks/useMatch';
import { ItemMatch } from './match';

export const MatchList = () => {
    const { matches } = useMatch();
    return (
        <>
            <ul>
                {matches.map((match) => (
                    <ItemMatch item={match}></ItemMatch>
                ))}
            </ul>
        </>
    );
};
