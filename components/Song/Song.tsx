import React from 'react';
import classnames from 'classnames';
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
        <div className={styles.songOuter}>
            <div className={styles.container}>
                <img src={songData.cover} alt={`${songData.title} cover art`} className={styles.albumCover} />
                <div className={classnames(styles.content, styles.mobileTopContent)}>
                    <div>
                        <h1 className={styles.albumTitle}>{songData.title}</h1>
                        <h2 className={styles.artist}>{songData.artist}</h2>
                    </div>
                    {songData.label && 
                        <div className={styles.labelContainer}>
                            <div className={styles.announcement}>Out now on </div>
                            <a className={styles.labelLink} target='_blank' href={songData.label.link}>
                                <img 
                                    className={styles.labelIconLeft} 
                                    alt={`${songData.label.name} logo`}
                                    src={songData.label.logo}
                                />
                                {songData.label.name}
                            </a>
                        </div>
                    }
                </div>
                <div className={classnames(styles.content, styles.mobileLinkContent)}>
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
                    {hasLinks(songData.socials) &&
                        <div className={styles.linksContainer}>
                            <h3 className={styles.headline}>Socials</h3>
                            <MusicButtons links={songData.socials} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Song;
