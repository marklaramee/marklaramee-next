import React, { useState, useEffect, useRef, LegacyRef } from "react";
import classnames from 'classnames';
import styles from './styles/AudioPlayer.module.css'

// https://blog.logrocket.com/building-audio-player-react/#configuring-progress-bar-volume-slider
// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js

// https://hearnow.com/preview/g1Df19HaF7g1e3OhdM0n0g%3D%3D?cid=17417

export interface props {
    url: string; 
    // hamburgerClick: () => void;
}


const AudioPlayer = ({url }: props) => {

  // hooks
  // const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);
  const toggle = () => setIsPlaying(!isPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);

  // RefObject<HTMLAudioElement>
  // LegacyRef<HTMLAudioElement>

  console.log(audioRef);

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
    <div>
      {/* <button  className={classnames(styles.reset, styles.playButton)>{playing ? "Pause" : "Play"}</button> */}
      {/* <button onClick={toggle} className={classnames(styles.reset, styles.playButton)} /> */}
      <button onClick={toggle} className={classnames(styles.reset, styles.playButton, {[styles.isPlaying]: isPlaying})}>
        <div className={styles.triangleRight} />
        <audio src={url} ref={audioRef} />
      </button>
    </div>
  );
};

export default AudioPlayer;