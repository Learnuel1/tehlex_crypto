import { Box, Button, Grid, GridItem, Heading, Stack, Text, Image, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import left_arrow from '../assets/images/arrowleft.png'
import small_right_arrow from '../assets/images/smallrightarrow.png'
const ResetPassword = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Box maxW={'100vw'} h='80vh' p='2rem' >
                <Flex align='center' justify={{ md: 'center', base: 'start' }} gap={{ base: '100px', md: '0' }}
                    display={{ md: 'none', base: 'flex' }} flexDirection={{ base: 'row' }}>
                    <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                    <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: 'blue', base: '#303030' }}
                        fontSize={{ base: '20px', md: '15px' }} >Forgot password</Text>
                </Flex>
                <Stack gap={'1rem'} mb='3rem' display={{ md: 'block', base: 'none' }}>
                    <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                        onClick={() => navigate(-1)}
                    />
                    <Heading textAlign={'center'}>Forget Password</Heading>
                </Stack>
                <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
                    <GridItem colSpan={[2, 2, 1, 1]} mt={{ base: '40px' }}>
                        <Stack spacing={'2rem'} display={{ base: 'flex' }} justify={{ base: 'start' }}>
                            <Heading size='md' textAlign={{ md: 'center', base: 'start' }}
                                color={{ base: '#303030', md: 'inherit' }} fontSize={{ base: '24px', md: 'inherit' }}
                                fontWeight={{ base: 'bold' }} fontStyle={{ base: 'normal' }}>
                                Reset your Password
                            </Heading>

                            <Text color={{ md: 'red.300', base: '#111' }}
                                textAlign={{ md: 'center', base: 'start' }} fontSize={{ md: 'inherit', base: '14px' }} lineHeight={{ base: '22px', md: 'inherit' }}>
                                Choose how you would you like to reset your  password
                            </Text>
                        </Stack>
                    </GridItem>

                    <GridItem colSpan={[2, 2, 1, 1]}>
                        <Stack spacing={'2rem'} >
                            <Button
                                onClick={() => navigate('/resetviaemail')}
                                display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'space-between' }} alignItems={{ base: 'center' }} gap={{ base: '25px' }} pt={{ base: '30px', md: '0px' }} pb={{ base: '30px', md: '0px' }}

                            >
                                <Text>Via Email Address</Text>
                                <Image alt='small-arrow' src={small_right_arrow} w='10px' display={{ md: 'none', base: 'block' }} />
                            </Button>

                            <Button
                                onClick={() => navigate('/resetviaphone')}
                                display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'space-between' }} alignItems={{ base: 'center' }} gap={{ base: '25px' }} pt={{ base: '30px', md: '0px' }} pb={{ base: '30px', md: '0px' }}
                            >
                                <Text>Via Phone Number</Text>
                                <Image alt='small-arrow' src={small_right_arrow} w='10px' display={{ md: 'none', base: 'block' }} />
                            </Button>
                        </Stack>
                    </GridItem>

                </Grid>
            </Box>
        </section >
    )
}

export default ResetPassword
