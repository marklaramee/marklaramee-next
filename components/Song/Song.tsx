import React from 'react'
import Link from 'next/link'
import styles from './styles/Song.module.scss'
import { songsData } from '@/data/musicData';

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
                <h1 className={styles.albumTitle}>{songData.title}</h1>
            </div>
        </div>
    );
};

export default Song;
