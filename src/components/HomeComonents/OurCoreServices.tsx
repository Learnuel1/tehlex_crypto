import { Box, Heading, HStack, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import swap from '../../assets/images/swap.png'
import pay from '../../assets/images/pay.png'
import trade from '../../assets/images/trade.png'
import earn from '../../assets/images/earn.png'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const OurCoreServices = () => {
  return (
    <Box p='3rem' bg='blue.100'>
        <Text color={'blue'} my='1rem'>OUR CORE SERVICES</Text>
        <Heading size={['sm','md','md']} textAlign='center'>
          We’ve made transaction of our services <br />very swift on the go
          </Heading>

        <HStack mt={'3rem'} wrap='wrap' gap={'1rem'} justify='space-evenly'> 
            <Stack bg={'white'} p='1rem' rounded={'2xl'} >
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

            <Stack bg={'white'} p='1rem' rounded={'2xl'}>
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

            <Stack bg={'white'} p='1rem' rounded={'2xl'}>
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

            <Stack bg={'white'} p='1rem' rounded={'2xl'}>
                <Image alt='swap' src={swap} w='50px' loading='lazy'  />
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
        </HStack>
    </Box>
  )
}

export default OurCoreServices
