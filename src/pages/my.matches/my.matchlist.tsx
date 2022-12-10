import { useMatch } from '../../infrastructure/hooks/useMatch';
import { MyMatches } from './my.match';

export const MyMatchList = () => {
    const { matches } = useMatch();
    return (
        <>
            <ul>
                {matches.map((match) => (
                    <MyMatches match={match}></MyMatches>
                ))}
            </ul>
        </>
    );
};
