import React from 'react'
import Link from 'next/link'
import styles from './styles/Song.module.scss'

interface SongProps {
    handle: string
}

const Song = ({handle}: SongProps) => {
    return (
        <div>{handle}</div>
    );
};

export default Song;
