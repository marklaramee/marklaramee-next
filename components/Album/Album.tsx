import React from 'react'
import styles from './styles/Album.module.scss'
import MusicButtons from '../MusicButtons/MusicButtons';
import { hasLinks } from '@/utils/utils';
import { MusicData } from '@/model/music';

interface SongProps {
    musicData: MusicData
}

const Song = ({musicData}: SongProps) => {

    if (!musicData) {
        return null; // TODO: 404
    }

    return (
        <div className={styles.songOuter}>
            <div className={styles.container}>
                <img src={musicData.cover} alt={`${musicData.title} cover art`} className={styles.albumCover} />
                <div className={styles.content}>
                    <div>
                        <h1 className={styles.albumTitle}>{musicData.title}</h1>
                        <h2 className={styles.artist}>{musicData.artist}</h2>
                    </div>
                    {/* {musicData.label && 
                        <div className={styles.labelContainer}>
                            <div className={styles.announcement}>Out now on </div>
                            <a className={styles.labelLink} target='_blank' href={musicData.label.link}>
                                <img 
                                    className={styles.labelIconLeft} 
                                    alt={`${musicData.label.name} logo`}
                                    src={musicData.label.logo}
                                />
                                {musicData.label.name}
                            </a>
                        </div>
                    } */}
                    {hasLinks(musicData.stream) &&
                        <div className={styles.linksContainer}>
                            <h3 className={styles.headline}>Stream</h3>
                            <MusicButtons links={musicData.stream} />
                        </div>
                    }
                    {hasLinks(musicData.buy) &&
                        <div className={styles.linksContainer}>
                            <h3 className={styles.headline}>Buy</h3>
                            <MusicButtons links={musicData.buy} />
                        </div>
                    }
                    {hasLinks(musicData.socials) &&
                        <div className={styles.linksContainer}>
                            <h3 className={styles.headline}>Socials</h3>
                            <MusicButtons links={musicData.socials} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Song;
