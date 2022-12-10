import { DeletePlayer } from '../../infrastructure/components/buton.delete.tsx/button.delete';
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
            <div>
                <DeletePlayer />
            </div>
        </>
    );
};
