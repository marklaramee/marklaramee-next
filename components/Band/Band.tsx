import React from 'react'
import { bandsData } from '@/data/bandData';
import Album from '../Album/Album';

interface SongProps {
    handle: string
}

const Band = ({handle}: SongProps) => {
    console.log('mldebug heere BAND');
    const bandData = bandsData.find(datum => datum.handle == handle);

    if (!bandData) {
        return null; // TODO: 404
    }

    return (
        bandData.music.map((product) => (
            <Album musicData={product} key={product.handle} />
        ))
    );
};

export default Band;
