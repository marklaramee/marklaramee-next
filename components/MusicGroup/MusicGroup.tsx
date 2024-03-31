import React from 'react'
// import SoundcloudPlayer from '@/components/SoundcloudPlayer/SoundcloudPlayer';
import MusicItem from '@/components/MusicItem/MusicItem';
import styles from './styles/MusicGroup.module.scss'
import { songsData } from '@/data/musicData';



const MusicGroup = () => {
    return (
        <>
        {/* <h2 className={styles.headline}>The Latest</h2> */}
        <MusicItem song={songsData[0]} />
        </>
    );
};

export default MusicGroup;
