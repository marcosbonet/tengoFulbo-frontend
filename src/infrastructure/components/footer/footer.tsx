import styles from './footer.module.css';
export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <h2 className={styles.Tengofulbo}>Tengo fulbo</h2>
                <p className={styles.contactby}>Contact us by</p>
                <img
                    src={'./assets/logolinkedin.png'}
                    alt="logo instagram"
                    width="30px"
                />
            </div>

            <p className={styles.bymarcos}> By Marcos Bonet</p>

            <address> Copyright © Nirvana 2022 All rights reserve</address>
        </footer>
    );
}
