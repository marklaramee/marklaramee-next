
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
    facebook?: string; 
    insta?: string; 
    pandora?: string; 
    soundcloud?: string; 
    spotify?: string; 
    tiktok?: string; 
    youtube?: string; 
    youtubeMusic?: string;
}

export interface RecordLabel {
    name: string;
    link: string;
    logo: string;
}

export interface MusicData {
    artist: string;
    buy: MusicLinks | null;
    cover: string;
    genre: string;
    handle: string;
    label?: RecordLabel;
    socials: MusicLinks | null;
    song?: SongData;
    stream: MusicLinks | null;
    title: string;  
}

export interface BandData {
    handle: string;
    music: MusicData[];
}
