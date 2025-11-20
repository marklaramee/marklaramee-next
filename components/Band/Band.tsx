import React from 'react'
import { bandsData } from '@/data/bandData';
import Song from '../Song/Song';

interface SongProps {
    handle: string
}

const Band = ({handle}: SongProps) => {
    console.log('mldebug heere BAND');
    return (
        <div> a band</div>);
    // const bandData = bandsData.find(datum => datum.handle == handle);

    // if (!bandData) {
    //     return null; // TODO: 404
    // }

    // return (
    //     bandData.music.map((product) => (
    //         <Song handle={product.handle} key={product.handle} />
    //     ))
    // );
};

export default Band;
