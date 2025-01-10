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
    apple: 'https://music.apple.com/us/album/steppin-back-feat-susy-borlido-single/1681630191',
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
    deezer: 'https://deezer.page.link/kJVnnVGdeJNoXxB6A',
    pandora: 'https://www.pandora.com/artist/mark-laramee/drop-the-sky/AL5ZPZldZZzZdPk',
    spotify: 'https://open.spotify.com/track/60INkHhievAsIZhqTnei6M?si=6836f40c6a284ef9',
}

const dtsBuy: MusicLinks = {
    beatport: 'https://www.beatport.com/artist/mark-laramee/1187913/tracks',
    bandcamp: 'https://marklaramee.bandcamp.com/track/drop-the-sky',
    amazon: 'https://www.amazon.com/Drop-Sky-Mark-Laramee/dp/B0CVSK3PCX',
    apple: 'https://music.apple.com/us/album/drop-the-sky-single/1731694856',
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
    deezer: 'https://deezer.page.link/AFh9SQ4PdRZ467bf8',
    pandora: 'https://www.pandora.com/artist/mark-laramee-and-donald-glaude/get-freaky-remixes/get-freaky-mark-laramee-remix/TRXzZPJZ3dd53Z4',
    spotify: 'https://open.spotify.com/track/03o74eEqYWkN4nRa9VilAQ?si=1a713eb496124fef',
    youtube: 'https://www.youtube.com/watch?v=JWLM_XJQdsM',
    soundcloud: 'https://soundcloud.com/earlynightrecords/donald-glaude-get-freaky-mark-laramee-remix',
}

const freakyBuy: MusicLinks = {
    amazon: 'https://music.amazon.com/albums/B0DFVCMNTJ',
    apple: 'https://music.apple.com/us/album/get-freaky-remixes-single/1765943656',
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
    deezer: 'https://www.deezer.com/us/album/644926731',
    pandora: 'https://www.pandora.com/artist/mark-laramee/impossible-waves/ALXkdPbhxZ3vPt4',
    spotify: 'https://open.spotify.com/track/4LzoAENSUguWOFAjqJDMfu?si=83eb429d57d74468',
    youtube: 'https://www.youtube.com/watch?v=xwAL5NMzI-Q',
    soundcloud: 'https://soundcloud.com/earlynightrecords/mark-laramee-impossible-waves-jet-extended-version',
}

const wavesBuy: MusicLinks = {
    amazon: 'https://music.amazon.com/albums/B0DHCRW8WP',
    apple: 'https://music.apple.com/us/album/impossible-waves-single/1769168309',
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

const energyStream: MusicLinks = {
    deezer: 'https://deezer.page.link/uKcpHLknaddwRTsu5',
    pandora: 'https://www.pandora.com/artist/mark-laramee-and-honey-5/come-get-your-energy/ALVdvgP4j9txKt4',
    spotify: 'https://open.spotify.com/track/70VsV19HD91S3blHJd2CAP?si=ffb3d644acb14302',
    youtube: 'https://youtu.be/kOFftCKzWDQ',
    // soundcloud: '',
}

const energyBuy: MusicLinks = {
    amazon: 'https://music.amazon.com/albums/B0DPLFPJC6',
    apple: 'https://music.apple.com/us/album/come-get-your-energy-single/1783364058',
    beatport: 'https://www.beatport.com/release/come-get-your-energy/4847696',
}

const energySocials: MusicLinks = {
    facebook: 'https://www.facebook.com/reel/1982227682246304',
    insta: 'https://www.instagram.com/p/DEqAj6PyeRO/',
    tiktok: 'https://www.tiktok.com/@mark.laramee.musi/video/7458362145646923039',
}

export const energyData: MusicData = {
    cover: '/music/Come-Get-Your-Energy-500x500.png',
    title: 'Energy',
    artist: 'Mark Laramee feat. Honey V',
    stream: energyStream,
    buy: energyBuy,
    genre: 'Bass House',
    handle: 'energy',
    socials: energySocials,
}


export const songsData: MusicData[] = [
    energyData,
    wavesData,
    freakyData,
    dtsData,
    steppinBackData,
    gitmbData,
];
