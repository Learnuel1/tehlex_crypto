import { Box, Divider, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'

const OurStats = () => {
  return (
    <Box p='3rem' m='1rem'  >
        <Box pos="absolute" left={['10%','10%','34%','34%']} >
          <Text color={'blue'} fontWeight={'semibold'} >OUR STATS</Text>
        </Box>
        <VStack spacing={'1rem'} mt={'2.5rem'}>
        <Heading size={['sm','sm','md','md']}>
             We’ve met the needs of Kings across africa. <br /> See how far we’ve come since 2017
        </Heading>
        </VStack>

        <VStack color={'#7A83A2'} fontWeight={'semibold'} my='2rem'>            
        <Stack  h='130px' p={5}>
           <HStack>
                <Text fontSize={'1rem'} m='1rem'>$10Million <br /> Trades</Text>
                    <Divider orientation='vertical' border="1px" borderColor={'blue.600'}  />
                <Text fontSize={'1rem'} m='1rem'>15,000 <br /> Transactions</Text>
           </HStack>

           <Divider border="1px" borderColor={'blue.600'} />

           <HStack >
                <Text fontSize={'1rem'} m='1rem'>$10Million <br /> Trades</Text>
                    <Divider orientation='vertical' border="1px" borderColor={'blue.600'} />
                <Text fontSize={'1rem'} m='1rem'>15,000 <br /> Transactions</Text>
           </HStack>
        </Stack>
        
        </VStack>
    </Box>
  )
}

export default OurStats
