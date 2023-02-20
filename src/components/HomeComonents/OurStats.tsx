import { Box, Divider, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const OurStats = () => {
  return (
    <Box p='3rem' m='1rem'  >
        <VStack spacing={'1rem'}>
        <Text color={'blue'}>OUR STATS</Text>
        <Heading size={['sm','sm','md','md']}>
             We’ve met the needs of Kings across africa. <br /> See how far we’ve come since 2017
        </Heading>
        </VStack>

        <VStack color={'gray'} my='2rem'>            
        <Stack  h='100px' p={5}>
           <HStack>
                <Heading size={'sm'} m='1rem'>$10Million <br /> Trades</Heading>
                    <Divider orientation='vertical'  />
                <Heading size={'sm'} m='1rem'>15,000 <br /> Transactions</Heading>
           </HStack>

           <Divider />

           <HStack >
                <Heading size={'sm'} m='1rem'>$10Million <br /> Trades</Heading>
                    <Divider orientation='vertical'  />
                <Heading size={'sm'} m='1rem'>15,000 <br /> Transactions</Heading>
           </HStack>
        </Stack>
        
        </VStack>
    </Box>
  )
}

export default OurStats
