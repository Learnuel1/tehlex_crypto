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
import line from "../assets/images/line.png"

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
        <Box maxW='100vw' minH={'fit-content'} bg='blue' p='2rem'>
          <Grid templateColumns='repeat(2, 1fr)' gap={'1rem'}>
            <GridItem colSpan={[2,2,1,1]}>
              <VStack color={'white'} spacing='2.5rem' mt={'2rem'}>


                <Text bg={'blue'} boxShadow='base' w='fit-content'
                  p={'.5rem'} rounded='2xl'>
                  THE FUTURE OF EXCHANGE
                </Text>
               
                <Box position="absolute" top={['13.7rem','14rem','14.6rem','15.2rem']} left={'2rem'}>
                  <Image alt='line' src={line} w={[210,220,340,420]}  />
                </Box>

                <Box position="absolute" top={['13.9rem','14.2rem','14.8rem','15.4rem']} left={'2rem'} transform="-rotate-x-90">
                  <Image alt='line' src={line} w={[210,220,340,420]} />
                </Box>

                <Heading size={['xl','2xl','2xl','3xl']}  >
                Trade Giftcards <br/> and  crypto assets  stress  free                  
                </Heading>

                <Text fontSize={['1rem','1rem','1.3rem','1.3rem']}>
                Join the league of best traders to enjoy credible transactions,
                <br />value-added rates, and super-fast payouts.
                </Text>                
              </VStack>

              <HStack display={['none', 'none', 'flex', 'flex']} gap={'2rem'} mt='2rem'>

                {/* button for large screen */}
              <Button size={'lg'}   colorScheme={'gray'} color={'black'} rounded={'2xl'}
                onClick={()=> navigate('/login') }>
                      Start Trading
              </Button>
              <Button size={'lg'} colorScheme='none' color={'white'} border="1px" rounded={'2xl'}
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

          <HStack mt='1rem' gap='1rem' display={['flex', 'flex','none', 'none']}>
            <Button size={'lg'}   colorScheme={'gray'} color={'black'} rounded={'2xl'}
                onClick={()=> navigate('/login') }>
                      Start Trading
              </Button>
              <Button size={'lg'} colorScheme='none' color={'white'} border="1px" rounded={'2xl'}
                onClick={()=> navigate('/register') }  
               >
                    Join Now
              </Button>
          </HStack>

        </Box>
        <CoinCarousel />
        <CardCarousel />
        <OurStats />
        <OurCoreServices />
        <MadeEasy />
        <Testimonial />
        <EarnPoint />
    </main>
  )
}

export default Home
