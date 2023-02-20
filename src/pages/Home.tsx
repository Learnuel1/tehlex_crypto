import { Box, Grid, GridItem, VStack, Image, Stack, Text, Heading, HStack, Button } from '@chakra-ui/react'
import React from 'react';
import brand_img from '../assets/images/home_img.png'
import EarnPoint from '../components/HomeComonents/EarnPoint';
import MadeEasy from '../components/HomeComonents/MadeEasy';
import OurCoreServices from '../components/HomeComonents/OurCoreServices';
import OurStats from '../components/HomeComonents/OurStats';
import Testimonial from '../components/HomeComonents/Testimonial';

const Home = () => {
  return (
    <section>
        <Box maxW='100vw' minH={'100vh'} bg='blue' p='2rem'>
          <Grid templateColumns='repeat(2, 1fr)' gap={'1rem'}>
            <GridItem colSpan={[2,2,1,1]}>
              <VStack color={'white'} spacing='2.5rem' mt={'2rem'}>


                <Text bg={'blue'} boxShadow='base' w='fit-content' 
                  p={'.5rem'} rounded='2xl' >
                  THE FUTURE OF EXCHANGE
                </Text>

                <Heading size={['xl','2xl','2xl','3xl']}  >
                Trade Giftcards <br/> and  crypto assets  stress  free                  
                </Heading>

                <Text fontSize={['1rem','1rem','1.3rem','1.3rem']}>
                Join the league of best traders to enjoy credible transactions,
                <br />value-added rates, and super-fast payouts.
                </Text>                
              </VStack>
              <HStack justify={'space-around'} mt='2rem'>
                  <Button bg='white' color={'black'}>
                    Start Trading
                  </Button>

                  <Button colorScheme={'none'} border='1px' rounded={'2xl'} >
                    Join Now
                  </Button>
                </HStack>
            </GridItem>

            <GridItem colSpan={[2,2,1,1]}>
              <VStack mt={'2rem'}>
                <Image alt='brand_img' src={brand_img} w='500px'  />
              </VStack>
            </GridItem>
          </Grid>         
        </Box>
        <OurStats />
        <OurCoreServices />
        <MadeEasy />
        <Testimonial />
        <EarnPoint />
    </section>
  )
}

export default Home
