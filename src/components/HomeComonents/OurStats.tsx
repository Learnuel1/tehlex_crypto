import { Box, Divider, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'

const OurStats = () => {
  return (
    <Box p='3rem' m='1rem'  >
        <VStack spacing={'1rem'}>
        <Heading color={'black'} size={'md'} style={{ fontSize: '40px' }}>OUR STATS</Heading>
        <Text size={['sm','sm','md','md']} style={{ fontSize: '24px' }}>
             We’ve met the needs of Kings across africa. <br /> See how far we’ve come since 2017
        </Text>
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
