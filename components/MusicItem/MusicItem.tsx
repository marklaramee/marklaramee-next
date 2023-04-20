import React from 'react';
import Image from 'next/image'
import classnames from 'classnames';
import styles from './styles/MusicItem.module.scss'

const MusicPlayer = () => {
    return (
        <div className={styles.playerOuter}>
            <Image 
            src='/music/Steppin-Back-Cover.png'
            width='200' 
            height='200' 
            alt='steppin back cover art' 
            className={styles.albumCover}
            />
            <div>
                <h3 className={styles.albumTitle}>Steppin Back</h3>
                <button className={classnames(styles.reset, styles.playButton)} />
            </div>
        </div>
    );
}
export default MusicPlayer;