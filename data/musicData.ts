import { MusicData, MusicLinks } from "@/model/music";



const steppinLinks: MusicLinks = {
    amazon: 'https://music.amazon.fr/albums/B0C21LDN27',
    bandcamp: 'https://marklaramee.bandcamp.com/track/steppin-back',
    deezer: 'https://www.deezer.com/us/album/428806997',
    pandora: 'https://www.pandora.com/artist/mark-laramee/steppin-back-feat-susy-borlido/ALv5n9fP6PJKXdJ',
    spotify: 'https://open.spotify.com/track/1KbGcZorYv8w6RoT4KxG1B?si=2b7ee73a6f3f4b21',
}

export const steppinBackData: MusicData = {
    cover: '/music/Steppin-Back-Cover.png',
    title: 'Steppin Back',
    artist: 'Mark Laramee feat. Susy Borlido',
    file: '/music/Mark%20Laramee%20-%20Steppin%20Back.mp3',
    links: steppinLinks,
}

export const songsData: MusicData[] = [
    steppinBackData,
];