import { Box, Grid, GridItem, VStack, Image,  Text, Heading, HStack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import brand_img from '../assets/images/home_img.png'
import CardCarousel from '../components/HomeComonents/CardCarousel';
import CoinCarousel from '../components/HomeComonents/CoinCarousel';
import EarnPoint from '../components/HomeComonents/EarnPoint';
import MadeEasy from '../components/HomeComonents/MadeEasy';
import OurCoreServices from '../components/HomeComonents/OurCoreServices';
import OurStats from '../components/HomeComonents/OurStats';
import Testimonial from '../components/HomeComonents/Testimonial';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section>
        <Box maxW='100vw' minH={'fit-content'} bg='blue' p='2rem'>
        <Grid templateColumns='repeat(2, 1fr)' gap={'1rem'}>
          <GridItem colSpan={[2,2,1,1]}>
            <VStack color={'white'} mt={'2rem'}>
              <Text bg={'blue'} boxShadow='base' w='fit-content' 
                p={'.5rem'} rounded='2xl' mr='30rem' mb='1rem'>
                THE FUTURE OF EXCHANGE
              </Text>
              <Box display='flex' flexWrap='wrap'>
                <Heading size={['xl','2xl','2xl','3xl']} mr='1rem' mb='1rem'>
                  Trade Giftcards <br/> and  crypto assets  stress  free                  
                </Heading>
                <Text fontSize={['1rem','1rem','1.3rem','1.3rem']}>
                  Join the league of best traders to enjoy credible transactions,
                  <br />value-added rates, and super-fast payouts.
                </Text>
              </Box>
            </VStack>
            
              {/* button for large screen */}
          <HStack display={['none', 'none', 'flex', 'flex']} justify={'flex-start'} mt='2rem' spacing='2rem'>
            <Button size={'lg'}   colorScheme={'blue'} color={'black'} bg='white' w='fit-content'
               onClick={()=> navigate('/login') }
            >
              Start trading
            </Button>
            <Button size={'lg'} colorScheme={'whiteAlpha'} color={'white'} bg='#002CFF' 
              boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' w='fit-content' border={"2px solid white"}
              onClick={()=> navigate('/register') }
            >     
              Join Now
            </Button>
            </HStack>

            </GridItem>
            <GridItem colSpan={[2,2,1,1]}>
              <VStack mt={['2rem', '2rem','8rem', '4rem']}>
                <Image alt='brand_img'  src={brand_img} w='400px'  />
              </VStack>
            </GridItem>
        </Grid>
        
            {/* Buttons for small screen under home page */}

        <VStack mt='1rem' gap='1rem' display={['flex', 'flex','none', 'none']}>
              <Button colorScheme={'blue'} bg='blue.800'
              onClick={()=> navigate('/login') } size={'lg'} 
              >
                    Start Trading
            </Button>

            <Button size={'lg'}  colorScheme={'whiteAlpha'} color={'black'} bg='white'
              onClick={()=> navigate('/register') }  
              >
                  Join Now
            </Button>
        </VStack>
        
        </Box>
        <CoinCarousel />
        <CardCarousel />
        <OurStats />
        <OurCoreServices />
        <MadeEasy />
        <Testimonial />
        <EarnPoint />
    </section>
  )
}

export default Home