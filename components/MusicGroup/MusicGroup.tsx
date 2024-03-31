import React from 'react'
// import SoundcloudPlayer from '@/components/SoundcloudPlayer/SoundcloudPlayer'; // don't delete yet 20240331
import MusicItem from '@/components/MusicItem/MusicItem';
import styles from './styles/MusicGroup.module.scss'
import { songsData } from '@/data/musicData';



const MusicGroup = () => {
    return (
        <>
            <div className={styles.musicGroup}>
                <MusicItem song={songsData[0]} key={songsData[0].cover}/>
            </div>
            <div className={styles.musicGroup}>
                <MusicItem song={songsData[1]} key={songsData[1].cover} />
            </div>
        </>
    );
};

export default MusicGroup;
