import React from 'react'
import Link from 'next/link'
import styles from './styles/Song.module.scss'
import { songsData } from '@/data/musicData';
import MusicButtons from '../MusicButtons/MusicButtons';

interface SongProps {
    handle: string
}

const Song = ({handle}: SongProps) => {
    const songData = songsData.find(datum => datum.handle == handle);

    if (!songData) {
        return null; // TODO: 404
    }

    return (
        <div className={styles.container}>
            <img src={songData.cover} alt={`${songData.title} cover art`}/>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.albumTitle}>{songData.title}</h1>
                    <h2 className={styles.artist}>{songData.artist}</h2>
                </div>
                <div className={styles.linksContainer}>
                    <h3 className={styles.headline}>Stream</h3>
                    <MusicButtons links={songData.stream} />
                </div>
                <div className={styles.linksContainer}>
                    <h3 className={styles.headline}>Buy</h3>
                    <MusicButtons links={songData.buy} />
                </div>
            </div>
        </div>
    );
};

export default Song;
