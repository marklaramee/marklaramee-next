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
            <div className={styles.musicInner}>
                <div className={styles.musicList}>
                    <h1 className={classnames(styles.headline, styles.musicTitle)}>EDM and Electronica</h1>
                    <div className={styles.musicContainer}>
                        <TrackList songs={songsData}></TrackList>
                    </div>
                </div>

                <div className={styles.musicList}>
                    <h1 className={classnames(styles.headline, styles.musicTitle)}>Rock</h1>
                    <div className={styles.musicContainer}>
                        <div className={styles.musicGroup}>
                            <a 
                                href='/music/band/helivator' 
                                key={'helivator'} 
                                className={styles.songLink}
                                target='_blank'
                            >Helivator</a>
                            <a 
                                href='/music/band/ct9' 
                                key={'ct9'} 
                                className={styles.songLink}
                                target='_blank'
                            >Cutthroats 9</a>
                        </div>
                    </div>
                </div>

                <div className={styles.musicList}>
                    <h1 className={classnames(styles.headline, styles.musicTitle)}>Industrial</h1>
                    <div className={styles.musicContainer}>
                        <div className={styles.musicGroup}>
                            <a 
                                href='https://missingfoundation.bandcamp.com/album/go-into-exile-2' 
                                key={'mf'} 
                                className={styles.songLink}
                                target='_blank'
                            >
                                Missing Foundation
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classnames(styles.musicList, styles.socialBar)}>
                    <MusicButtons links={mySocials}>
                    </MusicButtons>
                </div>
            </div>
        </div>
    );
}

export default Music;
