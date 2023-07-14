import { Box, Button, Flex, Grid, GridItem, Heading, HStack, PinInput, PinInputField, Stack, Text, useToast, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';
import left_arrow from '../assets/images/arrowleft.png'


const VerifyEmail = () => {
    const location = useLocation();
    const email = location.state
    const [otp, setOtp] = useState();
    const toast = useToast();
    const navigate = useNavigate();

    // handle confirm otp
    const handleConfirmOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        await thelex
            .post(USER_REGISTRATION_ENDPOINT.VERIFY_OTP, { 'otp': otp })
            .then((res) => {
                toast({
                    title: res.statusText,
                    description: "Registration Completed Successfully",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
                navigate('/feedback');
            })
            .catch((error) => {
                toast({
                    title: error.response.data.error,
                    description: "Check again",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            });

        //testing
        //   navigate('/feedback');
    };

    // resend otp
    const OtpResend = () => {
        thelex
            .post(USER_REGISTRATION_ENDPOINT.SENT_OTP, { email: email })
    }

    // protecting route
    useEffect(() => {
        if (!location.state) {
            navigate('/register')
        }
    }, []);

    return (
        <section>
            <Box maxW={'100vw'} p={{ base: '2rem', md: '5rem' }}>
                <Flex align='center' justify={{ md: 'center', base: 'start' }} gap={{ base: '60px', md: '0' }} fontFamily='Mulish'
                    display={{ md: 'none', base: 'flex' }} flexDirection={{ base: 'row' }}>
                    <Image alt='left-arrow' src={left_arrow} w='20px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                    <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: 'blue', base: '#303030' }}
                        fontSize={{ base: '20px', md: '15px' }} >Create account</Text>
                </Flex>
                <Text my='1rem' display={{ base: 'none', md: 'block' }}>Create account</Text>

                <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
                    <GridItem colSpan={[2, 2, 1, 1]}>
                        <Stack gap={'2rem'}>
                            <Heading size={['lg']} mt={{ base: '50px', md: '0px' }} textAlign={{ md: 'center', base: 'start' }}
                                color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '24px', md: 'inherit' }}
                                fontWeight={{ base: 'bold' }} fontStyle={{ base: 'normal' }} fontFamily='Mulish'>
                                Verify Email Address
                            </Heading>

                            <Text color={{ md: 'inherit', base: '#111' }} display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'start' }} alignItems={{ base: 'center', md: 'start' }} fontSize={{ base: '12px', md: 'inherit' }} lineHeight={{ base: '22px', md: 'auto' }} gap={{ base: '1px' }}>Enter 4 digit code sent to     <span style={{ color: 'blue', textDecoration: 'underline' }} >{location.state}</span>
                            </Text>

                        </Stack>
                    </GridItem>

                    <GridItem colSpan={[2, 2, 1, 1]}>
                        <form onSubmit={handleConfirmOtp}>
                            <Stack spacing={'4rem'} w={{ base: '95%', md: 'auto' }} mt={{ base: '60px', md: 'auto' }} >
                                <HStack spacing={'1rem'} display={{ base: 'flex' }} justifyContent={{ base: 'center' }} pb={{ base: '100px', md: '0px' }}>
                                    <PinInput otp type='number'
                                        onChange={(e: any) => setOtp(e)}
                                        value={otp}
                                    >
                                        <PinInputField w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} value={otp} required />
                                        <PinInputField w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} value={otp} required />
                                        <PinInputField w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} value={otp} required />
                                        <PinInputField w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} value={otp} required />
                                    </PinInput>
                                </HStack>
                                <Box mt={'2rem'} display={{ base: 'flex', md: 'none' }} justifyContent={{ base: 'center' }}>
                                    <Button cursor={'pointer'} _hover={{ color: 'blue' }}
                                        color='red.300' onClick={OtpResend} colorScheme='none' border={'none'}>
                                        Resend Otp
                                    </Button>
                                </Box>
                                <Box mt={{ lg: '4rem', base: '150px' }} display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'center' }} pb={{ base: '50px', md: '0px' }}>
                                    <Button colorScheme={'blue'} type={'submit'}
                                        w={{ base: '95%', md: 'fit-content' }} backgroundColor={{ base: '#0F37F6', md: 'blue' }} borderRadius={{ base: '20px', md: '7px' }} py={{ base: '23px', md: '0px' }}>

                                        <Text display={{ md: 'none', base: 'block' }}>   Confirm</Text>

                                    </Button>
                                </Box>


                            </Stack>

                            <Box mt={'2rem'} display={{ base: 'none', md: 'block' }}>
                                <Button cursor={'pointer'} _hover={{ color: 'blue' }}
                                    color='red.300' onClick={OtpResend} colorScheme='none' border={'none'}>
                                    Resend Otp
                                </Button>
                            </Box>
                        </form>
                    </GridItem>

                </Grid>
            </Box>
        </section >
    )
}

export default VerifyEmail
