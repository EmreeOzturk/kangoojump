import React from 'react'
import { brands } from '../brands'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const Referances = () => {
    return (
      <div className='bg-zinc-300'>
        <InfiniteMovingCards items={brands} direction="right" speed="slow" />
      </div>
    );
}

export default Referances