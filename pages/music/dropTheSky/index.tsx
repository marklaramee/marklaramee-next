import React from 'react';
import classnames from 'classnames';
import MusicGroup from '@/components/MusicGroup/MusicGroup';
import styles from './styles/dts.module.css';
import MusicItem from '@/components/MusicItem/MusicItem';
import { songsData } from '@/data/musicData';

const Music = () => {
    return (
        <div className={styles.musicOuter}>
            <div className={styles.musicInner}>
                <h1 className={classnames(styles.headline, styles.musicTitle)}>Newest Release</h1>
                <div className={styles.musicContainer}>
                    <MusicItem song={songsData[0]} key={songsData[0].cover}/>
                    <MusicGroup></MusicGroup>
                </div>
            </div>
        </div>
    );
}

export default Music;
