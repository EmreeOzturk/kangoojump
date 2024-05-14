import React from 'react'
import { brands } from '../brands'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const Referances = () => {
    return (
        <InfiniteMovingCards
          items={brands}
          direction="right"
          speed="slow"
        />
    );
}

export default Referances