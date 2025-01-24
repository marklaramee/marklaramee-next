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
                <Link 
                    href={`/music/songs/${song.handle}`} 
                    className={styles.songLink}
                >{song.title}</Link>
            ))}
        </>
    );
};

export default TrackList;
