import { Box, Button, Flex, FormControl, Heading, Input, Stack, Text, useToast, VStack, Image, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';
import { PASSWORD_RECOVERY } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';
import left_arrow from '../assets/images/arrowleft.png'


const ResetViaEmail = () => {
    const [email, setEmail] = useState<string>('');
    const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate();
    const toast = useToast();

    // handle continue
    const handleContinue = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true)

        await thelex.post(PASSWORD_RECOVERY.RESET_PASSWORD_OTP, { email })
            .then(res => {
                localStorage.setItem('token', res.data.token)
                toast({
                    title: res.statusText,
                    description: "Email is valid",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                setSubmitting(false)
                navigate('/resetmailpin', { state: email })
            })
            .catch(function (error) {
                toast({
                    title: error.response.statusText,
                    description: "email not found",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
                setSubmitting(false)
                //   navigate('/resetemailpin', {state: email})
            });

    };

    return (
        <Stack p='2rem' maxW={'100vw'} h='100vh' fontFamily='Mulish'>
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

            <VStack gap={'4rem'} fontFamily='Mulish'>

                <form onSubmit={handleContinue} >
                    <Heading mt={{ base: '40px' }} size={'md'} textAlign={{ md: 'center', base: 'start' }}
                        color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '24px', md: 'inherit' }}
                        fontWeight={{ base: 'bold' }} fontStyle={{ base: 'normal' }} fontFamily='Mulish'>
                        Enter Email Address:
                    </Heading>


                    <FormControl isRequired fontFamily='Mulish' mt={{ base: '20px' }}>
                        <Text color={{ md: 'red.300', base: '#111' }} fontFamily='Mulish'
                            textAlign={{ md: 'center', base: 'start' }} fontSize={{ md: 'inherit', base: '14px' }} lineHeight={{ base: '22px', md: 'inherit' }}>
                            Enter a valid email address you used to register
                        </Text>

                        <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }} display={{ base: 'block', md: 'none' }} mt={{ base: '30px' }} fontFamily='Mulish' >Email:</FormLabel>
                        <Input h={{ base: '51px', md: '40px' }} type={'email'} placeholder='valid email' name='email'
                            value={email.toLocaleLowerCase()}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <Box mt={{ lg: '4rem', base: '150px' }} display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'center' }}>

                        <Button colorScheme={'blue'} type='submit' disabled={submitting} w={{ base: '80%', md: 'auto' }} backgroundColor={{ base: '#0F37F6', md: 'blue' }} borderRadius={{ base: '20px', md: '7px' }}>
                            {submitting ? 'Verifying Email...' : 'Continue'}
                        </Button>
                    </Box>
                </form>

            </VStack>
        </Stack>
    )
}

export default ResetViaEmail
