import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, InputGroup, InputRightElement, Stack, Text, useToast, VStack } from '@chakra-ui/react'

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
import register from '../assets/images/register.png'
import signin_logo from '../assets/images/sign_in_logo.png'
import { USER_REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';
import left_arrow from '../assets/images/arrowleft.png'


interface FormProps {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: number | string;
    checked: boolean;
};

const initial = {
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    checked: false,
}

const Register = () => {
    const [formData, setFormData] = useState<FormProps>(initial);
    const [show, setShow] = useState(false);
    const [submitting, setSubmitting] = useState(false);



    const navigate = useNavigate();
    const toast = useToast();



    // handle show
    const handleClick = () => setShow(!show)

    //handle onchange
    const handleOnchange = (e: React.FormEvent) => {
        const { name, value, type, checked }: any = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    };

    // handle create account
    const handleCreateAcount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true)
        // await thelex
        //     .post(USER_REGISTRATION_ENDPOINT.REGISTER, formData)
        //     .then(res => {
        //         toast({
        //             title: res.statusText,
        //             description: "Registration successful",
        //             status: 'success',
        //             duration: 4000,
        //             isClosable: true,
        //         })
        //         setSubmitting(false)
        //         navigate('/accountverification', { state: formData })
        //     })
        // .catch((error) => {
        //     toast({
        //         title: error.response.data.error,
        //         description: "whopps something went wrong!!!",
        //         status: 'error',
        //         duration: 4000,
        //         isClosable: true,
        //     })
        //     setSubmitting(false)
        // })
        navigate('/accountverification', { state: formData })
    }

    return (
        <section>
            <Box maxW={'100vw'} p='3rem'>
                <Grid templateColumns='repeat(2, 1fr)' gap={[0, 0, '2rem']}>
                    <GridItem colSpan={[2, 2, 1, 1]} marginBottom={{ md: 'auto', base: '40px' }}>
                        <VStack w={{ md: 'auto', base: '90%' }}>
                            <Flex align={{ md: 'center', base: 'start' }} justify={{ md: 'center', base: 'start' }} gap={{ base: '50px', md: '0px' }}>
                                <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                                <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: '#000', base: '#303030' }} fontSize={{ base: '20px', md: '15px' }} display={{ base: 'block', md: 'none' }} >create account</Text>
                            </Flex>
                            <Text mb={'1rem'} display={{ md: 'block', base: 'none' }}>Register</Text>
                            <Image alt='signin_img' src={register} loading='lazy' w='350px' display={{ base: "none", md: "block" }} />
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={[2, 2, 1, 1]} >
                        <Stack mt='2rem' display={{ base: 'none', md: 'block' }}>
                            <Image alt='signin_logo' src={signin_logo} w='60px' loading='lazy' ml={'6rem'} />
                            <Heading size={'sm'} mt='1rem' textAlign={'justify'}>
                                Create your King account and start trading 🤠
                            </Heading>

                        </Stack>

                        {/* form */}

                        <form onSubmit={handleCreateAcount}>
                            <Stack mt='2rem' spacing={{ md: '1rem', base: '35px' }} >
                                <FormControl w={{ md: '60%', base: '95%' }} marginLeft={{ base: '2.5%', md: '0%' }} marginRight={{ base: '2.5%', md: '0%' }} isRequired isDisabled={submitting}>
                                    <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }}>Full Name</FormLabel>
                                    <Input borderColor={{ md: 'inherit', base: '#7C7C7C' }} w={{ base: '100%' }} borderWidth={{ base: '1px', md: 'auto' }} borderStyle={{ base: 'solid', md: 'inherit' }} height={{ base: '51px', md: '40px' }} backgroundColor={{ base: '#fff', md: 'inherit' }} type={'text'} placeholder='Full Name' name='name'
                                        value={formData.name}
                                        onChange={handleOnchange}
                                    />
                                </FormControl>

                                <FormControl w={{ md: '60%', base: '95%' }} marginLeft={{ base: '2.5%', md: '0%' }} marginRight={{ base: '2.5%', md: '0%' }} isRequired isDisabled={submitting}>
                                    <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }}>Username</FormLabel>
                                    <Input borderColor={{ md: 'inherit', base: '#7C7C7C' }} w={{ base: '100%' }} borderWidth={{ base: '1px', md: 'auto' }} borderStyle={{ base: 'solid', md: 'inherit' }} height={{ base: '51px', md: '40px' }} backgroundColor={{ base: '#fff', md: 'inherit' }} type={'text'} placeholder='Username' name='username'
                                        value={formData.username}
                                        onChange={handleOnchange}
                                    />
                                </FormControl>

                                <FormControl w={{ md: '60%', base: '95%' }} marginLeft={{ base: '2.5%', md: '0%' }} marginRight={{ base: '2.5%', md: '0%' }} isRequired isDisabled={submitting}>
                                    <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }}>Email</FormLabel>
                                    <Input borderColor={{ md: 'inherit', base: '#7C7C7C' }} w={{ base: '100%' }} borderWidth={{ base: '1px', md: 'auto' }} borderStyle={{ base: 'solid', md: 'inherit' }} height={{ base: '51px', md: '40px' }} backgroundColor={{ base: '#fff', md: 'inherit' }} type={'email'} placeholder='Email' name='email'
                                        value={formData.email.toLocaleLowerCase()}
                                        onChange={handleOnchange}
                                    />
                                </FormControl>

                                <FormControl w={{ md: '60%', base: '95%' }} marginLeft={{ base: '2.5%', md: '0%' }} marginRight={{ base: '2.5%', md: '0%' }} isRequired isDisabled={submitting}>
                                    <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }}>Phone</FormLabel>
                                    <Input borderColor={{ md: 'inherit', base: '#7C7C7C' }} w={{ base: '100%' }} borderWidth={{ base: '1px', md: 'auto' }} borderStyle={{ base: 'solid', md: 'inherit' }} height={{ base: '51px', md: '40px' }} backgroundColor={{ base: '#fff', md: 'inherit' }} type={'tel'} placeholder='phone_number' name='phone'
                                        value={formData.phone}
                                        onChange={handleOnchange}
                                    />
                                </FormControl>

                                <FormControl w={{ md: '60%', base: '95%' }} marginLeft={{ base: '2.5%', md: '0%' }} marginRight={{ base: '2.5%', md: '0%' }} isRequired isDisabled={submitting}>
                                    <FormLabel color={{ base: '#000' }} fontSize={{ base: '15px' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: 'normal' }}>password</FormLabel>
                                    <InputGroup size='md' >
                                        <Input
                                            borderColor={{ md: 'inherit', base: '#7C7C7C' }} w={{ base: '100%' }} borderWidth={{ base: '1px', md: 'auto' }} borderStyle={{ base: 'solid', md: 'inherit' }} height={{ base: '51px', md: '40px' }} backgroundColor={{ base: '#fff', md: 'inherit' }}
                                            pr='4.5rem'
                                            type={show ? 'text' : 'password'}
                                            placeholder='Enter password'
                                            name='password'
                                            value={formData.password}
                                            onChange={handleOnchange}
                                        />
                                        <InputRightElement>
                                            <Text cursor={'pointer'} onClick={handleClick} >
                                                {show ? <AiOutlineEye size={'1.2rem'} /> : <AiOutlineEyeInvisible size={'1.2rem'} />}
                                            </Text>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <Checkbox w={{ base: '90%', md: 'auto' }} display={{ base: 'flex' }} color={{ base: '#111', md: 'inherit' }} fontSize={{ base: '14px', md: 'inherit' }} fontWeight={{ base: 'normal' }} lineHeight={{ base: '20.5px', md: 'inherit' }} type={'checkbox'} required isDisabled={submitting}
                                    name={'checked'}
                                    checked={formData.checked}
                                    onChange={handleOnchange}
                                >
                                    By signing up,  you agree to Tehlex’s <Link to='/terms'>Terms and Policy</Link>
                                </Checkbox>

                                <Flex align={{ md: 'start', base: 'center' }} justify={{ md: 'start', base: 'center' }}  >
                                    <Button w={{ base: '95%', md: '60%' }} borderRadius={{ md: 'auto', base: '20px' }}
                                        colorScheme={'blue'}
                                        backgroundColor={{ base: '#0F37F6', md: 'blue' }} py={{ base: '24px', md: 'auto' }} type='submit'

                                        isDisabled={submitting}
                                    >
                                        {submitting ? 'Creating Account...' : 'Create account'}
                                    </Button></Flex>

                                <Flex align={{ md: 'start', base: 'center' }} justify={{ md: 'start', base: 'center' }} gap={{ md: '0', base: '4px' }}  >

                                    <Text color={{ md: 'inherit', base: '#111' }} > Already have an account?</Text> <Link to={'/login'} >     <Text color='blue' textAlign={{ md: 'start', base: 'center' }}>Login</Text></Link>

                                </Flex>

                            </Stack>

                        </form>
                    </GridItem>
                </Grid>
            </Box>
        </section>
    )
}

export default Register

