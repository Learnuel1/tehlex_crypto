import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import amazon from '../../assets/images/amazon.png';
import itunes from '../../assets/images/itunes.png';
import googleplay from '../../assets/images/googleplay.png';
import walmart from '../../assets/images/walmart.png';
import ebay from '../../assets/images/ebay.png';
import steam from '../../assets/images/steam.png'


const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 6 },
  };


  const items = [
    <div className="item" data-value="1">
        <Box m='1rem'>
            <Image alt='amazon' src={amazon} w='100px' />
        </Box>
    </div>,
    <div className="item" data-value="2">
        <Box m='1rem'>
            <Image alt='itunes' src={itunes} w='100px' />
        </Box>
    </div>,
    <div className="item" data-value="3">
        <Box m='1rem'>
            <Image alt='walmart' src={walmart} w='100px' />
        </Box>
    </div>,
    <div className="item" data-value="4">
        <Box m='1rem'>
            <Image alt='googleplay' src={googleplay} w='100px' />
        </Box>
    </div>,
    <div className="item" data-value="5">
        <Box m='1rem'>
            <Image alt='steam' src={steam} w='100px' />
        </Box>
    </div>,
     <div className="item" data-value="6">
     <Box m='1rem'>
         <Image alt='ebay' src={ebay} w='100px' />
     </Box>
 </div>,
];

const CardCarousel = () => {
  return (
    <Box w='95vw' mx={'auto'}>
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

export default CardCarousel
