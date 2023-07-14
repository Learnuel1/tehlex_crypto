import { Box, Button, Heading, HStack, PinInput, PinInputField, Stack, Text, VStack, Image, Flex } from '@chakra-ui/react'
import { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import left_arrow from '../../assets/images/arrowleft.png'
const TransactionPin = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState();

    // const handle verify otp
    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`your otp is ${otp}`)
        navigate('/dashboard/setup/confirmpin')
    };

    return (
        <Box maxW={'100vw'} p='2rem' minH={'40vw'} fontFamily='Mulish'>
            <Text mb='.5rem' display={{ base: 'none', md: 'block' }}>
                <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                    onClick={() => navigate(-1)}
                />
            </Text>
            <Flex align={{ md: 'center', base: 'center' }} justify={{ md: 'center', base: 'start' }} gap={{ base: '60px', md: '0' }}>
                <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: '#000', base: '#303030' }} fontSize={{ base: '20px', md: '15px' }} fontFamily='Mulish' display={{ base: 'block', md: 'none' }}>Transaction Pin</Text>
            </Flex>

            <VStack gap={'2rem'} mt={{ base: '80px', md: '0px' }}>
                <Heading size={'md'} color={{ base: '#303030', md: 'inherit' }} fontFamily='Mulish' fontSize={{ base: '24px', md: 'inherit' }}>Set up PIN</Heading>

                <form onSubmit={handleVerifyOtp} >
                    <Stack spacing={'4rem'} w={{ base: '95%', md: 'auto' }} mt={{ base: '60px', md: 'auto' }} fontFamily='Mulish'>
                        <HStack spacing={'1rem'} display={{ base: 'flex' }} justifyContent={{ base: 'center' }} pb={{ base: '100px', md: '0px' }}>
                            <PinInput otp type='number' size={'lg'}
                                onChange={(e: any) => setOtp(e)}
                                value={otp}

                            >
                                <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} />
                                <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} />
                                <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} />
                                <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} />
                            </PinInput>
                        </HStack>

                        <Button w='full' bg={{ md: 'blue.500', base: '#0F37F6' }} borderRadius={{ base: '20px', md: 'auto' }} colorScheme={'blue'} fontFamily='Mulish'
                            type={'submit'}
                        >
                            Confirm
                        </Button>
                    </Stack>
                </form>
            </VStack>
        </Box >
    )
}

export default TransactionPin
