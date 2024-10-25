import React from 'react'
import classnames from 'classnames';
import Link from 'next/link'
import styles from './styles/Song.module.scss'
import { songsData } from '@/data/musicData';
import MusicButtons from '../MusicButtons/MusicButtons';
import { hasLinks } from '@/utils/utils';

interface SongProps {
    handle: string
}

const Song = ({handle}: SongProps) => {
    const songData = songsData.find(datum => datum.handle == handle);

    if (!songData) {
        return null; // TODO: 404
    }

    return (
        <div className={styles.container}>
            <img src={songData.cover} alt={`${songData.title} cover art`} className={styles.albumCover} />
            <div className={styles.content}>
                <div>
                    <h1 className={styles.albumTitle}>{songData.title}</h1>
                    <h2 className={styles.artist}>{songData.artist}</h2>
                </div>
                {hasLinks(songData.stream) &&
                    <div className={styles.linksContainer}>
                        <h3 className={styles.headline}>Stream</h3>
                        <MusicButtons links={songData.stream} />
                    </div>
                }
                {hasLinks(songData.buy) &&
                    <div className={styles.linksContainer}>
                        <h3 className={styles.headline}>Buy</h3>
                        <MusicButtons links={songData.buy} />
                    </div>
                }
                {songData.handle == 'getFreaky' &&
                    <div>
                        <div className={styles.tempLinks}>
                            <a target="_blank" href="https://www.youtube.com/watch?v=JWLM_XJQdsM">Youtube</a>
                            <a target="_blank" href="https://www.facebook.com/reel/577702098155426">Facebook</a>
                            <a target="_blank" href="https://www.instagram.com/p/DBXbpULS28a/">Instagram</a>
                        </div>
                         <div className={styles.tempLinks}>
                            <a target="_blank" href="https://www.instagram.com/earlynightrecords/">Early Night Records</a>
                        </div>
                    </div>
                }
                {songData.handle == 'impossibleWaves' &&
                    <div>
                        <div className={styles.tempLinks}>
                            <a target="_blank" href="https://www.youtube.com/watch?v=xwAL5NMzI-Q">Youtube</a>
                            <a target="_blank" href="https://www.facebook.com/reel/27273284052320043">Facebook</a>
                            <a target="_blank" href="https://www.instagram.com/p/DBj5Cu_y4r0/">Instagram</a>
                        </div>
                         <div className={styles.tempLinks}>
                            <a target="_blank" href="https://www.instagram.com/earlynightrecords/">Early Night Records</a>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Song;
