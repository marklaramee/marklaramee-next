import React from 'react'
import Link from 'next/link'
import styles from './styles/TrackList.module.scss'
import { songsData } from '@/data/musicData';
import { MusicData } from '@/model/music';

interface SongProps {
    handle: string
}

const TrackList = ({handle}: SongProps) => {
    return (
        <div>{handle}</div>
    );
};

export default TrackList;