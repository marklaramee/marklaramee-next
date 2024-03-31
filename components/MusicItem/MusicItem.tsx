import React from 'react';
import Image from 'next/image'
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import MusicButtons from '../MusicButtons/MusicButtons';
import styles from './styles/MusicItem.module.scss';
import { MusicData } from '@/model/music';

interface MusicProps {
    song: MusicData;
}

const MusicItem = ({song}: MusicProps) => {
    return (
        <div className={styles.playerOuter}>
            <Image 
            src={song.cover}
            width='300' 
            height='300' 
            alt={song.title}
            className={styles.albumCover}
            />
            <div className={styles.playerContent}>
                <div className={styles.titleContainer} >
                    <h3 className={styles.albumTitle}>{song.title}</h3>
                    <h3 className={styles.artist}>{song.artist}</h3>
                </div>
                <div className={styles.playerContainer} >
                    <AudioPlayer songData={song.song} />
                </div>
                <MusicButtons links={song.links} />
            </div>
        </div>
    );
}
export default MusicItem;
