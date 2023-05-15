import { Box, Heading, HStack, Stack, Text, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import swap from '../../assets/images/swap.png'
import pay from '../../assets/images/pay.png'
import trade from '../../assets/images/trade.png'
import earn from '../../assets/images/earn.png'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import 'react-alice-carousel/lib/alice-carousel.css';


const OurCoreServices = () => {
  return (
    <Box p='3rem' bg='gray.50'>
        <Text color={'blue'} my='1.3rem' fontWeight='semibold'>
          OUR CORE SERVICES
        </Text>
        <Box pos="absolute" left={['10%','10%','23%','23%']}>
        <Heading size={['sm','sm','md', 'md']} >
          We’ve made transaction of our services <br />very swift on the go
          </Heading>
        </Box>

          <VStack mt={'5rem'} >
          <HStack flexWrap={'wrap'} gap={5}>
            <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem' w={["full", "full", "45%","45%"]} >
                <Image alt='swap' src={swap} w='50px' loading='lazy' />
                <Heading size={'md'}>Swap Gift Card to USDT </Heading>
                <Text>
                    We trade xbox, walmart, moneycard, robolox, <br /> and footlocker cards—there are no limits.
                </Text>
                <Link to={'/register'}  >
                  <HStack color='orange'>
                      <Text>Get started</Text>
                      <BsFillArrowUpRightCircleFill />
                  </HStack>
                </Link>
            </Stack>

          <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem' w={["full", "full", "45%","45%"]}>
                <Image alt='trade' src={trade} w='50px' loading='lazy' />
                <Heading size={'md'}>Trade Crypto </Heading>
                <Text>
                We trade different kinds of cryptocurrencies  there are no limits.
                </Text>
                <Link to={'/register'}  >
                  <HStack color='green.300'>
                      <Text>Get started</Text>
                      <BsFillArrowUpRightCircleFill />
                  </HStack>
                </Link>
            </Stack>
              </HStack>
          </VStack>

        <VStack mt={'2rem'}>
          <HStack flexWrap={'wrap'} gap={5}>
            <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem' w={["full", "full", "45%","45%"]}>
                  <Image alt='earn' src={earn} w='50px' loading='lazy'  />
                  <Heading size={'md'}>Earn Points</Heading>
                  <Text>
                  Earn transferable trading points for every <br /> trade you make on our platform!
                  </Text>
                  <Link to={'/register'}  >
                    <HStack color='green.600'>
                        <Text>Get started</Text>
                        <BsFillArrowUpRightCircleFill />
                    </HStack>
                  </Link>
              </Stack>

            <Stack bg={'white'} p='1rem' rounded={'2xl'} m='1rem' w={["full", "full", "45%","45%"]} >
                <Image alt='pay' src={pay} w='50px' loading='lazy'  />
                <Heading size={'md'}>Pay Bills</Heading>
                <Text>
                    We trade xbox, walmart, moneycard, robolox, <br /> and footlocker cards—there are no limits.
                </Text>
                <Link to={'/register'}  >
                  <HStack color='blue'>
                      <Text>Coming Soon</Text>
                      <BsFillArrowUpRightCircleFill />
                  </HStack>
                </Link>
            </Stack>
          </HStack>
        </VStack>
    </Box>
  )
}

export default OurCoreServices
