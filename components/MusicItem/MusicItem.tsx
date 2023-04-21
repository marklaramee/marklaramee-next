import React from 'react';
import Image from 'next/image'
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import styles from './styles/MusicItem.module.scss'

const MusicPlayer = () => {
    return (
        <div className={styles.playerOuter}>
            <Image 
            src='/music/Steppin-Back-Cover.png'
            width='300' 
            height='300' 
            alt='steppin back cover art' 
            className={styles.albumCover}
            />
            <div>
                <h3 className={styles.albumTitle}>Steppin Back</h3>
                <h3 className={styles.artist}>Mark Laramee feat. Susy Borlido</h3>
                {/* <button className={classnames(styles.reset, styles.playButton)} /> */}
                <AudioPlayer url="/music/Mark%20Laramee%20-%20Steppin%20Back.mp3" />
            </div>
        </div>
    );
}
export default MusicPlayer;