import { Box, Heading, HStack, Stack, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import swap from '../../assets/images/swap.png'
import pay from '../../assets/images/pay.png'
import trade from '../../assets/images/trade.png'
import earn from '../../assets/images/earn.png'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 6 },
};




const items = [
  <div className="item" data-value="1">
    <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem' >
                <Image alt='swap' src={swap} w='50px' loading='lazy' />
                <Heading size={'md'}>Swap Gift Card to USDT </Heading>
                <Text>
                    We trade xbox, walmart, moneycard, robolox, <br /> and footlocker cards—there are no limits.
                </Text>
                <Link to={'/'}  >
                  <HStack color='orange'>
                      <Text>Get started</Text>
                      <BsFillArrowUpRightCircleFill />
                  </HStack>
                </Link>
            </Stack>
  </div>,
  <div className="item" data-value="2">
    <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem'>
                <Image alt='trade' src={trade} w='50px' loading='lazy' />
                <Heading size={'md'}>Trade Crypto </Heading>
                <Text>
                We trade different kinds of cryptocurrencies <br /> there are no limits.
                </Text>
                <Link to={'/'}  >
                  <HStack color='green'>
                      <Text>Get started</Text>
                      <BsFillArrowUpRightCircleFill />
                  </HStack>
                </Link>
            </Stack>
  </div>,
  <div className="item" data-value="3">
            <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem'>
                <Image alt='earn' src={earn} w='50px' loading='lazy'  />
                <Heading size={'md'}>Earn Points</Heading>
                <Text>
                Earn transferable trading points for every <br /> trade you make on our platform!
                </Text>
                <Link to={'/'}  >
                  <HStack color='orange'>
                      <Text>Get started</Text>
                      <BsFillArrowUpRightCircleFill />
                  </HStack>
                </Link>
            </Stack>
  </div>,
  <div className="item" data-value="4">
    <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem' >
                <Image alt='pay' src={pay} w='50px' loading='lazy'  />
                <Heading size={'md'}>Pay Bills</Heading>
                <Text>
                    We trade xbox, walmart, moneycard, robolox, <br /> and footlocker cards—there are no limits.
                </Text>
                <Link to={'/'}  >
                  <HStack color='blue'>
                      <Text>Get started</Text>
                      <BsFillArrowUpRightCircleFill />
                  </HStack>
                </Link>
            </Stack>
  </div>,
  
];

const OurCoreServices = () => {
  return (
    <Box p='3rem' bg='blue.50'>
        <Heading color={'black'} my='1rem' textAlign='center'>OUR CORE SERVICES</Heading>
        <Text size={['md','md','md']} textAlign='center' style={{ fontSize: '24px' }}>
          We’ve made transaction of our services <br />very swift on the go
          </Text>

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
        />
    </Box>
  )
}

export default OurCoreServices
