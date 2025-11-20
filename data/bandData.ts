import { MusicData, MusicLinks, SongData, RecordLabel, BandData } from "@/model/music";

const lungCastRecords: RecordLabel = {
    name: 'Lungcast Records',
    link: 'https://www.discogs.com/label/30322-Lungcast-Records',
    logo: '/images/music/lungcast.jpg',
}

const snailsPaceRecords: RecordLabel = {
    name: 'Snail\'s Pace Records',
    link: '',
    logo: '',
}

const ruinRecords: RecordLabel = {
    name: 'Man\'s Ruin Records',
    link: 'https://www.discogs.com/label/34161-Mans-Ruin-Records',
    logo: '/images/music/mansruin-logo.jpg',
}

const reptileRecords: RecordLabel = {
    name: 'Reptilian Records',
    link: 'https://www.reptilianrecords.com/',
    logo: '/images/music/reptile-logo.png',
}


// Gasoline T-Shirt
const gasStream: MusicLinks = {
    deezer: 'https://link.deezer.com/s/31F2tOSI60JY8WUYumdmC',
    pandora: 'https://www.pandora.com/artist/helivator/gasoline-tshirt/ALhqc4k93c2KvtP?part=ug-desktop&corr=119890750040180177',
    spotify: 'https://open.spotify.com/album/32yyRour6jf9y66OKE9aC5?si=Mk3dK2g1Ta-GM9vXyJVf_Q',
    youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_klgGDAcCSJ_2ZGaUdJ54-scT9k9jTdXp4&si=vOadhttW7Mk_BLOX',
}

const gasBuy: MusicLinks = {
    bandcamp: '', // TODO: add bandcamp link
    amazon: 'https://music.amazon.com/albums/B0G22CKMWQ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_hizxVMgxmV9xXjIiLtgv43z1c',
    apple: 'https://music.apple.com/gb/album/gasoline-tshirt/1852632718',
}

export const gasData: MusicData = {
    artist: 'Helivator',
    buy: gasBuy,
    cover: '/music/gasolineCover.webp',
    genre: 'Rock',
    handle: 'gasolineTShirt',
    label: lungCastRecords,
    socials: null,
    stream: gasStream,
    title: 'Gasoline T-Shirt',
}

// Final Dividing Line
const lineStream: MusicLinks = {
    deezer: 'https://link.deezer.com/s/31F2B2iV0AoxEYxFmMcka',
    pandora: 'https://www.pandora.com/artist/helivator/the-final-dividing-line/ALPx5PK7XJz2PtJ?part=ug-desktop&corr=119890750040180177',
    spotify: 'https://open.spotify.com/album/74uHllo0bdTlkfhMTQFV9I?si=FKnkoEELSjeh0f81B1I5TA',
    youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_lox54lzR2dTqher5cxma5g30QFYCNG-w0&si=5UY35dTSmKy-0W1o',
}

const lineBuy: MusicLinks = {
    bandcamp: '', // TODO: add bandcamp link
    amazon: 'https://music.amazon.com/albums/B0916NX3SS?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_MNYA8PXY2USsx9d5DqZVm1fX5',
    apple: 'https://music.apple.com/gb/album/the-final-dividing-line-ep/1561080568',
}

export const lineData: MusicData = {
    artist: 'Helivator',
    buy: lineBuy,
    cover: '/music/dividingCover.webp',
    genre: 'Rock',
    handle: 'theFinalDividingLine',
    label: snailsPaceRecords,
    socials: null,
    stream: lineStream,
    title: 'The Final Dividing Line',
}

// Ivory Tower Express
const ivoryStream: MusicLinks = {
    pandora: 'https://www.pandora.com/artist/helivator/ivory-tower-express-single/ivory-tower-express/TRj9jVvg6fp6rcJ?part=ug-desktop&corr=119890750040180177',
    spotify: 'https://open.spotify.com/track/0jvUk4Q3cuibfHATH5orbs?si=7b8a1afd2e4d4c13',
    youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_mscG9_Th-FvtVQAaPEea-Xc32xtChioV4&si=17YtXK-t8tgLcV8n',
}

const ivoryBuy: MusicLinks = {
    bandcamp: '', // TODO: add bandcamp link
    amazon: 'https://music.amazon.com/albums/B09M7MKRCJ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_HVPQinzeyZ7dAPYMLTecS9upV',
    apple: 'https://music.apple.com/gb/album/ivory-tower-express-single/1596349927',
}

export const ivoryData: MusicData = {
    artist: 'Helivator',
    buy: ivoryBuy,
    cover: '/music/ivoryCover.webp',
    genre: 'Rock',
    handle: 'ivoryTowerExpress',
    label: snailsPaceRecords,
    socials: null,
    stream: ivoryStream,
    title: 'Ivory Tower Express',
}

// Starry Skies
const starryStream: MusicLinks = {
    deezer: 'https://link.deezer.com/s/31F2LbIJSRDvTUJwp93M5',
    pandora: 'https://www.pandora.com/artist/helivator/starry-skies-single/ALn5zzq34ck3g2P?part=ug-desktop&corr=119890750040180177',
    spotify: 'https://open.spotify.com/track/1ysV2G0b056dgrvhqWdCQU?si=0f9777f1ea7b47ed',
    youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_nkbuZ-bYJJiqPjsDI6F02Icw7KIaiN29k&si=rHscsw_g-0L6X2aM',
}

const starryBuy: MusicLinks = {
    bandcamp: '', // TODO: add bandcamp link
    amazon: 'https://music.amazon.com/albums/B09X3LFYW3?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_psURNWcIv31VW88KmcE787biY',
    apple: 'https://music.apple.com/gb/album/starry-skies-single/1617472194',
}

export const starryData: MusicData = {
    artist: 'Helivator',
    buy: starryBuy,
    cover: '/music/starrySkiesCover.webp',
    genre: 'Rock',
    handle: 'starrySkies',
    label: snailsPaceRecords,
    socials: null,
    stream: starryStream,
    title: 'Starry Skies',
}

export const helivatorData: MusicData[] = [
    ivoryData,
    starryData,
    lineData,
    gasData,
];

export const helivatorBand: BandData = {
    handle: 'helivator',
    music: helivatorData,
};


/************
 * CT9
 */

// Self titled
const selfStream: MusicLinks = {
    deezer: 'https://www.deezer.com/us/album/175853392',
    pandora: 'https://www.pandora.com/artist/the-cutthroats-9/cutthroats-9/ALVZgpdJ7p2cZbq?part=ug-desktop&corr=119890750040180177',
    spotify: 'https://open.spotify.com/album/3p2V37OSdSb1wk8lQJkT4D?si=gLa2NY4vTdGLTzBUYrH9Ow',
    youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_mE0-SE52JUhjdX5T_ei3cnSSnd-Vqwsn8&si=9kpVCm_lkhFlgeXE',
}

const selfBuy: MusicLinks = {
    bandcamp: '',
    amazon: 'https://music.amazon.com/albums/B08K3X3JKX?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_C5140vZKbWOjT3H5M2zqdfZzN',
    apple: '',
}

export const selfData: MusicData = {
    artist: 'Cutthroats 9',
    buy: selfBuy,
    cover: '/music/ct9Cover.webp',
    genre: 'Rock',
    handle: 'starrySkies',
    label: ruinRecords,
    socials: null,
    stream: selfStream,
    title: 'Cutthroats 9',
}


// anger Management
const angerStream: MusicLinks = {
    deezer: 'https://link.deezer.com/s/31F4ewx8p2KiNacx10dCp',
    pandora: 'https://www.pandora.com/artist/the-cutthroats-9/anger-management/ALxj6Jx4Vnq477J?part=ug-desktop&corr=119890750040180177',
    spotify: 'https://open.spotify.com/album/5sJQNJhShpBFHylSyzh6Ar?si=rxSOleHMSIGTSd3RaHe_8g',
    youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_laaHqKBA35v3NDnIa_7PgQNcS3f66Nruw&si=5_3Ycaz98W3RqBoH',
}

const angerBuy: MusicLinks = {
    bandcamp: '',
    amazon: 'https://music.amazon.com/albums/B08JRYVHKG?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_epcYCqSXURM38SiRviqnoQ4d3',
    apple: 'https://music.apple.com/gb/album/anger-mangement-ep/1532970476',
}

export const angerData: MusicData = {
    artist: 'Cutthroats 9',
    buy: angerBuy,
    cover: '/music/angerCover.webp',
    genre: 'Rock',
    handle: 'angerManagement',
    label: reptileRecords,
    socials: null,
    stream: angerStream,
    title: 'Anger Management',
}


export const ct9Data: MusicData[] = [
    selfData,
    angerData,
];

export const ct9Band: BandData = {
    handle: 'ct9',
    music: ct9Data,
};


export const bandsData: BandData[] = [
    helivatorBand,
    ct9Band,
];
