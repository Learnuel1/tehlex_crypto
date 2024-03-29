import { Box, Button, Flex, Grid, GridItem, Heading, Stack, Text, useToast, } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';


function AccountVerification() {
    const [submitting, setSubmitting] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();

    const email: string = location.state.email.toLowerCase();
    const phoneNumber = location.state.phone;



    //handle verification

    const handleVerify = async () => {
        // send otp to email
        if (email) {
            setSubmitting(true)
            navigate('/verifyEmail', { state: email })
            //    await thelex
            //     .post(USER_REGISTRATION_ENDPOINT.SENT_OTP ,{email:email})
            //     .then(res => {
            //         console.log(res)
            //         toast({
            //             title: res.statusText,
            //             description: "OTP Sent Successfully",
            //             status: 'success',
            //             duration: 4000,
            //             isClosable: true,
            //           })
            //           setSubmitting(false)
            //     navigate('/verifyEmail', {state: email})
            //     })
            //     .catch( (error) => {
            //         console.log(error)
            //         toast({
            //             title: error.response.data.error,
            //             description: "verification error",
            //             status: 'error',
            //             duration: 4000,
            //             isClosable: true,
            //           })
            //           setSubmitting(false)
            //     });
            // } else if(phoneNumber){
            //     // send otp to phone number
            //     setSubmitting(true)
            //     await  thelex
            //     .post(USER_REGISTRATION_ENDPOINT.SENT_OTP, {phoneNumber} )
            //     .then(res => {
            //         console.log(res)
            //         toast({
            //             title: res.status,
            //             description: "Verification successful",
            //             status: 'success',
            //             duration: 4000,
            //             isClosable: true,
            //           })
            //             setSubmitting(false)
            //             navigate('/verifyPhone', {state: phoneNumber})
            //     })
            //     .catch(function (error) {
            //         toast({
            //             title: error.response.data.error,
            //             description: "Verification Not Successfull",
            //             status: 'error',
            //             duration: 4000,
            //             isClosable: true,
            //           })
            //           setSubmitting(false)
            //     });
        }
    };

    // protecting route
    useEffect(() => {
        if (!location.state) {
            navigate('/register')
        }
    }, []);


    return (
        <section>
            <Box maxW={'100vw'} p='5rem' fontFamily='Mulish'>
                <Text my='1rem'>Create account</Text>

                <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
                    <GridItem colSpan={[2, 2, 1, 1]}>
                        <Stack spacing={'2rem'}>
                            <Flex display={{ base: 'flex', md: 'block' }} w={{ base: 'full' }} justify={{ base: 'start' }}>
                                <Heading size={{ md: 'lg' }} color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '20px', md: 'auto' }} fontFamily='Mulish' fontWeight={{ base: 'bold', md: 'medium' }}>
                                    Account Verification
                                </Heading>
                            </Flex>

                            <Flex display={{ base: 'flex', md: 'block' }} w={{ base: 'full' }} justify={{ base: 'start' }}>
                                <Text color={'red.200'}>
                                    Choose how you would like to verify  your account
                                </Text>
                            </Flex>
                        </Stack>
                    </GridItem>

                    <GridItem colSpan={[2, 2, 1, 1]}>
                        <Stack spacing={'2rem'} >
                            <Button colorScheme={'blue'}
                                onClick={handleVerify}
                                isDisabled={submitting}
                            >
                                {submitting ? 'Verifying Email...' : 'Via Email Address'}
                            </Button>

                            <Button isDisabled={submitting} colorScheme={'green'}
                                onClick={handleVerify}
                            >
                                Via Phone Number
                            </Button>
                        </Stack>
                    </GridItem>

                </Grid>
            </Box>
        </section>
    )
}

export default AccountVerification;


