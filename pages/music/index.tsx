import React from 'react';
import styles from './styles/Music.module.css'
import MusicGroup from '@/components/MusicGroup/MusicGroup';

const Music = () => {
    return (
        <div className={styles.musicOuter}>
            <h1 className={styles.headline}>Music</h1>
            <div className={styles.musicContainer}>
                <MusicGroup />
            </div>
        </div>
    );
}

export default Music;