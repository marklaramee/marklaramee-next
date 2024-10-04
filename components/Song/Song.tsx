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
        <div className={styles.container}>{songData.title}</div>
    );
};

export default Song;
