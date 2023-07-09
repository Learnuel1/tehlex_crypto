import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const TradePoint = () => {
    const navigate = useNavigate();
    return (
        <Box maxW={'100vw'} p='2rem' fontFamily='Mulish'>

            <Text mb='.5rem' display={{ base: 'none', md: 'block' }}>
                <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                    onClick={() => navigate(-1)}
                />
            </Text>
            <VStack gap={'1.5rem'}>
                <Heading fontSize={{ base: '20px', md: '24px' }} fontWeight={{ base: 'bold' }} lineHeight={{ base: '18px' }} fontStyle={{ base: 'normal' }} fontFamily='Mulish'>The Value of your Points</Heading>

                <HStack spacing={{ md: '1rem', base: '3rem' }} fontFamily='Mulish'>
                    <VStack >
                        <Heading rounded={'full'} color={'blue'} p='2rem' bg={'blue.100'}>
                            0
                        </Heading>
                        <Text fontWeight={'bold'} >Trade</Text>
                    </VStack>

                    <VStack >
                        <Heading rounded={'full'} color={'blue'} p='2rem' bg={'blue.100'}>
                            0
                        </Heading>
                        <Text fontWeight={'bold'}>Point</Text>
                    </VStack>
                </HStack>

                <Text color={{ base: '#000' }} textAlign={{ md: 'start', base: 'center' }} lineHeight={{ base: '24px' }} fontWeight={{ base: 'normal' }} fontFamily='Mulish'>
                    The average value of a trade is converted to a
                    point based bonus system.
                </Text>
                <Text textAlign={'center'} w={['80%', '80%', '60%']} color={'gray'}>
                    E.g Trade $100 and above worth of Giftcard and earn 3 points, Trade Cryptocurrency worth $500 and above and earn 5 points
                </Text>

                <Button w='50%' bg={'blue'} color='white'>
                    Start trading
                </Button>
            </VStack>
        </Box >
    )
}

export default TradePoint
