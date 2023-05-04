import { Box, Grid, GridItem, Heading, HStack, Stack, VStack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { GiRoyalLove } from "react-icons/gi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";
import NewsLetter from './NewsLetter';
import logo from '../assets/images/logo1.png'

const Footer = () => {
  return (
    <footer>
        <Box p={'1.5rem'} bg='black'>
            <Grid templateColumns='repeat(4, 1fr)' gap={'2rem'}>
                <GridItem colSpan={[4, 4, 1, 1]}>
                    <NewsLetter />
                </GridItem>

                <GridItem colSpan={[2, 2, 1, 1]} >
                    <VStack w='100%'>
                        <Heading color={'white'} size={'md'}>Get started</Heading>
                        <Stack color={'white'} style={{ fontSize: '14px' }}>
                            <Link to={'/'}> Sell GiftCard </Link>
                            <Link to={'/'}> Sell Crypto </Link>
                            <Link to={'/'}> Earn Points </Link>
                        </Stack>
                    </VStack>
                </GridItem>

                <GridItem colSpan={[2, 2, 1, 1]}>
                    <VStack w='100%'>
                            <Heading color={'white'} size={'md'}> Find out More</Heading>
                            <Stack color={'white'} style={{ fontSize: '14px' }}>
                                <Link to={'/'}> About Us </Link>
                                <Link to={'/'}> Our Team </Link>
                                <Link to={'/'}> Support </Link>
                                <Link to={'/'}> FAQ </Link>
                            </Stack>
                    </VStack>
                </GridItem>
                
                <GridItem colSpan={[4, 4, 1, 1]} mb='2rem'>
                    <VStack w='100%' justify={'right'}>
                            <Heading color={'white'} size={'md'}> Social Handles</Heading>
                            <HStack  color={'white'} style={{ fontSize: '14px' }} gap='1rem' wrap={'wrap'}>
                                <BsFacebook size={'1.3rem'} />
                                <BsInstagram size={'1.3rem'} />
                                <AiFillTwitterCircle size={'1.3rem'} />     
                                <AiFillYoutube size={'1.3rem'} />
                                <AiFillLinkedin size={'1.3rem'} />                          
                            </HStack>                            
                    </VStack>
                </GridItem>
            </Grid>

            <hr />
              <HStack p='.3rem' justify={'space-between'} color='white' wrap='wrap'>
                  <Image alt='logo' src={logo} w='100px' mb='.5rem' style={{ filter: 'grayscale(100%) brightness(1000%)' }}/>
                {/* <Image alt='logo' src={logo} w='100px' mb={'.5rem'}/> */}
               <HStack fontSize={['10px','14px','16px','16px']}>
                    <Text>Built with</Text>
                    <GiRoyalLove color='red' />
                    <Text>Tehlex Worldwide</Text>
                    <AiOutlineCopyrightCircle />
                    <Text>2023</Text>
               </HStack>
            </HStack>
        </Box>
    </footer>
  )
}

export default Footer
