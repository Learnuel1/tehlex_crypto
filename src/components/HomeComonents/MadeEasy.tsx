import { Box, Button, Grid, GridItem, Heading, HStack, Stack, Text, Image, VStack, } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import app_store from '../../assets/images/app_store.png'
import google_store from '../../assets/images/googl_store.png'
import reg from '../../assets/images/reg.png'

const MadeEasy = () => {
  return (
    <Box p='2rem' m='2rem' w='95vw' mx={'auto'}>
        <Grid templateColumns='repeat(2, 1fr)' gap={'1rem'}>
            <GridItem colSpan={[2,2,1,1]} m='2rem'>
                <Text color={'blue'} >MADE EASY</Text>
                <Heading size='md' my={'2rem'}>
                Simple Steps to get started while <br/> trading on tehle
                </Heading>

                <Stack fontSize={['1rem', '1.2rem','1.3rem']} spacing='1rem'>
                    <Text borderLeft={' solid 2px blue'} p='.5rem' >
                    Choose to sell your crypto or Giftcards to USDT
                    </Text>

                    <Text borderLeft={' solid 2px gray'} p='.5rem' >
                    Create an account or Sign in to your account
                    </Text>

                    <Text borderLeft={' solid 2px gray'} p='.5rem' >
                    Initiate the transaction and get paid on the go
                    </Text>     

                    <HStack gap={'1rem'} >
                        <Link to='/' >
                            <Image alt='app_store' src={app_store} w='150px' loading='lazy' />
                        </Link>

                        <Link to='/' >
                            <Image alt='google_store' src={google_store} w='150px' loading='lazy' />
                        </Link>
                    </HStack>               
                </Stack>
            </GridItem>

            <GridItem colSpan={[2,2,1,1]} display={['none', 'none', 'block', 'block']} >
                <VStack bg={'yellow.300'} w='250px' h='300px'>
                    <Image alt='reg_img' src={reg} w='250px' mt='5rem' loading='lazy' />
                </VStack>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default MadeEasy
