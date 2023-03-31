import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading,   Input,  InputGroup,  InputRightElement,  Stack, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { thelex } from '../endpoint/thelex';
import { PASSWORD_RECOVERY } from '../endpoint/route';
import { LOCALSTORAGE } from '../endpoint/localstorage';

const NewPassword = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);
    const toast = useToast();


   
     // handle confirm password
     const id = LOCALSTORAGE.id()?.toString();
    const handleConfrim = async (e:React.FormEvent) => {
        e.preventDefault();
         await thelex.patch(PASSWORD_RECOVERY.RESET_PASSWORD(), 
            {
                id,
                newPassword: confirmPassword,
            } )
        .then(res => {
           
            localStorage.clear();
            toast({
                title: 'Password Reset Successful',
                description: "Login with your new password",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
              navigate("/login")
        })
        .catch(function (error) {
            if(newPassword !== confirmPassword)(
                alert('password does not match. check password!!')
            )
            toast({
                title: error.response.statusText,
                description: "password reset not successful try again!!",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
            //   navigate("/login")
          });
    };

    
  return (
    <section>
    <Box maxW={'100vw'} h='100vh' p='5rem' >
        <Text my='1rem'>
            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                    onClick={() =>navigate(-1) }
                />    
        </Text>            

        <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
            <GridItem colSpan={[2,2,1,1]}>
                <Stack gap={'2rem'}>
                    <Heading size={['lg']}>
                        Enter New Password
                    </Heading>

                    <Text color={'red'}>
                        Generate a strong password for your account
                    </Text>
                    </Stack>
                </GridItem>
                
            <GridItem colSpan={[2,2,1,1]}>
                <Stack gap={'2rem'}>                        
                    <form onSubmit={handleConfrim}>
                            <Stack gap={'1rem'}>
                                <FormControl isRequired>
                                    <FormLabel>New Password</FormLabel>
                                    <Input  type={show ? 'text' : 'password'}
                                         placeholder='New Password'
                                        name='password'
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </FormControl>                                

                                <FormControl  isRequired>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <InputGroup size='md' >
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Confirm new password'
                                        name='new password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <InputRightElement>
                                        <Text cursor={'pointer'} onClick={handleClick} >
                                            {show ? <AiOutlineEye size={'1.2rem'} /> : <AiOutlineEyeInvisible size={'1.2rem'} />}
                                        </Text>                                   
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            </Stack>                    

                            <Button mt='3rem' w='fit-content' colorScheme={'blue'} type='submit'>
                                Confirm
                            </Button>
                    </form>
                </Stack>
            </GridItem>

        </Grid>
    </Box>
</section>
  )
}

export default NewPassword
