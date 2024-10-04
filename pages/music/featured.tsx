import React from 'react';
import classnames from 'classnames';
import MusicGroup from '@/components/MusicGroup/MusicGroup';
import styles from './styles/Music.module.css';

const Featured = () => {
    return (
        <div className={styles.musicOuter}>
            <h1 className={classnames(styles.headline, styles.musicTitle)}>Music</h1>
            <div className={styles.musicContainer}>
                Featured 2
            </div>
        </div>
    );
}

export default Featured;
