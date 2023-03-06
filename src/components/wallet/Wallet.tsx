import { Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Wallet = () => {
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} minH='40vw' p='3rem' >
        <VStack gap={'1rem'}>
            <Button 
            onClick={() => navigate("/wallet/bank")}
            >
                Bank Account
            </Button>

            <Button
                onClick={() => navigate("/wallet/usdt")}
            >
                 USD Wallet
            </Button>
        </VStack>

        <HStack justify={'space-around'} my={'3rem'}>
            <Text fontWeight={'bold'}>
                Recent Transaction
            </Text>
            <Text>See All</Text>
        </HStack>

        <HStack justify={'center'}>
            <Button size={'sm'} colorScheme={'blue'}>Last 24Hrs</Button>
            <Button size={'sm'}>2 Days</Button>
            <Button size={'sm'}>1 week</Button>
        </HStack>

        <HStack justify={'space-around'} my='3rem' borderBottom={'1px'} p='.5rem'>
            <Stack>
                <Text fontWeight={'semibold'}>Funds Withdrawal</Text>
                <Text>Oct 12</Text>
            </Stack>

            <Stack>
                <Text fontWeight={'semibold'}>₦20,000</Text>
                <Text>WITHDRAWAL</Text>
                <Text p='.2rem' bg={'green.100'} rounded='lg'>completed</Text>
            </Stack>
        </HStack>

        <HStack justify={'space-around'} my='3rem' borderBottom={'1px'} p='.5rem'>
            <Stack>
                <Text fontWeight={'semibold'}>Sold BTC</Text>
                <Text>0.0000005BTC</Text>
                <Text>Oct 12</Text>
            </Stack>

            <Stack>
                <Text fontWeight={'semibold'}>₦500,000</Text>
                <Text>WITHDRAWAL</Text>
                <Text p='.2rem' bg={'green.100'} rounded='lg'>PAID</Text>
            </Stack>
        </HStack>
        
    </Box>
  )
}

export default Wallet
