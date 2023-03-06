import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading,   Input,  InputGroup,  InputRightElement,  Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const NewPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate();
    console.log(password, confirmPassword);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    // handle confirm password
    const handleConfrim = (e:React.FormEvent) => {
        e.preventDefault();
        navigate("/login")
    }
    
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>                                

                                <FormControl  isRequired>
                                    <FormLabel>password</FormLabel>
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
