import { Box, Button, FormControl, Heading,  Input, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';
import { PASSWORD_RECOVERY } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';



const ResetViaEmail = () => {
    const [email, setEmail] = useState<string>('');
    const navigate = useNavigate();
    const toast = useToast();

    // handle continue
    const handleContinue = (e:React.FormEvent) => {
        e.preventDefault();
         thelex.post(PASSWORD_RECOVERY.RECOVERY_lINK, {email})
        .then(res => {
            localStorage.setItem('token',res.data.token)
            
            toast({
                title: res.statusText,
                description: "Email is valid",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
              navigate('/resetemailpin', {state: email})
        })
        .catch(function (error) {
            toast({
                title: error.response.statusText,
                description: "email not found",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
            //   navigate('/resetemailpin', {state: email})
          });
    };

  return (
    <Stack p='2rem' maxW={'100vw'} h='100vh' >
        <Stack  my='2rem' gap={'1rem'}>
            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />
            <Heading textAlign={'center'}>Forget Password</Heading>
        </Stack>

        <VStack gap={'4rem'} >

            <form onSubmit={handleContinue} >
            <Heading size={'md'}>
                Enter Email Address:
            </Heading>
           

            <FormControl isRequired>
                <Text color={'red'} p='.5rem'>
                   valid email address you used to register
                </Text>
                <Input type={'email'} placeholder='valid email' name='email'
                    value={email.toLocaleLowerCase()}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormControl>

            <Box mt='4rem'>
                <Button colorScheme={'blue'} type='submit' >
                    Continue
                </Button>
            </Box>
        </form>
        
    </VStack>
    </Stack>
  )
}

export default ResetViaEmail
