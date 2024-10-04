import React from 'react'
import Link from 'next/link'
import styles from './styles/TrackList.module.scss'
import { songsData } from '@/data/musicData';
import { MusicData } from '@/model/music';

interface TrackListProps {
    songs: MusicData[];
}


const TrackList = ({songs}: TrackListProps) => {
    return (
        <>
            {songsData.map((song) => (
                <div className={styles.musicGroup} key={song.cover}>
                    <Link href="#" key={song.title}>{song.title}</Link>
                </div>
            ))}
        </>
    );
};

export default TrackList;
