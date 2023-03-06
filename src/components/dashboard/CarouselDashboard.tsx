import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import eth from '../../assets/images/eth.png';
import ada from '../../assets/images/ada.png';
import trx from '../../assets/images/trx.png';
import dodge from '../../assets/images/dodge.png';
import { Box, Image } from '@chakra-ui/react';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };


  const items = [
    <div className="item" data-value="1">
        <Box m='1rem'>
            <Image alt='eth' src={eth} w='500px' rounded={'2xl'} />
        </Box>
    </div>,
    <div className="item" data-value="2">
         <Box m='1rem'>
            <Image alt='ada' src={ada} w='500px' rounded={'2xl'} />
        </Box>
    </div>,
    <div className="item" data-value="3">
         <Box m='1rem'>
            <Image alt='trx' src={trx} w='500px' rounded={'2xl'} />
        </Box>
    </div>,
    <div className="item" data-value="4">
         <Box m='1rem'>
            <Image alt='dodge' src={dodge} w='500px' rounded={'2xl'} />
        </Box>
    </div>,
];

const CarouselDashboard = () => {
  return (
    <Box w='90vw' mx={'auto'}>
        <AliceCarousel
           mouseTracking
           items={items}
           responsive={responsive}
           autoPlay 
           autoPlayInterval={1000}
           animationDuration={1000}
           animationType="fadeout"
           infinite
           disableButtonsControls
           disableDotsControls
        />
    </Box>
  )
}

export default CarouselDashboard
