import React, { useState, useEffect, useRef } from "react";
import classnames from 'classnames';
import { getPercentage } from '../../utils/UtilityFunctions';
import styles from './styles/AudioPlayer.module.css'
import EditableProgressBar from '../EditableProgressBar/EditableProgressBar';

// https://blog.logrocket.com/building-audio-player-react/#configuring-progress-bar-volume-slider
// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js

// https://hearnow.com/preview/g1Df19HaF7g1e3OhdM0n0g%3D%3D?cid=17417

export interface props {
    url: string; 
    // hamburgerClick: () => void;
}


const AudioPlayer = ({url }: props) => {


  // TODO: use dynamic prop value
  const songSeconds = 312;


  // hooks
  // const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);
  const toggle = () => setIsPlaying(!isPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);

  // console.log(audioRef);

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
    console.log(newTime);
    if (audioRef.current) {
      const percentage = parseInt(newTime);
      audioRef.current.currentTime = getPercentage(percentage, songSeconds);
    }
  }

  // useEffect(() => {
  //     playing ? audio.play() : audio.pause();
  //   },
  //   [playing, audio]
  // );

  // useEffect(() => {
  //   audio.addEventListener('ended', () => setPlaying(false));
  //   return () => {
  //     audio.removeEventListener('ended', () => setPlaying(false));
  //   };
  // }, [audio]);

  return (
    <div className={styles.audioContainer}>
      {/* <button  className={classnames(styles.reset, styles.playButton)>{playing ? "Pause" : "Play"}</button> */}
      {/* <button onClick={toggle} className={classnames(styles.reset, styles.playButton)} /> */}
      <button onClick={toggle} className={classnames(styles.reset, styles.playButton, {[styles.isPlaying]: isPlaying})}>
        <div className={styles.triangleRight} />
        <audio src={url} ref={audioRef} />
      </button>
      <EditableProgressBar updateParent={updateAudioTime} />
    </div>
  );
};

export default AudioPlayer;