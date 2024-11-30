import { MusicData, MusicLinks, SongData, RecordLabel } from "@/model/music";

const earlyNightRecords: RecordLabel = {
    name: 'Early Night Records',
    link: 'https://www.instagram.com/earlynightrecords/',
    logo: '/images/icons/ENR100x100.png',
}

const steppinStream: MusicLinks = {
    deezer: 'https://www.deezer.com/us/album/428806997',
    pandora: 'https://www.pandora.com/artist/mark-laramee/steppin-back-feat-susy-borlido/ALv5n9fP6PJKXdJ',
    spotify: 'https://open.spotify.com/track/1KbGcZorYv8w6RoT4KxG1B?si=2b7ee73a6f3f4b21',
}
const steppinBuy: MusicLinks = {
    amazon: 'https://music.amazon.fr/albums/B0C21LDN27',
    bandcamp: 'https://marklaramee.bandcamp.com/track/steppin-back',
}

const steppinFile: SongData = {
    seconds: 312,
    file: '/music/Mark%20Laramee%20-%20Steppin%20Back.mp3',
}
export const steppinBackData: MusicData = {
    cover: '/music/Steppin-Back-Cover.png',
    title: 'Steppin Back',
    artist: 'Mark Laramee feat. Susy Borlido',
    song: steppinFile,
    stream: steppinStream,
    buy: steppinBuy,
    socials: null,
    genre: 'Electronica / Rock',
    handle: 'steppinBack',
}

const dtsFile: SongData = {
    seconds: 370,
    file: '/music/DropTheSky-MarkLaramee.mp3',
}
const dtsStream: MusicLinks = {
    spotify: 'https://open.spotify.com/track/60INkHhievAsIZhqTnei6M?si=6836f40c6a284ef9',
}

const dtsBuy: MusicLinks = {
    beatport: 'https://www.beatport.com/artist/mark-laramee/1187913/tracks',
    bandcamp: 'https://marklaramee.bandcamp.com/track/drop-the-sky',
    amazon: 'https://www.amazon.com/Drop-Sky-Mark-Laramee/dp/B0CVSK3PCX',
    apple: 'https://music.apple.com/us/album/drop-the-sky/1731694856?i=1731694857',
}

export const dtsData: MusicData = {
    cover: '/music/DropTheSky-MarkLarameeCoverArt.png',
    title: 'Drop The Sky',
    artist: 'Mark Laramee',
    song: dtsFile,
    stream: dtsStream,
    buy: dtsBuy,
    genre: 'Bass House',
    handle: 'droptheSky',
    socials: null,
}

const freakyStream: MusicLinks = {
    spotify: 'https://open.spotify.com/track/03o74eEqYWkN4nRa9VilAQ?si=1a713eb496124fef',
    youtube: 'https://www.youtube.com/watch?v=JWLM_XJQdsM',
    soundcloud: 'https://soundcloud.com/earlynightrecords/donald-glaude-get-freaky-mark-laramee-remix',
}

const freakyBuy: MusicLinks = {
    beatport: 'https://www.beatport.com/release/get-freaky-remixes/4714803',
}

const freakySocials: MusicLinks = {
    facebook: 'https://www.facebook.com/reel/577702098155426',
    insta: 'https://www.instagram.com/p/DBXbpULS28a/',
    tiktok: 'https://www.tiktok.com/t/ZP88q91rn/',
}

export const freakyData: MusicData = {
    cover: '/music/get-freaky-cover.webp',
    title: 'Get Freaky (Mark Laramee remix)',
    artist: 'Donald Glaude / Mark Laramee',
    stream: freakyStream,
    buy: freakyBuy,
    genre: 'Bass House',
    handle: 'getFreaky',
    socials: freakySocials,
    label: earlyNightRecords,
}

const wavesStream: MusicLinks = {
    spotify: 'https://open.spotify.com/track/4LzoAENSUguWOFAjqJDMfu?si=83eb429d57d74468',
    youtube: 'https://www.youtube.com/watch?v=xwAL5NMzI-Q',
    soundcloud: 'https://soundcloud.com/earlynightrecords/mark-laramee-impossible-waves-jet-extended-version',
}

const wavesBuy: MusicLinks = {
    beatport: 'https://www.beatport.com/release/impossible-waves/4739349',
}

const wavesSocials: MusicLinks = {
    facebook: 'https://www.facebook.com/reel/27273284052320043',
    insta: 'https://www.instagram.com/p/DBj5Cu_y4r0/',
    tiktok: 'https://www.tiktok.com/t/ZP88qMQ9A/',
}

export const wavesData: MusicData = {
    cover: '/music/impossible-waves-ENR-cover-500x500.jpg',
    title: 'Impossible Waves',
    artist: 'Mark Laramee',
    stream: wavesStream,
    buy: wavesBuy,
    socials: wavesSocials,
    genre: 'Bass House',
    handle: 'impossibleWaves',
    label: earlyNightRecords,
}

const gitmbStream: MusicLinks = {
    soundcloud: 'https://soundcloud.com/lams/gitmb-mark-laramee-smashlc',
}

export const gitmbData: MusicData = {
    cover: '/music/GITMB-cover.png',
    title: 'GITMB',
    artist: 'Mark Laramee / SmashLC',
    stream: gitmbStream,
    buy: null,
    genre: 'Bass House',
    handle: 'gitmb',
    socials: null,
}

export const energyData: MusicData = {
    cover: '',
    title: 'Energy',
    artist: 'Mark Laramee feat. Honey V',
    stream: null,
    buy: null,
    genre: 'Bass House',
    handle: 'energy',
    socials: null,
}


export const songsData: MusicData[] = [
    wavesData,
    freakyData,
    dtsData,
    steppinBackData,
    // gitmbData,
    // energyData,
];
