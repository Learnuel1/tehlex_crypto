import { Box, Button, Checkbox, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, InputGroup, InputRightElement, Stack, Text, useToast, VStack } from '@chakra-ui/react'

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
import register from '../assets/images/register.png'
import signin_logo from '../assets/images/sign_in_logo.png'
import {  USER_REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';


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
    const navigate = useNavigate();
    const toast = useToast();

    

    // handle show
    const handleClick = () => setShow(!show)

    //handle onchange
    const handleOnchange = (e:React.FormEvent) => {
        const {name, value, type, checked}:any = e.target;
        setFormData({...formData,
             [name]: type==='checkbox'? checked : value
            })
    } ;

    // handle create account
    const handleCreateAcount = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       await thelex
        .post(USER_REGISTRATION_ENDPOINT.REGISTER, formData)
        .then(res => {  
            toast({
                title: 'Success',
                description: "Registration successful",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            navigate('/accountverification', {state: formData})
        })
        .catch(() => {
            toast({
                title:'Error',
                description: "whopps something went wrong!!!",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
        //   navigate('/accountverification', {state: formData})
        })           
    }

  return (
    <section>
    <Box maxW={'100vw'} p='3rem'>
        <Grid templateColumns='repeat(2, 1fr)' gap={[0, 0, '2rem']}>
            <GridItem colSpan={[2,2,1,1]} >                   
                <VStack mt={[0, 0,'4rem','4rem']}>
                    <Text mb={'1rem'}>Register</Text>
                    <Image alt='signin_img' src={register} loading='lazy' w='350px' />
                </VStack>
            </GridItem>

            <GridItem colSpan={[2,2,1,1]} > 
                <Stack mt='2rem'>
                    <Image alt='signin_logo' src={signin_logo} w='60px' loading='lazy' ml={'6rem'} />
                    <Heading size={'sm'} mt='1rem' textAlign={'justify'}>
                    Create your King account and start trading 🤠
                    </Heading>
                              
                </Stack>

                {/* form */}

                <form onSubmit={handleCreateAcount}>
                        <Stack mt='2rem' spacing={'1rem'}>
                            <FormControl w={['90%','90%','60%','60%']} isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input type={'text'} placeholder='Full Name' name='name'
                                value={formData.name}
                                onChange={handleOnchange}
                                />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']} isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input type={'text'} placeholder='Username' name='username'
                                value={formData.username}
                                onChange={handleOnchange}
                                />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']} isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type={'email'} placeholder='Email' name='email' 
                                value={formData.email.toLocaleLowerCase()}
                                onChange={handleOnchange}
                                />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']} isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input type={'tel'} placeholder='phone_number' name='phone'
                                value={formData.phone}
                                onChange={handleOnchange}
                                />
                            </FormControl>
                            
                            <FormControl w={['90%','90%','60%','60%']} isRequired>
                                    <FormLabel>password</FormLabel>
                                    <InputGroup size='md' >
                                    <Input
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
                            
                            <Checkbox type={'checkbox'} required
                                name={'checked'}
                                checked={formData.checked}
                                onChange={handleOnchange}
                            >
                            By signing up,  you agree to Tehlex’s terms and policy terms <br /> and policy
                            </Checkbox>

                            <Button w={['60%','60%','60%','60%']} colorScheme={'blue'} type='submit' >
                                 Create account
                            </Button>

                            <Text color='blue'>
                                Already have an account? <Link to={'/login'} >Login</Link>
                            </Text>
                        </Stack>
                    </form>
             </GridItem>
        </Grid>
    </Box>
</section>
  )
}

export default Register

