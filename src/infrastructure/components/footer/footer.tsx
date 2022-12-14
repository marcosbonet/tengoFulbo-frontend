import styles from './footer.module.css';
export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <p className={styles.bymarcos}> By Marcos Bonet</p>
                <h2 className={styles.Tengofulbo}>Tengo fulbo</h2>
                <p className={styles.contactby}>Contact us by</p>
                <img
                    src={'./assets/logolinkedin.png'}
                    alt="logo instagram"
                    width="30px"
                />
            </div>

            <address className={styles.copyright}>
                {' '}
                Copyright © Tengo Fulbo 2022 All rights reserve
            </address>
        </footer>
    );
}
