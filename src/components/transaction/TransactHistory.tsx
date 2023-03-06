import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const TransactHistory = () => {
  return (
   <Box maxW={'100vw'} minH='40vh' p='2rem'>
        <Heading size={'md'}>
            Transaction History
        </Heading>

        <HStack justify={'center'} my={'2rem'}>
            <Button>All</Button>
            <Button colorScheme={'blue'}>Crypto</Button>
            <Button>Giftcard</Button>
        </HStack>

        <HStack justify={'space-around'} p='.5rem' my='3rem' borderBottom={'solid 1px gray'} >
            <Box>
                <Text fontWeight={'medium'}>Sold BTC</Text>
                <Text>0.0000005BTC</Text>
                <Text>Oct 12</Text>
            </Box>

            <Box>
                <Text fontWeight={'medium'}>₦500,000</Text>
                <Text>PAID</Text>
                <Text bg={'red.100'} p='.3rem'>Pending</Text>
            </Box>
        </HStack>

        
        <HStack justify={'space-around'} p='.5rem' my='3rem' borderBottom={'solid 1px gray'} >
            <Box>
                <Text fontWeight={'medium'}>Sold BTC</Text>
                <Text>0.0000005BTC</Text>
                <Text>Oct 12</Text>
            </Box>

            <Box>
                <Text fontWeight={'medium'}>₦500,000</Text>
                <Text>PAID</Text>
                <Text bg={'red.100'} rounded='lg' p='.3rem'>Pending</Text>
            </Box>
        </HStack>
   </Box>
  )
}

export default TransactHistory
