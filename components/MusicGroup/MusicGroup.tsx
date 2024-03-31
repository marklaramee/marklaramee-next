import React from 'react'
// import SoundcloudPlayer from '@/components/SoundcloudPlayer/SoundcloudPlayer'; // don't delete yet 20240331
import MusicItem from '@/components/MusicItem/MusicItem';
import styles from './styles/MusicGroup.module.scss'
import { songsData } from '@/data/musicData';



const MusicGroup = () => {
    return (
        <>
            {songsData.map((song) => (
                <div className={styles.musicGroup} key={song.cover}>
                    <MusicItem song={song}/>
                </div>
            ))}
        </>
    );
};

export default MusicGroup;
