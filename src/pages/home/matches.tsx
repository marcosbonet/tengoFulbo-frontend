import { useMatch } from '../../infrastructure/hooks/useMatch';

export const Match = () => {
    const { matches } = useMatch();
    console.log(matches, '1');

    return matches.length ? (
        <>
            <p>{matches[0].place}</p>

            <p>{matches[1].place}</p>

            <p>{matches[2].place}</p>
        </>
    ) : (
        <p>probando</p>
    );
};
