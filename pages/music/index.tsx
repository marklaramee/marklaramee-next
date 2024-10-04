import React from 'react';
import classnames from 'classnames';
import styles from './styles/Music.module.css';
import TrackList from '@/components/TrackList/TrackList';
import { songsData } from '@/data/musicData';

const Music = () => {
    return (
        <div className={styles.musicOuter}>
            <h1 className={classnames(styles.headline, styles.musicTitle)}>EDM and Electronica</h1>
            <div className={styles.musicContainer}>
                <TrackList songs={songsData}></TrackList>
            </div>
        </div>
    );
}

export default Music;
