import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import moment from 'moment';
import styles from './styles/EditableProgressBar.module.css'

export interface props {
    currentSeconds: number,
    songSeconds: number, // TODO: if I use this for other components, use an enum and change var name
    updateParent: (newValue: string) => void;
}

const ProgressBar = ({currentSeconds, songSeconds, updateParent}: props) => {
    const progressBarRef = useRef<HTMLInputElement>(null);
    const [currentTime, setCurrentTime] = useState('00:00');
    // const audioRef = useRef<HTMLInputElement>(null);
    
    const finalTime = moment().startOf('day').seconds(songSeconds).format('mm:ss');

    useEffect(() => {
       var newCurrent =  moment().startOf('day')
        .seconds(currentSeconds)
        .format('mm:ss');
        setCurrentTime(newCurrent);
    }, [currentSeconds]);

    const handleProgressChange = () => {
        if (!!progressBarRef.current) {
            updateParent(progressBarRef.current.value)
        }
    };

    return (
        <div className={styles.progressBarContainer}>
            <span className="time current">{currentTime}</span>
            <input type="range" className={styles.range} ref={progressBarRef} onChange={handleProgressChange} />
            <span className="time">{finalTime}</span>
        </div>
    );
};

export default ProgressBar;