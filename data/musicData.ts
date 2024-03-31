import { MusicData, MusicLinks, SongData } from "@/model/music";



const steppinLinks: MusicLinks = {
    amazon: 'https://music.amazon.fr/albums/B0C21LDN27',
    bandcamp: 'https://marklaramee.bandcamp.com/track/steppin-back',
    deezer: 'https://www.deezer.com/us/album/428806997',
    pandora: 'https://www.pandora.com/artist/mark-laramee/steppin-back-feat-susy-borlido/ALv5n9fP6PJKXdJ',
    spotify: 'https://open.spotify.com/track/1KbGcZorYv8w6RoT4KxG1B?si=2b7ee73a6f3f4b21',
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
    links: steppinLinks,
}

const dtsFile: SongData = {
    seconds: 370,
    file: '/music/DropTheSky-MarkLaramee.mp3',
}
const dtsLinks: MusicLinks = {
    spotify: 'https://open.spotify.com/track/60INkHhievAsIZhqTnei6M?si=6836f40c6a284ef9',
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
    links: dtsLinks,
}

export const songsData: MusicData[] = [
    dtsData,
    steppinBackData,
];