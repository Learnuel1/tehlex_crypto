import { Box, Button, Checkbox, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import register from '../assets/images/register.png'
import signin_logo from '../assets/images/sign_in_logo.png'
import { RegisterAuth } from './Api';

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
    
    const navigate = useNavigate();

    //handle onchange
    const handleOnchange = (e:React.FormEvent) => {
        const {name, value, type, checked}:any = e.target;
        setFormData({...formData,
             [name]: type==='checkbox'? checked : value
            })
    } ;

    // handle create account

    const handleCreateAcount = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
        .post(RegisterAuth, formData)
        .then(response => {
        //    console.log(response.data)
        // navigate('/accountverification', {state: formData})
        })
        .catch(function (error) {
            alert(error)
          });
          
          navigate('/accountverification', {state: formData})
    }

  return (
    <section>
    <Box maxW={'100vw'} p='3rem'>
        <Grid templateColumns='repeat(2, 1fr)'>
            <GridItem colSpan={[2,2,1,1]} >                   
                <VStack>
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
                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Full Name</FormLabel>
                                <Input type={'text'} placeholder='Full Name' name='name'
                                value={formData.name}
                                onChange={handleOnchange}
                                />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Username</FormLabel>
                                <Input type={'text'} placeholder='Username' name='username'
                                value={formData.username}
                                onChange={handleOnchange}
                                />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Email</FormLabel>
                                <Input type={'email'} placeholder='Email' name='email' 
                                value={formData.email}
                                onChange={handleOnchange}
                                />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Phone</FormLabel>
                                <Input type={'tel'} placeholder='phone_number' name='phone'
                                value={formData.phone}
                                onChange={handleOnchange}
                                />
                            </FormControl>

                            <FormControl w={['90%','90%','60%','60%']}>
                                <FormLabel>Password</FormLabel>
                                <Input type={'password'} placeholder='password' name='password'
                                value={formData.password}
                                onChange={handleOnchange}
                                />
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
                                Don’t have an account? <Link to={'/signin'} >Create one</Link>
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
