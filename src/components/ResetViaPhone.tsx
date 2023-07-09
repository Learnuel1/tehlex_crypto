import { Box, Button, Flex, FormControl, Heading, Input, Stack, Text, VStack, Image, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';
import left_arrow from '../assets/images/arrowleft.png'
const ResetViaPhone = () => {
    const [phone, setphone] = useState<string>('+234');
    const navigate = useNavigate();

    // handle continue
    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/resetphonepin', { state: phone })
    }
    return (
        <Stack p='2rem' maxW={'100vw'} h='100vh' fontFamily='Mulish' >
            <Flex align='center' justify={{ md: 'center', base: 'start' }} gap={{ base: '100px', md: '0' }} fontFamily='Mulish'
                display={{ md: 'none', base: 'flex' }} flexDirection={{ base: 'row' }}>
                <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: 'blue', base: '#303030' }}
                    fontSize={{ base: '20px', md: '15px' }} >Forgot password</Text>
            </Flex>
            <Stack my='2rem' gap={'1rem'} display={{ md: 'block', base: 'none' }} fontFamily='Mulish'>
                <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                    onClick={() => navigate(-1)}
                />
                <Heading textAlign={'center'}>Forget Password</Heading>
            </Stack>

            <VStack gap={'4rem'} >

                <form onSubmit={handleContinue} >
                    <Heading size={'md'} mt={{ base: '40px' }} textAlign={{ md: 'center', base: 'start' }}
                        color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '24px', md: 'inherit' }}
                        fontWeight={{ base: 'bold' }} fontStyle={{ base: 'normal' }} fontFamily='Mulish'>
                        Enter Phone Number:
                    </Heading>


                    <FormControl isRequired fontFamily='Mulish' mt={{ base: '20px' }}>
                        <Text color={{ md: 'red.300', base: '#111' }} fontFamily='Mulish'
                            textAlign={{ md: 'center', base: 'start' }} fontSize={{ md: 'inherit', base: '14px' }} lineHeight={{ base: '22px', md: 'inherit' }}>
                            Enter a valid phone number you used to register
                        </Text>
                        <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }} display={{ base: 'block', md: 'none' }} mt={{ base: '30px' }} fontFamily='Mulish' >Email:</FormLabel>
                        <Input h={{ base: '51px', md: '40px' }} type={'tel'} placeholder='valid phone number' name='phone'
                            value={phone}
                            onChange={e => setphone(e.target.value)}
                        />
                    </FormControl>

                    <Box mt={{ lg: '4rem', base: '150px' }} display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'center' }}>
                        <Button colorScheme={'blue'} type='submit' w={{ base: '80%', md: 'auto' }} backgroundColor={{ base: '#0F37F6', md: 'blue' }} borderRadius={{ base: '20px', md: '7px' }}>
                            Continue
                        </Button>
                    </Box>
                </form>

            </VStack>
        </Stack >
    )
}

export default ResetViaPhone
