import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, InputGroup, InputRightElement, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import signin from '../assets/images/signin.png'
import signin_logo from '../assets/images/sign_in_logo.png'
import left_arrow from '../assets/images/arrowleft.png'
import { useState } from 'react'
import { thelex } from '../endpoint/thelex'
import { LOGIN_ENDPOINT } from '../endpoint/route';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs

const Signin = () => {

    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const navigate = useNavigate();
    const toast = useToast();

    // handle show password 
    const handleClick = () => setShow(!show)

    // handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true)
        await thelex.post(LOGIN_ENDPOINT.LOGIN, { username: user, password: password })
            .then(res => {
                toast({
                    title: res.statusText,
                    description: "Login successful",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                setSubmitting(false)
                navigate('/verifylogin', { state: { ...res.data, user: user } })
            })
            .catch(function (error) {
                // console.log(error)
                setSubmitting(false)
                if (error.response) {
                    toast({
                        title: error.response.data.error,
                        description: "Check email and password",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                } else {
                    toast({
                        title: error.message,
                        description: "Check email and password",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                }

            });
    }


    return (
        <section>
            <Box maxW={'100vw'} p='3rem'>
                <Grid templateColumns='repeat(2, 1fr)' gap={[0, 0, '2rem']}>
                    <GridItem colSpan={[2, 2, 1, 1]} marginBottom={{ md: 'auto', base: '40px' }} >
                        <VStack w={{ md: 'auto', base: '90%' }} mx={{ base: '5%', md: 'auto' }} >
                            <Flex align={{ md: 'center', base: 'center' }} justify={{ md: 'center', base: 'start' }} gap={{ base: '100px', md: '0' }}>
                                <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                                <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: '#000', base: '#303030' }} fontSize={{ base: '20px', md: '15px' }} >Sign in</Text>
                            </Flex>
                            <Image alt='signin_img' src={signin} loading='lazy' w='350px' display={{ base: "none", md: "block" }} />
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={[2, 2, 1, 1]}  >
                        <Stack mt='2rem' w={{ base: '100%' }}>
                            <Flex align={{ md: 'start', base: 'center' }} justify={{ md: 'center', base: 'center' }}>

                                <Image alt='signin_logo' src={signin_logo} w={{ md: '60px', base: '140px' }} loading='lazy' ml={{ md: '4rem' }} />

                            </Flex>
                            <Flex align={{ md: 'start', base: 'center' }} justify={{ md: 'start', base: 'center' }}   >
                                <Heading fontSize={{ base: '30px' }} color={{ md: 'inherit', base: '#303030' }} fontWeight={{ base: 'bold' }} lineHeight={{ base: 'normal' }} marginTop={{ base: '25px' }} >
                                    Welcome Back 🤠
                                </Heading>
                            </Flex>
                            <Text color={{ md: 'blue', base: '#111' }} textAlign={{ md: 'start', base: 'center' }} fontSize={{ base: '16px' }} fontStyle={{ base: 'normal' }} fontFamily={{ base: '400' }} lineHeight={{ base: '20.5px' }} mt={{ base: '12px' }}>
                                Keep Trading like a King you are
                            </Text>
                        </Stack>

                        {/* form */}

                        <form onSubmit={handleSubmit} >
                            <Stack mt='2rem' spacing={{ md: '1rem', base: '35px' }}>
                                <FormControl w={{ md: '60%', base: '95%' }} marginLeft={{ base: '2.5%', md: '0%' }} marginRight={{ base: '2.5%', md: '0%' }} isRequired isDisabled={submitting}>
                                    <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }}>Username:</FormLabel>
                                    <Input borderColor={{ md: 'inherit', base: '#7C7C7C' }} w={{ base: '100%' }} borderWidth={{ base: '1px', md: 'auto' }} borderStyle={{ base: 'solid', md: 'inherit' }} height={{ base: '51px', md: '40px' }} backgroundColor={{ base: '#fff', md: 'inherit' }} type='text' placeholder='username'
                                        name='userEmail' value={user}
                                        onChange={(e) => (setUser(e.target.value))}

                                    />
                                </FormControl>

                                <FormControl w={{ md: '60%', base: '95%' }} marginLeft={{ base: '2.5%', md: '0%' }} marginRight={{ base: '2.5%', md: '0%' }} isRequired isDisabled={submitting}>
                                    <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }}>password</FormLabel>
                                    <InputGroup  >
                                        <Input
                                            pr='4.5rem'
                                            borderColor={{ md: 'inherit', base: '#7C7C7C' }} w={{ base: '100%' }} borderWidth={{ base: '1px', md: 'auto' }} borderStyle={{ base: 'solid', md: 'inherit' }} height={{ base: '51px', md: '40px' }} backgroundColor={{ base: '#fff', md: 'inherit' }}
                                            type={show ? 'text' : 'password'}
                                            placeholder='password'
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <InputRightElement>
                                            <Text cursor={'pointer'} onClick={handleClick} >
                                                {show ? <AiOutlineEye size={'1.2rem'} /> : <AiOutlineEyeInvisible size={'1.2rem'} />}
                                            </Text>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Text color={'blue'} mb={'1rem'} fontSize='14px' textAlign={{ base: 'end', md: 'start' }}>
                                    <Link to={'/resetpassword'}>Forgot Password ?</Link>
                                </Text>
                                <Flex align={{ md: 'start', base: 'center' }} justify={{ md: 'start', base: 'center' }}  >
                                    <Button w={{ base: '85%', md: '60%' }} borderRadius={{ md: 'auto', base: '20px' }}
                                        colorScheme={'blue'} backgroundColor={{ base: '#0F37F6', md: 'inherit' }} py={{ base: '24px', md: 'auto' }} type='submit'
                                        isDisabled={submitting}
                                    >
                                        {submitting ? 'Submitting...' : 'Submit'}
                                    </Button></Flex>
                                <Flex align={{ md: 'start', base: 'center' }} justify={{ md: 'start', base: 'center' }} gap={{ md: '0', base: '4px' }}  >

                                    <Text color={{ md: 'inherit', base: '#111' }} >Don’t have an account?</Text> <Link to={'/register'} >     <Text color='blue' textAlign={{ md: 'start', base: 'center' }}>Create one</Text></Link>

                                </Flex>
                            </Stack>
                        </form>
                    </GridItem>
                </Grid>
            </Box>
        </section >
    )
}

export default Signin
