

export interface MusicLinks {
    amazon?: string;
    apple?: string;
    bandcamp?: string;
    beatport?: string;
    deezer?: string;
    pandora?: string;
    spotify?: string;
    youtube?: string;
}

export interface MusicData {
    cover: string;
    title: string;
    artist: string;
    file: string;
    links: MusicLinks;
}