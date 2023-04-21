import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import classnames from 'classnames';
import styles from './styles/ProgressBar.module.css'

export interface props {
    updateParent: (newValue: string) => void;
}

const ProgressBar = ({updateParent}: props) => {
    const progressBarRef = useRef<HTMLInputElement>(null)
    // const audioRef = useRef<HTMLInputElement>(null);

    const handleProgressChange = () => {
        if (!!progressBarRef.current) {
            // console.log(progressBarRef.current.value);
            updateParent(progressBarRef.current.value)
        }
    };

    return (
        <div className={styles.progressBarContainer}>
            <span className="time current">00:00</span>
            <input type="range" className={styles.range} ref={progressBarRef} onChange={handleProgressChange} />
            <span className="time">03:34</span>
        </div>
    );
};

export default ProgressBar;