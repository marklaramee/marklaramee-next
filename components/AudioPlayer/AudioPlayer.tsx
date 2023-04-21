import React, { useState, useEffect, useRef, useCallback } from "react";
import classnames from 'classnames';
import { getPercentage } from '../../utils/UtilityFunctions';
import styles from './styles/AudioPlayer.module.css'
import EditableProgressBar from '../EditableProgressBar/EditableProgressBar';

// https://blog.logrocket.com/building-audio-player-react/#configuring-progress-bar-volume-slider
// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
// https://hearnow.com/preview/g1Df19HaF7g1e3OhdM0n0g%3D%3D?cid=17417

export interface props {
    url: string; 
}


const AudioPlayer = ({url }: props) => {
  // TODO: use dynamic prop value
  const songSeconds = 312;
  
  // hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const toggle = () => setIsPlaying(!isPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAnimationRef = useRef(0);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  const updateAudioTime = (newTime: string) => {
    if (audioRef.current) {
      const percentage = parseInt(newTime);
      audioRef.current.currentTime = getPercentage(percentage, songSeconds);
    }
  }

  const timeUpdate = (event: any) => {
      const seconds = Math.floor(event.target.currentTime);
      setCurrentSeconds(seconds);
  }

  return (
    <div className={styles.audioContainer}>
      <button onClick={toggle} className={classnames(styles.reset, styles.playButton, {[styles.isPlaying]: isPlaying})}>
        <div className={styles.triangleRight} />
        <audio src={url} ref={audioRef} onTimeUpdate={timeUpdate} />
      </button>
      <EditableProgressBar currentSeconds={currentSeconds} songSeconds={songSeconds} updateParent={updateAudioTime} />
    </div>
  );
};

export default AudioPlayer;
