import style from './login.module.css';
export function ErrorComponent({ error }: { error: string }) {
    return (
        <>
            <div className={style.login__error}>{error}</div>
        </>
    );
}
