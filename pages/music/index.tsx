import React from 'react';
import classnames from 'classnames';
import styles from './styles/Music.module.css';
import TrackList from '@/components/TrackList/TrackList';
import { songsData } from '@/data/musicData';
import { mySocials } from '@/data/socialsData';
import MusicButtons from '@/components/MusicButtons/MusicButtons';

const Music = () => {
    return (
        <div className={styles.musicOuter}>
            <div className={styles.musicList}>
                <h1 className={classnames(styles.headline, styles.musicTitle)}>EDM and Electronica</h1>
                <div className={styles.musicContainer}>
                    <TrackList songs={songsData}></TrackList>
                </div>
            </div>

            <div className={styles.musicList}>
                <MusicButtons links={mySocials}>
                </MusicButtons>
            </div>

            <div className={styles.musicList}>
                <h1 className={classnames(styles.headline, styles.musicTitle)}>Rock</h1>
                <div className={styles.musicContainer}>
                    <div className={styles.musicGroup}>
                        <a 
                            href='https://open.spotify.com/artist/7jl58koqWoQwoOLNI7yY24?si=syjXp7iXSj-NPR4f02Vk9g' 
                            key={'helivator'} 
                            className={styles.songLink}
                            target='_blank'
                        >Helivator</a>
                        <a 
                            href='https://open.spotify.com/artist/2Jx8LfapKixC8qS5Rh8ikI?si=DgPjOxNnQ-6l3mtYMp0j4Q' 
                            key={'ct9'} 
                            className={styles.songLink}
                            target='_blank'
                        >Cutthroats 9</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Music;
