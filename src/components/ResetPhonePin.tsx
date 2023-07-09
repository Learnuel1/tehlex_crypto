import { Box, Button, Flex, Grid, GridItem, Heading, HStack, PinInput, PinInputField, Stack, Text, useToast, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { LOCALSTORAGE } from '../endpoint/localstorage';
import { PASSWORD_RECOVERY } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';
import left_arrow from '../assets/images/arrowleft.png'

const ResetPhonePin = () => {
    const [otp, setOtp] = useState();
    const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();

    const token = LOCALSTORAGE.token();

    // const handle verify otp    
    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true)
        thelex.get(PASSWORD_RECOVERY.VERIFY_PASSWORD_RESET, { params: { token, otp } })
            .then(res => {
                localStorage.clear()
                localStorage.setItem('id', res.data.id)
                toast({
                    title: res.statusText,
                    description: "Otp verification successfull",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                setSubmitting(false)
                navigate("/newpassword")
            })
            .catch(function (error) {
                toast({
                    title: error.response.statusText,
                    description: "invalid Otp",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
                setSubmitting(false)
                //   navigate("/newpassword") 
            });
    };



    //protecting route
    useEffect(() => {
        if (!location.state) {
            navigate(-1)
        }
    }, []);

    return (
        <section>
            <Box maxW={'100vw'} p={{ base: '2rem', md: '5rem' }} >
                <Flex align='center' justify={{ md: 'center', base: 'start' }} gap={{ base: '100px', md: '0' }} fontFamily='Mulish'
                    display={{ md: 'none', base: 'flex' }} flexDirection={{ base: 'row' }}>
                    <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                    <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: 'blue', base: '#303030' }}
                        fontSize={{ base: '20px', md: '15px' }} >Forgot password</Text>
                </Flex>

                <Text my='1rem' gap={'1rem'} display={{ md: 'block', base: 'none' }} fontFamily='Mulish'>
                    <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                        onClick={() => navigate(-1)}
                    />
                </Text>

                <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
                    <GridItem colSpan={[2, 2, 1, 1]}>
                        <Stack spacing={'2rem'}>
                            <Heading size={['lg']} mt={{ base: '50px', md: '0px' }} textAlign={{ md: 'center', base: 'start' }}
                                color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '24px', md: 'inherit' }}
                                fontWeight={{ base: 'bold' }} fontStyle={{ base: 'normal' }} fontFamily='Mulish'>
                                Reset your Password
                            </Heading>

                            <Text color={{ md: 'inherit', base: '#111' }} display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'start' }} fontSize={{ base: '14px', md: 'inherit' }} lineHeight={{ base: '22px', md: 'auto' }} gap={{ base: '5px' }}>Enter 4 digit code sent to     <Text color='blue' decoration={{ base: 'underline' }}>{location.state}</Text>
                            </Text>

                        </Stack>
                    </GridItem>

                    <GridItem colSpan={[2, 2, 1, 1]}>
                        <form onSubmit={handleVerifyOtp}>
                            <Stack spacing={'4rem'} w={{ base: '95%', md: 'auto' }} mt={{ base: '60px', md: 'auto' }} >
                                <HStack spacing={'1rem'} display={{ base: 'flex' }} justifyContent={{ base: 'center' }} pb={{ base: '100px', md: '0px' }}>
                                    <PinInput otp type='number'
                                        onChange={(e: any) => setOtp(e)}
                                        value={otp}
                                    >
                                        <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} />
                                        <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px' }} />
                                        <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px', }} />
                                        <PinInputField value={otp} required w={{ base: '70px', md: '60px' }} h={{ base: '80px', md: '60px' }} borderRadius={{ base: '13px', }} />
                                    </PinInput>
                                </HStack>

                                <Box mt={{ lg: '4rem', base: '150px' }} display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'center' }} pb={{ base: '50px', md: '0px' }}>
                                    <Button colorScheme={'blue'} type={'submit'}
                                        isDisabled={submitting} w={{ base: '95%', md: 'fit-content' }} backgroundColor={{ base: '#0F37F6', md: 'blue' }} borderRadius={{ base: '20px', md: '7px' }} py={{ base: '23px', md: '0px' }}>
                                        <Text display={{ md: 'block', base: 'none' }}> {submitting ? 'Verifying Otp...' : 'Confirm Otp'}</Text>
                                        <Text display={{ md: 'none', base: 'block' }}> {submitting ? 'Verifying Otp...' : 'Proceed'}</Text>

                                    </Button>
                                </Box>

                                {/* <Button w='fit-content' colorScheme={'blue'}
                                    type={'submit'}
                                    isDisabled={submitting}
                                >
                                    {submitting ? 'Verifying Otp...' : 'Confirm Otp'}
                                </Button> */}
                            </Stack>
                        </form>
                    </GridItem>

                </Grid>
            </Box>
        </section>
    )
}

export default ResetPhonePin;
