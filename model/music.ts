
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
    facebook?: string;
    tiktok?: string;
    insta?: string;
}

export interface RecordLabel {
    name: string;
    link: string;
    logo: string;
}

export interface MusicData {
    cover: string;
    title: string;
    artist: string;
    song?: SongData;
    stream: MusicLinks | null;
    buy: MusicLinks | null;
    socials: MusicLinks | null;
    genre: string;
    handle: string;
    label?: RecordLabel;
}
