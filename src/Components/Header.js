import styles from './Header.module.css'

function Header () {

    return (
        <div className={styles.headerContainer}>
            <div className={styles.titleContainer}><h1 className={styles.titleText}>RomanConversor</h1></div>
        </div>
    );
};

export default Header;