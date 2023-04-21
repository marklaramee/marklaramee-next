import React from 'react';
import classnames from 'classnames';
import MusicGroup from '@/components/MusicGroup/MusicGroup';
import styles from './styles/Music.module.css'



const Music = () => {
    return (
        <div className={styles.musicOuter}>
            <h1 className={classnames(styles.headline, styles.musicTitle)}>Music</h1>
            <div className={styles.musicContainer}>
                <MusicGroup />
            </div>
        </div>
    );
}

export default Music;
