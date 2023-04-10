import styles from './styles/Navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.navTop}>
            <a href="#">HOME</a>
            <a href="#">APPS</a>
            <a href="#">MUSIC</a>
            <a href="#">WORK</a>
        </div>
    );
};

export default Navigation;