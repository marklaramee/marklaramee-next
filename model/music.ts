
export interface SongData {
    file: string;
    seconds: number;
}

export interface MusicLinks {
    amazon?: string;
    apple?: string;
    bandcamp?: string;
    beatport?: string;
    deezer?: string;
    pandora?: string;
    spotify?: string;
    youtube?: string;
    soundcloud?: string;
}

export interface MusicData {
    cover: string;
    title: string;
    artist: string;
    song: SongData | null;
    stream: MusicLinks | null;
    buy: MusicLinks | null;
    genre: string;
    handle: string;
}
